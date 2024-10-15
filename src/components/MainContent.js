import './style/mainContent.css';

import '../pages/style/home.css';
import Rodape from '../components/Rodape';
export default function MainContent() {
    return (
        <>
        <main className='home-area'>
          <div className='conteudo'>
            <div className='recomendacoesAlbuns'>
            <h2 style={{color:'white', padding:'5px'}}>Artistas populares</h2>
            </div>
            <Rodape/>
          </div>
        </main>
        </>
    );
}