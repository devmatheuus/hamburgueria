import './header.css'
import { InputSearch } from '../InputSearch/InputSearch'
import Logo from '../Logo/Logo';


const Header = ({ showProducts }) => {

  return(
    <header className='header'>
      <Logo/>
      <InputSearch showProducts={showProducts}/>
    </header>
  )
}

export default Header;