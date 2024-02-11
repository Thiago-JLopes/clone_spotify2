import './components.css'
import { Link } from 'react-router-dom';
import arrowLefth from '../assets/lefth-chevron .png'
import arrowRight from '../assets/right-chevron.png'
import bell from '../assets/bell.png'
import userDefault from '../assets/user(1).png'

export default function Header () {
    return (
        <div>
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
                <div className='login-singUp center'>
                    <Link to={"registro"}><button className='singUp center'>Sing up</button></Link>
                    <Link to={'login'}><button className='logIn center'>Log in</button></Link>
                </div>

                {/*Se o usuario estiver logado exibir */}
                <div className='notificacao-perfil center'>
                    <button className='center'>
                        <img src={bell} alt='icon notification'/>
                    </button>

                    <button className='perfil center'>
                       <img src={userDefault} alt='imagem perfil' />
                    </button>
                </div>
            </nav>

            {/*Se o usuario estiver logado exibir */}
            <div className='menu'>
                <button>All</button>
                <button>Music</button>
                <button>Podcasts</button>
            </div>

        </div>
    );
}