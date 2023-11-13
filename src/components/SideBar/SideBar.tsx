import CartSider from '../CartSideBar/CartSider';
import FooterSide from '../FooterSide/FooterSide';
import * as c from './style';
import { AiOutlineCloseCircle } from 'react-icons/ai';



function SideBar() {
<CartSider title="Nome do Produto" price="R$ 10,00" photo="caminho/para/imagem.jpg" />
  return (
    <c.Aside>
      <c.containerSide>
        <h2>Carrinho <br />de compras</h2>
       <AiOutlineCloseCircle  />
      </c.containerSide>
       <CartSider title='san' price='10' photo='122' />
       <FooterSide />
    </c.Aside>
  );
}

export default SideBar;
