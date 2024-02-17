import './style/homeUser.css'
import Header from "../components/Header";
import iconHome from '../assets/house.png'
import iconSearch from '../assets/search-interface-symbol.png'
import iconLibraryClose from '../assets/library.png'
import iconAdd from '../assets/plus.png'
import arrowR from '../assets/arrow-to-right.png'
import iconFilter from '../assets/simbolo-de-interface-de-lista.png'

export default function Homeuser () {
  return (
    <div className="conteiner-user">
      
      <div className='conteiner-user-2'>
      
        <div className="area-lateral">
        <div className="search-home centerStartColumn">
            <div className='flex-start'><img src={iconHome} alt='icon home' width={"28px"}/> <span className='spanMenu'>Home</span></div>
            <div className='flex-start'><img src={iconSearch} alt='icon search' width={"27px"}/><span className='spanMenu'>Look for</span></div>
          </div>

          <div className="user-library">
            <div className='lib-header centerStartColumn'>
              <div className='spaceBetweenRow'>
                <img src={iconLibraryClose} alt='bibliotecaFechada' style={{width:'29px'}}/>
                <span className='spanMenu'><pre>Your Library</pre></span>
                
                <div className='menu-library spaceBetweenRow'>
                  <div className='criar spaceAround'>
                    <img src={iconAdd} alt='adicionar' style={{width:'20px'}} />
                    <img src={arrowR} alt='mostrar mais' style={{width:'22px'}}/>
                  </div>
                </div>
              </div>

              <div>
                <div className='filterLibrary spaceBetweenRow'>
                  <div className='filterLibrary1'>
                    <button>Playlists</button>
                    <button>Artists</button>
                  </div>

                  <div className='flex-start'>
                    <img src={iconSearch} alt='buscar em sua biblioteca' style={{width:'16px'}}/>
                    <div className='filterLibrary2 flex-start'>
                      <span>Recent</span>
                      <img src={iconFilter} alt='filtro' style={{width:'17px'}}/>
                    </div>
                  </div>
                </div>
                
                <div className='spaceBetweenRow'>
                  <div>
                    <span className='spanDescricaoTableResult'>Title</span> 
                    
                  </div>
                  
                  <div className='spaceBetweenRow'>
                    <div><span className='spanDescricaoTableResult'>Date of addition</span></div>
                    <div><span className='spanDescricaoTableResult'>You heard</span></div>
                  </div>
                </div>
                <hr></hr>
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