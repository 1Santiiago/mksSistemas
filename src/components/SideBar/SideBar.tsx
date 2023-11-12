import * as c from './style';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function SideBar() {
  return (
    <c.Aside>
      <c.containerSide>
        <h2>Carrinho <br />de compras</h2>
       <AiOutlineCloseCircle  />
      </c.containerSide>
    </c.Aside>
  );
}

export default SideBar;
