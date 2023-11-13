import { useEffect, useState } from "react";
import Card from "../CardComponent/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import * as c from "./style";
export default function Home() {
  interface Product {
    name: string;
    price: number;
    thumbnail: void;
    title: string;
  }

  const [prod, setProd] = useState<Product[]>([]);

  const query = "";

  const getProd = async (searchQuery: string) => {
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${searchQuery}?limit=8`
      );

      if (!response.ok) {
        throw new Error(`Erro de rede - Código ${response.status}`);
      }

      const data = await response.json();
      console.log("Dados recuperados com sucesso:", data.results);
      setProd(data.results);
    } catch (error:any) {
      console.error("Erro ao recuperar os dados:", error.message);
    }
  };

  useEffect(() => {
    getProd(query);
  }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />
      <c.allContainers>
        {prod.map((produto, id) => (
          <Card
            key={id}
            title={produto.title}
            price={produto.price}
            photo={produto.thumbnail}
          />
        ))}
      </c.allContainers>
      {isSidebarOpen && <SideBar />}
      <Footer />
    </>
  );
}
