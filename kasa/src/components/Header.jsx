import { Link } from 'react-router-dom'
import Nav from "../components/Navbar"
import LogoRed from "../assets/LogoRed.png"

function Header() {
  return (
    <div className='header'>

      <Link to="/" title="home">
      <img className='logo' src={LogoRed} alt='logo-kasa' />
      </Link>

      <Nav />
    </div>
  )
}

export default Header