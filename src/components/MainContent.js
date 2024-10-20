import './style/mainContent.css'
import Rodape from '../components/Rodape';
import TabsComponent from './tabs/tabComponent/TabsComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { searchApi } from '../utils/APIRoutes';


export default function MainContent({ params, access_token }) {
  const [selectedFilter, setSelectedFilter] = useState('track,artist,album,playlist,show');
  let dataSearch = params;

  const setDataFilter = (data) => {
    setSelectedFilter(data);
  }

  useEffect(() => {
    async function search() {
      let q = dataSearch; //parametro de busca na api
      let type = selectedFilter; //tipo de conteudo a ser buscado
      let limit = 5;

      //se o parametro de busca não for vazio chama a APi
      if (q !== '') {
        //modifica o q do filtro para melhorar os resultados da busca
        if (type === 'artist') { q = q + ' artist:' + dataSearch; limit = 50 }
        if (type === 'track') { q = q + ' track:' + dataSearch; limit = 50 }
        if (type === 'playlist') { q = q + ' playlist:' + dataSearch; limit = 50 }
        if (type === 'album') { q = q + ' album:' + dataSearch; limit = 50 }
        if (type === 'show,episode') { q = q + ' show:' + dataSearch + ' episode:' + dataSearch; limit = 50 }
      }

      if (access_token !== '' && q !== '') {
        //Chama API de busca do spotify
        await axios.post(searchApi, {
          access_token: access_token,
          q: q,
          type: type,
          limit: limit
        })
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log("Erro ao realizar busca ", error);
          })
      }

    }

    search();
  }, [selectedFilter, dataSearch, access_token])

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