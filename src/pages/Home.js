import './style/home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Spotify_Primary_Logo_RGB_White.png'
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
    <div className='container spaceBetweenColumn2 col-12'>
      
      <header className='header-home col-12'>
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

      <div className='row-1'>
        
        <section className='section_type_1'>
          <aside>teste</aside>
          <MainContent params={dataSearch}/>
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
      
      
    </div>
  );
}
