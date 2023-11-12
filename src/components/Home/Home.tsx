import { useState } from "react";
import Card from "../CardComponent/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import * as c from "./style";
export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />
      <c.allContainers>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </c.allContainers>
      {isSidebarOpen && <SideBar />}
      <Footer />
    </>
  );
}
