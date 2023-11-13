import * as c from "./style";
import shoppingBag from "../img/shopping-bag.svg";

interface CardProps {
  title: string;
  price: string; //
}

function Card({ title, price, photo }: CardProps) {
  return (
    <c.Container>
      <c.Img src={photo} />

      <c.H2>{title}</c.H2>
      <c.Span>{price}</c.Span>
      <c.Button>
        <img src={shoppingBag} alt="" />
        Comprar
      </c.Button>
    </c.Container>
  );
}

export default Card;
