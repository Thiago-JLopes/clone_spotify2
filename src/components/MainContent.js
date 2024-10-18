import './style/mainContent.css'
import Rodape from '../components/Rodape';


export default function MainContent({params}) {
    return (
        <main className="area-principal">
          
          <div className='conteudo'>
            {params}
            <Rodape/>      
          </div>
          
        </main>
    );
}