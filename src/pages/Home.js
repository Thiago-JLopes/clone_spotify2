import './style/home.css';
import { Link, useNavigate } from 'react-router-dom';
import iconLibrary from '../assets/library.png';
import iconPlus from '../assets/plus.png';
import iconWWW from '../assets/globe.png';
import Album from '../components/Album';
import { useState } from 'react';
import Rodape from '../components/Rodape';

export default function Home() {

  const navigate = useNavigate();
  const [album, setAlbum] = useState(null);

  
  return (
    <div className='container'>
      <header className='header-home'>
          {/* Logo */}
          teste
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
            <h2 style={{color:'white', padding:'5px'}}>Novos Álbuns</h2>

              {album && 
                <Album infoAlbum={album}/>
              }
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
