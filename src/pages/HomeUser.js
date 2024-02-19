import './style/homeUser.css'
import Header from "../components/Header";
import iconHome from '../assets/house.png'
import iconSearch from '../assets/search-interface-symbol.png'
import iconLibraryClose from '../assets/library.png'
import iconAdd from '../assets/plus.png'
import arrowR from '../assets/arrow-to-right.png'
import iconFilter from '../assets/simbolo-de-interface-de-lista.png'
import { useEffect, useState } from 'react';

export default function Homeuser () {

  const [showLibrary, setShowLibrary] = useState(false);

  const hideAndShow = () => {
    setShowLibrary(!showLibrary);
  }

  return (
    <div className="conteiner-user">
      
      <div className='conteiner-user-2'>
      
        <div className="area-lateral">
        <div className="search-home centerStartColumn">
            <div className='flex-start'><img src={iconHome} alt='icon home' width={"28px"}/> <span className={`${showLibrary ? 'spanMenu' : 'hiden'}`}>Home</span></div>
            <div className='flex-start'><img src={iconSearch} alt='icon search' width={"27px"}/><span className={`${showLibrary ? 'spanMenu' : 'hiden'}`}>Look for</span></div>
          </div>

          <div className="user-library">
            <div className='lib-header centerStartColumn'>
              <div className='spaceBetweenRow'>
                <div className='hideShow spaceBetweenRow' onClick={hideAndShow}>
                  <img src={iconLibraryClose} alt='bibliotecaFechada' style={{width:'29px'}}/>
                  <span className={`${showLibrary ? 'spanMenu' : 'hiden'}`}><pre>Your Library</pre></span>
                </div>
                
                <div className={`spaceBetweenRow ${showLibrary ? 'menu-library' : 'hiden'}`}>
                  <div className='criar spaceAround'>
                    <img src={iconAdd} alt='adicionar' style={{width:'20px'}} />
                    <img src={arrowR} alt='mostrar mais' style={{width:'22px'}}/>
                  </div>
                </div>
              </div>

              <div className='containerFilter'>
                <div className={`${showLibrary ? 'filterLibrary' : 'hiden'}`}>
                  <div className='filterLibrary1'>
                    <button>Playlists</button>
                    <button>Artists</button>
                  </div>

                  <div className='spaceBetweenRow'>
                    <img src={iconSearch} alt='buscar em sua biblioteca' style={{width:'16px', marginLeft: '5px'}}/>
                    <div className='filterLibrary2 flex-start'>
                      <span>Recent</span>
                      <img src={iconFilter} alt='filtro' style={{width:'17px'}}/>
                    </div>
                  </div>
                </div>
                
                <div className='hiden'>
                  <div>
                    <span className='spanDescricaoTableResult'>Title</span> 
                    
                  </div>
                  
                  <div className='spaceBetweenRow'>
                    <div style={{marginRight:'8vw'}}><span className='spanDescricaoTableResult'>Date of addition</span></div>
                    <div><span className='spanDescricaoTableResult'>You heard</span></div>
                  </div>
                </div>
                <div className='hiden'></div>
              </div>
            </div>
          </div>
    
        </div>
      
        <div className="area-principal">
          <Header className="header-homeUser"/>
          
          <div className='conteudo'>
            
          </div>
        
        </div>
      
      </div>
      
      <div className='player'>teste</div>
    </div>
  );
}