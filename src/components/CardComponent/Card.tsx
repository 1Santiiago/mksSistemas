import * as c from "./style";
import shoppingBag from "../img/shopping-bag.svg";
function Card() {
  return (
    <c.Container>
      <c.Img></c.Img>
      <c.containerTitlePrice>
        <c.H2>Apple Watch Series 4 GPS</c.H2>
        <c.Span>R$1999</c.Span>
      </c.containerTitlePrice>
      <c.P>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</c.P>
      <c.Button>
        <img src={shoppingBag} alt="" />
        Comprar
      </c.Button>
    </c.Container>
  );
}

export default Card;
