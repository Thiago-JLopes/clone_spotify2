import './style/homeUser.css'
import iconSearch from '../assets/search-interface-symbol.png'
import iconLibraryClose from '../assets/library.png'
import iconAdd from '../assets/plus.png'
import arrowR from '../assets/arrow-to-right.png'
import arrowL from '../assets/arrow-to-lefth.png'
import iconFilter from '../assets/simbolo-de-interface-de-lista.png'
import logo from '../assets/Spotify_Primary_Logo_RGB_White.png'
import { useState } from 'react';
import MainContent from '../components/MainContent'
import Search from '../components/Search'


export default function Homeuser() {

  const [showLibrary, setShowLibrary] = useState(false);
  const [mostrarMais, setMostrarMais] = useState(false);
  const [dataSearch, setDataSearch] = useState('');

  const search = (value) => {
    setDataSearch(value);
  };

  const hideAndShow = () => {
    setShowLibrary(!showLibrary);
  };

  const expandirBiblioteca = () => {
    setMostrarMais(!mostrarMais);
  };

  return (
    <div className="container-user">
      
      <header className='header-home col-12'>
        <div className='home-search'>
          <img src={logo} alt='logo' title='Spotify' className='logo'/>
          <Search onInputChange={search}/>
        </div>
        <div className='buttonsHomeHeader'></div>
      </header>

      <div className='container-user-2'>
        <aside className="area-lateral">
          <div className="user-library" style={{ width: showLibrary || mostrarMais ? '50vw' : 'auto' }}>
            <div className='lib-header centerStartColumn'>
              <section className='spaceBetweenRow'>
                <div className='hideShow spaceBetweenRow' onClick={hideAndShow}>
                  <img src={iconLibraryClose} alt='bibliotecaFechada' style={{ width: '29px' }} />
                  <span className={`${showLibrary ? 'spanMenu' : 'hiden'}`}><pre>Your Library</pre></span>
                </div>

                <div className={`spaceBetweenRow ${showLibrary ? 'menu-library' : 'hiden'}`}>
                  <div className='criar spaceAround'>
                    <img src={iconAdd} alt='adicionar' style={{ width: '20px' }} />
                    <img src={mostrarMais ? arrowL : arrowR} alt='mostrar mais' style={{ width: '22px' }} onClick={expandirBiblioteca} />
                  </div>
                </div>
              </section>

              <section className='containerFilter'>
                <div className={`${showLibrary ? 'filterLibrary' : 'hiden'} ${mostrarMais ? 'spaceBetweenRow' : ''}`}>
                  <div className='filterLibrary1'>
                    <button>Playlists</button>
                    <button>Artists</button>
                  </div>

                  <div className={'spaceBetweenRow'} style={{ marginTop: !mostrarMais ? '18px' : '0px' }}>
                    <img src={iconSearch} alt='buscar em sua biblioteca' style={{ width: '16px', marginLeft: '5px' }} />
                    <div className='filterLibrary2 flex-start'>
                      <span>Recent</span>
                      <img src={iconFilter} alt='filtro' style={{ width: '17px' }} />
                    </div>
                  </div>
                </div>

                <div className={`${mostrarMais && showLibrary ? 'spaceBetweenRow' : 'hiden'}`}>
                  <div style={{ marginRight: '5vw' }}>
                    <span className='spanDescricaoTableResult'>Title</span>
                  </div>

                  <div className='spaceBetweenRow'>
                    <div style={{ marginRight: '8vw' }}><span className='spanDescricaoTableResult'>Date of addition</span></div>
                    <div><span className='spanDescricaoTableResult'>You heard</span></div>
                  </div>
                </div>
                <div className={`${mostrarMais && showLibrary ? 'divisor1' : 'hiden'}`}></div>
              </section>
            </div>
          </div>
        </aside>

        <MainContent params={dataSearch}/>
      </div>
      <div className='player'>teste</div>
    </div>
  );
}