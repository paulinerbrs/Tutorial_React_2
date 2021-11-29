import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
    var title = "La maison jungle";
    return (
        <div className='header'>
            <img src={logo} alt='La maison jungle' className='logo' />
            <h1 className='title'>{title.toUpperCase()}</h1>
        </div>
    );
}

export default Header;