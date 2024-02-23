import './style/home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Spotify_Logo_CMYK_White.png';
import iconHome from '../assets/house.png';
import iconSearch from '../assets/search-interface-symbol.png';
import iconSearch2 from '../assets/pesquisa-m.png';
import iconLibrary from '../assets/library.png';
import iconPlus from '../assets/plus.png';
import iconWWW from '../assets/globe.png';
import Header from '../components/Header';
import iconSpotify from '../assets/spotify-big-logo.png'

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='container1'>
        {/* Menu Lateral */}
        <div className='menu-lateral-home'>
          {/* Filtro de Navegação */}
          <div className='filter'>
            <nav className='nav-search'>
              {/* Link para a Página Principal */}
              <Link to='/'>
                <div className='logo-filter center-start'>
                  <img src={logo} alt='icone logo' style={{ width: '81px', marginLeft: '2px' }} />
                </div>
              </Link>

              {/* Link para a Página Inicial */}
              <Link to='/' style={{ textDecoration: 'none' }}>
                <div className='icon-home center-start'>
                  <img src={iconHome} alt='icone home' style={{ width: '27px' }} />
                  <span>Home</span>
                </div>
              </Link>

              {/* Link para a Página de Busca */}
              <Link to='/' style={{ textDecoration: 'none' }}>
                <div className='icon-search center-start'>
                  <img src={iconSearch} alt='icone search' style={{ width: '26px' }} />
                  <span>Search</span>
                </div>
              </Link>
            </nav>
          </div>

          {/* Biblioteca de Música */}
          <div className='library'>
            <div className='library-head'>
              {/* Link para a Biblioteca do Usuário */}
              <Link className='center myLibrary'>
                <img src={iconLibrary} alt='icone library' style={{ width: '25px' }} />
                <span className='yourLibrary'>Your Library</span>
              </Link>

              {/* Link para Adicionar Novo Conteúdo */}
              <Link className='center plus' style={{ borderRadius: '100px', padding: '5px' }}>
                <img src={iconPlus} alt='icone plus' style={{ width: '15px' }} />
              </Link>
            </div>

            {/* Informações sobre a Biblioteca */}
            <div className='info-library'>
              <div className='info-library-div' style={{marginBottom:'12px'}}>
                <h4>Create your first playlist</h4>
                <p>It's easy, we'll help you</p>
                <button className='button-infoLibrary'>Create playlist</button>
              </div>

              <div className='info-library-div'>
                <h4>Lets find some podcasts to flow</h4>
                <p>We'll keep you updated on new episodes</p>
                <button className='button-infoLibrary'>Browse podcasts</button>
              </div>
            </div>

            {/* Links Diversos */}
            <div className='links-diversos'>
              <pre>Legal    Privacy center    Privacy Policy</pre>
              <pre>Cookies    About Ads     Accessibility</pre>
              <pre>Notice at Collection       Cookies Settings</pre>
              <pre>Cookies</pre>

              {/* Botão de Seleção de Idioma */}
              <button className='center'>
                <img src={iconWWW} alt='icon www' style={{ width: '18px' }} />
                <span>English</span>
              </button>
            </div>
          </div>
        </div>

        {/* Área Principal */}
        <div className='home-area'>
          <Header/>


          <div className='menu-mobile'>
            <nav>
              <ul className='nav-bar'>
                <li className='center-col'> <img src={iconHome} alt='icone inicio'/> <span>Início</span></li>
                <li className='center-col'> <img src={iconSearch2} alt='busca'/> <span>Buscar</span></li>
                <li className='center-col'> <img src={iconLibrary} alt='icone biblioteca' /> <span>Sua Biblioteca</span> </li>
                <li className='center-col'> <img src={iconSpotify} alt='premium' /> <span>Premium</span> </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Rodapé */}
      <footer className='spaceBetweenRow'>
        <div>
          <h5>Preview of Spotify</h5>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>

        <button onClick={() =>{navigate(`/registro`)}}>Sign up free</button>
      </footer>
    </div>
  );
}
