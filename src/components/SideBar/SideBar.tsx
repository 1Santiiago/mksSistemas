import * as c from './style'

function SideBar(onToggleSidebar) {
  return (
    <c.Aside>
        <h1>Carrinho de Compras</h1>
        <p onClick={onToggleSidebar}>fechar</p>
    </c.Aside>
  )
}

export default SideBar