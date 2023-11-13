import * as c from "./style";
import apple from "../img/apple-watch.png";
import { Span } from "../CardComponent/style";
function CartSider() {
  return (
    <c.ContainerSide>
      <c.CaixaItem>
        <c.Img src={apple} alt="" />
      </c.CaixaItem>
      <c.CaixaItem>
        <c.Title>
          Apple Watch <br /> Series 4 GPS
        </c.Title>
      </c.CaixaItem>
        <Span style={{ background: "none", color: "#000" }}>R$199</Span>
    </c.ContainerSide>
  );
}

export default CartSider;
