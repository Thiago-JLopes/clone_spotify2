import { auth } from '../database/firebase';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';

import './style/components.css';
import { Link, useNavigate } from 'react-router-dom';
import arrowLefth from '../assets/lefth-chevron .png'
import arrowRight from '../assets/right-chevron.png';
import bell from '../assets/bell.png';
import userDefault from '../assets/user(1).png';

export default function Header () {
    const [usuarioLogado, setUsuarioLogado] = useState(false);
    const [showMenuUsuario, setShowMenuUsuario] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) setUsuarioLogado(true);
    },[]);


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem('token');
            setUsuarioLogado(false);
            navigate('/');
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>    
            <div className='container-header'>
                <nav className='nav-bar'>
                    <div className='back-next'>
                        <button>
                            <img src={arrowLefth} alt='voltar'/>
                        </button>
                        
                        <button>
                            <img src={arrowRight} alt='proximo' />
                        </button>
                    </div>
                    
                    {/*Se o usuario nao estiver logado exibir */}
                    <div className={`login-singUp ${usuarioLogado ? 'hiden' : 'center'}`}>
                        <Link to={"/registro"}><button className='singUp center'>Sing up</button></Link>
                        <Link to={'/login'}><button className='logIn center'>Log in</button></Link>
                    </div>

                    {/*Se o usuario estiver logado exibir */}
                    <div className={`notificacao-perfil ${!usuarioLogado ? 'hiden' : 'center'}`}>
                        <button className='notification center'>
                            <img src={bell} alt='icon notification'/>
                        </button>
                        
                        <button className='perfil center' onClick={() => {setShowMenuUsuario(!showMenuUsuario)}} >
                        <img src={userDefault} alt='imagem perfil' />
                        </button>
                        
                        <div className={`userOptions ${showMenuUsuario ? 'spaceBetweenColumn2' : 'hiden'}`}>
                            <span>Conta</span>
                            <span>Perfil</span>
                            <span>Configurações</span>
                            <div className='divisor'></div>
                            <span onClick={logOut}>Sair</span>
                        </div>

                    </div>
                </nav>

                {/*Se o usuario estiver logado exibir */}
                <div className={`${usuarioLogado ? 'menu' : 'hiden'}`}>
                    <button>All</button>
                    <button>Music</button>
                    <button>Podcasts</button>
                </div>
            </div>

            <div className='container-mobile'>

            </div>
        </>
    );
}