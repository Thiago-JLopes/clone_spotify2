import './style/homeUser.css'
import Header from "../components/Header";
import iconHome from '../assets/house.png'
import iconSearch from '../assets/search-interface-symbol.png'
import iconLibraryClose from '../assets/library.png'
import iconAdd from '../assets/plus.png'
import arrowR from '../assets/arrow-to-right.png'
import arrowL from '../assets/arrow-to-lefth.png'
import iconFilter from '../assets/simbolo-de-interface-de-lista.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../database/firebase';
import { signOut } from 'firebase/auth';
import { fetchProfile, getAccessToken, redirectToAuthCodeFlow } from '../services/apis/authProfile';
import { fetchSeveralAlbuns } from '../services/apis/contents';
import Album from '../components/Album';


export default function Homeuser () {

  const [showLibrary, setShowLibrary] = useState(false);
  const [mostrarMais, setMostrarMais] = useState(false);
  const [profile, setProfile] = useState(null);
  const [album, setAlbum] = useState(null);
  const navigate = useNavigate();


  const client_id = process.env.REACT_APP_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    
    const handleAuthorization = async () => {
        if (!code) {
            // Se não houver código na URL e não houver código salvo no localStorage,
            // redirecionar para a página de autorização
            await redirectToAuthCodeFlow(client_id);
        } else {
            // Use o código da URL ou do localStorage para obter o token de acesso
            const accessToken = await getAccessToken(client_id, code);
            const getProfile = await fetchProfile(accessToken);
            setProfile(getProfile);
          
            // Navega para a página home do usuário após autenticar
            navigate(`/homeUser`);
        }
    };   
    handleAuthorization();
}, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('/');
    }
  },[navigate]);

  //Verificar se expiração do token
  useEffect(() => {
    const checkToken = async () => {
      if(auth.currentUser) {
        try {
          const tokenResult = await auth.currentUser.getIdTokenResult();
          if (tokenResult !== undefined && tokenResult.expirationTime * 1000 < Date.now()) {
            signOut(auth);
            localStorage.removeItem('token');
            localStorage.setItem('msgSessaoExpirada', 'Sua sessão expirou. Por favor, faça login novamente.');
            navigate('/login');
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    }

    checkToken();
    const intervalId = setInterval(checkToken, 60000); // a cada 1 min
    return () => clearInterval(intervalId); // Limpar o intervalo quando o componente for desmontado
  }, [auth, navigate]);


  useEffect(() => {
    
    const albumIDs = ['382ObEPsp2rxGrnsizN5TX','1A2GTWGtFfWp7KSQTwWOyo','2noRn2Aes5aoNVsU6iWThc'];

    //Função recupera os álbuns solicitados
    fetchSeveralAlbuns(albumIDs)
    .then((albumData)=> {
      if(albumData) {
        console.log('Álbuns recuperados:', albumData);
        setAlbum(albumData);
      } else {
        console.log('Nenhum álbum recuperado.');
      }
    })
    .catch((error) => {
      console.log('Erro ao recuperar álbuns:', error.message);
    });
     
      
  }, []);

  console.log(album);
  const hideAndShow = () => {
    setShowLibrary(!showLibrary);
  };

  const expandirBiblioteca = () => {
    setMostrarMais(!mostrarMais);
  };

  return (
    <div className="conteiner-user">
      
      <div className='conteiner-user-2'>
      
        <div className="area-lateral">
        <div className="search-home centerStartColumn">
            <div className='flex-start'><img src={iconHome} alt='icon home' width={"28px"}/> <span className={`${showLibrary ? 'spanMenu' : 'hiden'}`}>Home</span></div>
            <div className='flex-start'><img src={iconSearch} alt='icon search' width={"27px"}/><span className={`${showLibrary ? 'spanMenu' : 'hiden'}`}>Look for</span></div>
          </div>

          <div className="user-library" style={{width: showLibrary && mostrarMais ? '42vw' : 'auto'}}>
            <div className='lib-header centerStartColumn'>
              <div className='spaceBetweenRow'>
                <div className='hideShow spaceBetweenRow' onClick={hideAndShow}>
                  <img src={iconLibraryClose} alt='bibliotecaFechada' style={{width:'29px'}}/>
                  <span className={`${showLibrary ? 'spanMenu' : 'hiden'}`}><pre>Your Library</pre></span>
                </div>
                
                <div className={`spaceBetweenRow ${showLibrary ? 'menu-library' : 'hiden'}`}>
                  <div className='criar spaceAround'>
                    <img src={iconAdd} alt='adicionar' style={{width:'20px'}} />
                    <img src={mostrarMais ? arrowL : arrowR} alt='mostrar mais' style={{width:'22px'}} onClick={expandirBiblioteca}/>
                  </div>
                </div>
              </div>

              <div className='containerFilter'>
                <div className={`${showLibrary ? 'filterLibrary' : 'hiden'} ${mostrarMais ? 'spaceBetweenRow' : ''}`}>
                  <div className='filterLibrary1'>
                    <button>Playlists</button>
                    <button>Artists</button>
                  </div>

                  <div className={'spaceBetweenRow'} style={{marginTop: !mostrarMais ? '18px' : '0px'}}>
                    <img src={iconSearch} alt='buscar em sua biblioteca' style={{width:'16px', marginLeft: '5px'}}/>
                    <div className='filterLibrary2 flex-start'>
                      <span>Recent</span>
                      <img src={iconFilter} alt='filtro' style={{width:'17px'}}/>
                    </div>
                  </div>
                </div>
                
                <div className={`${mostrarMais && showLibrary ? 'spaceBetweenRow' : 'hiden'}`}>
                  <div style={{marginRight:'5vw'}}>
                    <span className='spanDescricaoTableResult'>Title</span> 
                  </div>
                  
                  <div className='spaceBetweenRow'>
                    <div style={{marginRight:'8vw'}}><span className='spanDescricaoTableResult'>Date of addition</span></div>
                    <div><span className='spanDescricaoTableResult'>You heard</span></div>
                  </div>
                </div>
                <div className={`${mostrarMais && showLibrary ? 'divisor1' : 'hiden'}`}></div>
              </div>
            </div>
          </div>
    
        </div>
      
        <div className="area-principal">
          <Header className="header-homeUser" profile={profile}/>
          
          <div className='conteudo'>
              {album && 
                <Album infoAlbum={album}/>
              }      
          </div>

          <div className='container3'>
              <div className='player-mobile'></div>
              
              <div className='nav-bar-mobile'>
                <div className='menu-item spaceBetweenColumn'>
                  <img src={iconHome} alt='inicio'/>
                  <span>Home</span>
                </div>

                <div className='menu-item spaceBetweenColumn'>
                  <img src={iconSearch} alt='buscar'/>
                  <span>Search</span>
                </div>

                <div className='menu-item spaceBetweenColumn'>
                  <img src={iconLibraryClose} alt='sua biblioteca' />
                  <span>Your Library</span>
                </div>
              </div>

            </div>
        </div>
      
      </div>
        <div className='player'>teste</div>
    </div>
  );
}