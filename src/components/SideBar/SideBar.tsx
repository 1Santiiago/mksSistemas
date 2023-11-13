import CartSider from '../CartSideBar/CartSider';
import FooterSide from '../FooterSide/FooterSide';
import * as c from './style';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function SideBar() {
  return (
    <c.Aside>
      <c.containerSide>
        <h2>Carrinho <br />de compras</h2>
       <AiOutlineCloseCircle  />
      </c.containerSide>
       <CartSider />
  
       <FooterSide />
    </c.Aside>
  );
}

export default SideBar;
