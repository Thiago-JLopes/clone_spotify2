import './style/homeUser.css'
import Header from "../components/Header";
import iconHome from '../assets/house.png'
import iconSearch from '../assets/search-interface-symbol.png'
import iconLibraryClose from '../assets/library.png'
export default function Homeuser () {
  return (
    <div className="conteiner-user">
      
      <div className='conteiner-user-2'>
      
        <div className="area-lateral">
          <div className="search-home center-col">
            <img src={iconHome} alt='icon home' width={"28px"}/>
            <img src={iconSearch} alt='icon search' width={"27px"}/>
          </div>

          <div className="user-library">
            <div className='lib-header'>
              <img src={iconLibraryClose} alt='bibliotecaFechada'/>
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