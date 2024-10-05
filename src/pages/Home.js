import './style/home.css';
import { Link, useNavigate } from 'react-router-dom';
import iconLibrary from '../assets/library.png';
import iconPlus from '../assets/plus.png';
import iconWWW from '../assets/globe.png';
import iconHouse from '../assets/house.png';
import logo from '../assets/Spotify_Primary_Logo_RGB_White.png'
import searchIcon from '../assets/search.png'
import Rodape from '../components/Rodape';
import { useState } from 'react';

export default function Home() {

  const navigate = useNavigate();
  const [dataSearch, setDataSearch] = useState('');

  const search = (e) => {
    setDataSearch(e);
  };
  
  return (
    <div className='container'>
      <header className='header-home'>
        {/* Logo */}
        <img src={logo} alt='logo' title='Spotify' className='logo' onClick={() => navigate('/')}/>

        {/* Área de Busca e Ícones */}
        <div className='home-search'>
          <div className='center'>
            <div id='iconHome' className='icon'>
              <img src={iconHouse} alt='Início' title='Início' />
            </div>

            <div id='input-search' className='search-bar'>
              <img src={searchIcon} alt='Buscar' title='Buscar' />
              <input type='text' placeholder='O que você quer ouvir' onChange={(e)=>search(e.target.value)}/>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className='buttonsHomeHeader'>
            <button className='subscribe-btn' onClick={()=> navigate('/registro')}>Inscreva-se</button>
            <button className='login-btn' onClick={()=> navigate('/login')}>Entrar</button>
          </div>
        </div>
      </header>

      <section className='container1'>
        {/* Menu Lateral */}
        <aside className='menu-lateral-home'>
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
        </aside>

        {/* Área Principal */}
        <main className='home-area'>
          <div className='conteudo'>
            <div className='recomendacoesAlbuns'>
            <h2 style={{color:'white', padding:'5px'}}>Artistas populares</h2>
              
            </div>
            <Rodape/>
          </div>
        </main>
      </section>
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
