import * as c from "./style";
import Vector from '../img/Vector.svg'
function Header() {
  return (
    <c.Header>
      <div>
        <c.H1>
          MSK <sub>Sistemas</sub>
        </c.H1>
      </div>
      <c.divCart>
        <img src={Vector}alt="" />
        <span>0</span>
      </c.divCart>
    </c.Header>
  );
}

export default Header;
