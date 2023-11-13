import * as c from "./style";
import shoppingBag from "../img/shopping-bag.svg";

interface CardProps {
  title: string;
  price: string; //
  photo: string; //
}

function Card({ title, price, photo }: CardProps) {
  return (
    <c.Container>
      <c.Img src={photo} />
      <c.containerTitlePrice>
      <c.H2>{title}</c.H2>
     <c.P>{price}</c.P>
      </c.containerTitlePrice>
      <c.Button>
        <img src={shoppingBag} alt="" />
        Comprar
      </c.Button>
    </c.Container>
  );
}

export default Card;
