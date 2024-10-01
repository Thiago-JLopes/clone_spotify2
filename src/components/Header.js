// Importa hooks do React
import { useEffect, useState } from 'react';

// Importa o arquivo CSS para estilos
import './style/components.css';
// Importa componentes de navegação do React Router
import { Link, useNavigate } from 'react-router-dom';
// Importa imagens para os botões de navegação e ícones
import arrowLefth from '../assets/lefth-chevron.png';
import arrowRight from '../assets/right-chevron.png';
import bell from '../assets/bell.png';
import userDefault from '../assets/user(1).png';

// Função principal do componente Header
export default function Header(props) {
    // Extrai a propriedade `profile` dos props
    const { profile } = props;
    // Declara estados para controlar se o usuário está logado e se o menu do usuário está visível
    const [usuarioLogado, setUsuarioLogado] = useState(false);
    const [showMenuUsuario, setShowMenuUsuario] = useState(false);
    // Hook de navegação do React Router
    const navigate = useNavigate();

    // Loga o perfil para depuração
    console.log(profile);


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
                    
                    {/* Se o usuário não estiver logado, exibe os botões de login e registro */}
                    <div className={`login-singUp ${usuarioLogado ? 'hiden' : 'center'}`}>
                        <Link to={"/registro"}><button className='singUp center'>Sing up</button></Link>
                        <Link to={'/login'}><button className='logIn center'>Log in</button></Link>
                    </div>

                    {/* Se o usuário estiver logado, exibe as notificações e o perfil */}
                    <div className={`notificacao-perfil ${!usuarioLogado ? 'hiden' : 'center'}`}>
                        <button className='notification center'>
                            <img src={bell} alt='icon notification'/>
                        </button>
                        
                        <button className='perfil center' title={profile ? profile.display_name : 'none'} onClick={() => { setShowMenuUsuario(!showMenuUsuario) }}>
                            <img src={profile && profile.images && profile.images.length > 0 ? profile.images[0].url : userDefault} alt='imagem perfil'/>
                        </button>
                        
                        <div className={`userOptions ${showMenuUsuario ? 'spaceBetweenColumn2' : 'hiden'}`}>
                            <span>Conta</span>
                            <span>Perfil</span>
                            <span>Configurações</span>
                            <div className='divisor'></div>
                            <span>Sair</span>
                        </div>
                    </div>
                </nav>

                {/* Se o usuário estiver logado, exibe o menu */}
                <div className={`${usuarioLogado ? 'menu' : 'hiden'}`}>
                    <button>All</button>
                    <button>Music</button>
                    <button>Podcasts</button>
                </div>
            </div>

            <div className='container-mobile'>
                {/* Espaço para conteúdo adicional em dispositivos móveis */}
            </div>
        </>
    );
}
