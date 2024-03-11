export async function fetchAlbum(albumId) {
    const accessToken = localStorage.getItem('access_token'); //token de acesso
    const apiUrl = `https://api.spotify.com/v1/albums/${albumId}`;
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro ao obter o álbum');
      }
  
      const albumData = await response.json();
      return albumData;
    } catch (error) {
      console.error('Erro:', error);
      return null;
    }
  }
  
  export async function fetchSeveralAlbuns(albumIds) {
    const accessToken = localStorage.getItem('access_token');
    const idsParam = albumIds.join('%2C'); // Une os IDs com vírgula e codifica para URL
    const apiUrl = `https://api.spotify.com/v1/albums?ids=${idsParam}`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao obter os álbuns');
        }

        const albumData = await response.json();
        return albumData;
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
}

export async function searchForNewAlbumIds() {
  const accessToken = localStorage.getItem('access_token');
  const apiUrl = 'https://api.spotify.com/v1/search?q=tag:new-releases&type=album&limit=4&market=BR'; // Usando o filtro tag:new para obter álbuns com maior popularidade

  try {
      const response = await fetch(apiUrl, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
          },
      });

      if (!response.ok) {
          throw new Error('Erro ao buscar IDs de álbuns por popularidade');
      }

      const albumData = await response.json();
      const albumIds = albumData.albums.items.map(album => album.id); // Extrai apenas os IDs dos álbuns
      return albumIds;
  } catch (error) {
      console.error('Erro:', error);
      return null;
  }
}

  