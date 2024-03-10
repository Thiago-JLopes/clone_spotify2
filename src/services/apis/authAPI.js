//Solicita token de autenticação API Spotify
export async function authOptions() {
    try {
        const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
        const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`), 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials'
            })
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.access_token;
            // salva token
            localStorage.setItem('access_token', token);
        } else {
            console.error('Falha ao solicitar autorização Spotify:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Erro ao fazer solicitação:', error);
    }
}
