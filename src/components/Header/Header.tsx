// Header.jsx
import * as c from "./style";
import Vector from '../img/Vector.svg';

interface HeaderProps {
  onToggleSidebar: () => void; 
}

function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <c.Header>
      <div>
        <c.H1>
          San <sub>Sistemas</sub>
        </c.H1>
      </div>
      <c.divCart>
        <button onClick={onToggleSidebar}>
          <img src={Vector} alt="" />
        </button>
        <span>0</span>
      </c.divCart>
    </c.Header>
  );
}

export default Header;
