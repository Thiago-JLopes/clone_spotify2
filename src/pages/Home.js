import './style/home.css';
import { Link, useNavigate } from 'react-router-dom';
import iconLibrary from '../assets/library.png';
import iconPlus from '../assets/plus.png';
import iconWWW from '../assets/globe.png';
import logo from '../assets/Spotify_Primary_Logo_RGB_White.png'
import Rodape from '../components/Rodape';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { clientCredentials } from '../utils/APIRoutes';
import Search from '../components/Search';
import MainContent from '../components/MainContent';

export default function Home() {

  //obtém o token de acesso no fluxo client credentials
  useEffect(() => {
    async function fetchClientCredentials() {
      await axios.get(clientCredentials)
      .then(response => {
        console.log("Resposta: ", response);
        localStorage.setItem("clientCredentials", response.data.access_token);
      })
      .catch(error => {
        console.log("Erro na requisição da api: ", error);
      })  
    }

    //Executa a função quando o componente é montado e depois a cada 55mim
    fetchClientCredentials();
    const interval =  setInterval(fetchClientCredentials, 1000 * 60 * 55);

    //Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  },[])

  const navigate = useNavigate();
  const [dataSearch, setDataSearch] = useState('');

  const search = (value) => {
    setDataSearch(value);
  };
  
  return (
    <div className='container'>
      <header className='header-home'>
        <div className='divImageHeader'>
          <img src={logo} alt='logo' title='Spotify' className='logo' onClick={() => navigate('/')}/>
        </div>
        <div className='home-search'>
          <Search onInputChange={search}/>
        </div>
        <div className='buttonsHomeHeader'>
            <button className='subscribe-btn' onClick={()=> navigate('/registro')}>Inscreva-se</button>
            <button className='login-btn' onClick={()=> navigate('/login')}>Entrar</button>
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
        {/*
        <main className='home-area'>
          <div className='conteudo'>
            <div className='recomendacoesAlbuns'>
            <h2 style={{color:'white', padding:'5px'}}>Artistas populares</h2>
              {dataSearch}
            </div>
            <Rodape/>
          </div>
        </main>
         */}
         <MainContent/>
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
