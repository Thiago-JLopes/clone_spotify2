import './style/search.css'
import iconHouse from '../assets/house.png';
import searchIcon from '../assets/search.png'

export default function Search ({onInputChange}) {

const handleChange = (e) => {
    onInputChange(e.target.value);
  }
    return(
        <>
        <div className='center'>
            <div id='iconHome' className='icon'>
              <img src={iconHouse} alt='Início' title='Início' />
            </div>

            <div id='input-search'>
              <img src={searchIcon} alt='Buscar' title='Buscar' />
              <input type='text' placeholder='O que você quer ouvir' onChange={handleChange}/>
            </div>
        </div>
        </>
    );
}