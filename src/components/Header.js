import './components.css'
import arrowLefth from '../assets/lefth-chevron .png'
import arrowRight from '../assets/right-chevron.png'
import bell from '../assets/bell.png'

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
                <div className='login-singUp'>
                    <button className='singUp'>Sing up</button>
                    <button className='logIn'>Log in</button>
                </div>

                {/*Se o usuario estiver logado exibir */}
                <div className='notificacao-perfil'>
                    <button>
                        <img src={bell} alt='icon notification'/>
                    </button>

                    <button>
                       perfil
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