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
  