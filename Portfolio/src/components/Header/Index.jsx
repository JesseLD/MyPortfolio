import { Container } from "./style";
import logo from '../../assets/LOGO.png'
import { IoMenuOutline } from "react-icons/io5";


export function Header(){

  return(
    <>
      <Container>
        <nav>
          <ul>
            <li className="Logo-container"><img className="logo" src={logo} alt="" /></li>
            
          </ul>
          <ul className="nav-items">
            <li className="Home"><a href="#">Home</a></li>
            <li className="Contact"><a href="#">Contato</a></li>
            <li className="About"><a href="#">Sobre Mim</a></li>
            <li className="Job"><a href="#">Meus Trabalhos</a></li>
            <li className="menu"><IoMenuOutline/></li>
          </ul>
        </nav>
      </Container>
    </>
  )
}