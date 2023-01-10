import Logosvg from '../../svg/laptop.svg';

function Header() {
    const descLogo = "Logo do Blog";
    return(
        <>
        <header className='flex-space-between'>
            <div className='logo border'>
                <img src={Logosvg} alt={descLogo}/>
            </div>
            <div className='search'>
                <input className='input-search' type='text' name='search' />
            </div>
            <ul className='menu'>
                <li><a href='#' className='nav-link'> Categorias </a></li>
                <li><a href='#' className='nav-link'> Sobre </a></li>
                <li><a href='#' className='nav-link'> Contato </a></li>
            </ul>

        </header>
        </>
        
    );
}

export default Header;