import './style/mainContent.css'
import Rodape from '../components/Rodape';
import TabsComponent from './tabs/tabComponent/TabsComponent';
import { useState } from 'react';


export default function MainContent({ params }) {
  const [selectedFilter, setSelectedFilter] = useState('track artist album playlist podcasts');
  let dataSearch = params;

  const setDataFilter = (data) => {
    setSelectedFilter(data);
  }

  return (
    <main className="area-principal">

      <div className='conteudo'>
        <div style={{display: dataSearch !== '' ? 'block' : 'none'}}><TabsComponent dataFilter={setDataFilter}/></div>
        Filtro selecionado: {selectedFilter}
        <Rodape />
      </div>

    </main>
  );
}