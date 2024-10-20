import './style/mainContent.css'
import Rodape from '../components/Rodape';
import TabsComponent from './tabs/tabComponent/TabsComponent';
import { useEffect, useState } from 'react';
import { searchItems } from '../utils/APIRoutes';
import axios from 'axios';
import { response } from 'express';


export default function MainContent({ params }) {
  const [selectedFilter, setSelectedFilter] = useState('track,artist,album,playlist,show');
  let dataSearch = params;

  const setDataFilter = (data) => {
    setSelectedFilter(data);
  }

  useEffect(() => {
      let q = dataSearch; //parametro de busca na api
      let type = selectedFilter; //tipo de conteudo a ser buscado
      let amoutResults = 5;

      //se o parametro de busca não for vazio chama a APi
      if (q !== '') {
        //modifica o q do filtro para melhorar os resultados da busca
        if (type === 'artist') { q = q + ' artist:' + dataSearch; amoutResults = 50 }
        if (type === 'track') { q = q + ' track:' + dataSearch; amoutResults = 50 }
        if (type === 'playlist') { q = q + ' playlist:' + dataSearch; amoutResults = 50 }
        if (type === 'album') { q = q + ' album:' + dataSearch; amoutResults = 50 }
        if (type === 'show,episode') { q = q + ' show:' + dataSearch + ' episode:' + dataSearch; amoutResults = 50 }

      }
  }, [selectedFilter, dataSearch])

  return (
    <main className="area-principal">

      <div className='conteudo'>
        <div style={{ display: dataSearch !== '' ? 'block' : 'none' }}><TabsComponent dataFilter={setDataFilter} /></div>
        Filtro selecionado: {selectedFilter}
        <Rodape />
      </div>

    </main>
  );
}