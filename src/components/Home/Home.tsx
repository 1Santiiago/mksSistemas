import { useEffect, useState } from "react";
import Card from "../CardComponent/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import * as c from "./style";
export default function Home() {
  interface Product {
    name: string;
    price: string;
    thumbnail: string;
    title: string;
  }

  const [prod, setProd] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const query = "Iphone 15";

  const getProd = async (searchQuery: string, pageNumber: number) => {
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${searchQuery}&limit=${itemsPerPage}&offset=${
          (pageNumber - 1) * itemsPerPage
        }`
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
    getProd(query, page);
  }, [query, page]);

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
