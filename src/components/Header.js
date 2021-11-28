import logo from '../assets/logo.png';

function Header() {
    var title = "La maison jungle";
    return (
        <div>
            <img src={logo} alt='La maison jungle' className='logo' />
            <h1 className='title'>{title.toUpperCase()}</h1>
        </div>
    );
}

export default Header;