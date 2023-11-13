import React from "react";
import * as c from "./style";
import { P } from "../CardComponent/style";

interface CartSiderProps {
  title: string;
  price: string;
  photo: string;
}

const CartSider: React.FC<CartSiderProps> = ({ title, price, photo }) => {
  return (
    <c.ContainerSide>
      <c.CaixaItem>
        <c.Img src={photo} alt="" />
      </c.CaixaItem>
      <c.CaixaItem>
        <c.Title>{title}</c.Title>
      </c.CaixaItem>
      <P style={{ background: "none", color: "#000" }}>{price}</P>
    </c.ContainerSide>
  );
}

export default CartSider;
