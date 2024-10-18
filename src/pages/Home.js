import './style/home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Spotify_Primary_Logo_RGB_White.png'
import library from '../assets/library.png';
import create from '../assets/plus.png';
import wwwImage from '../assets/globe.png'
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
    const interval = setInterval(fetchClientCredentials, 1000 * 60 * 55);

    //Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [])

  const navigate = useNavigate();
  const [dataSearch, setDataSearch] = useState('');

  const search = (value) => {
    setDataSearch(value);
  };

  return (
    <div className='container spaceBetweenColumn2 col-12'>

      <header className='header-home col-12'>
        <div className='divImageHeader'>
          <img src={logo} alt='logo' title='Spotify' className='logo' onClick={() => navigate('/')} />
        </div>
        <div className='home-search'>
          <Search onInputChange={search} />
        </div>
        <div className='buttonsHomeHeader'>
          <button className='subscribe-btn' onClick={() => navigate('/registro')}>Inscreva-se</button>
          <button className='login-btn' onClick={() => navigate('/login')}>Entrar</button>
        </div>
      </header>

      <div className='row-1'>

        <section className='section_type_1'>
          <aside>

            <div className='header-aside'>
              <span><img src={library} alt='Sua biblioteca' title='Ocultar Sua Biblioteca' style={{ marginRight: '5px' }} /> Sua Biblioteca</span>
              <div className='create'>
                <img src={create} alt='Criar playlist ou pasta' title='Criar playlist ou pasta' style={{ width: '18px' }} />
              </div>
            </div>

            <div className='main-aside'>
              <article>
                <p style={{ fontWeight: '600' }}>Crie sua primeira playlist</p>
                <p style={{fontSize:'small'}}>É fácil vamos te ajudar.</p>
                <button>Criar Playlist</button>
              </article>

              <article>
                <p style={{ fontWeight: '600' }}>Que tal seguir um podcast novo?</p>
                <p style={{fontSize:'small'}}>Avisaremos você sobre novos episódios.</p>
                <button>Explore podcasts</button>
              </article>
            </div>

            <div className='footer-aside'>
              <article>
                <pre>Legal    Segurança e Centro de privacidade</pre>
                <pre>Política de privacidade    Cookies   Sobre anúncios</pre>
                <pre>Acessibilidade</pre>
              </article>

              <div className='language'>
                <img src={wwwImage} alt='idioma' style={{width: '17px'}}/>
                <span>Português do Brasil</span>
              </div>
            </div>

          </aside>
          <MainContent params={dataSearch} />
        </section>

        {/* Rodapé */}
        <footer className='spaceBetweenRow'>
          <div>
            <h5>Preview of Spotify</h5>
            <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
          </div>
          <button onClick={() => { navigate(`/registro`) }}>Sign up free</button>
        </footer>
      </div>


    </div>
  );
}
