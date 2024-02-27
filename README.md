## Spotify Clone 🎵

Este é um projeto de clone do Spotify, utilizando Firestore e Firebase Authentication, eliminando o uso do PostgreSQL e com hospedagem planejada no Vercel, além da inclusão da API do Spotify para integração.

### Introdução 🚀

O objetivo deste projeto é criar um clone básico do Spotify, proporcionando uma experiência de usuário semelhante à do serviço original. O projeto é desenvolvido usando React.js para o front-end, integração com a Firestore para banco de dados e Firebase Authentication para autenticação de usuários. Além disso, a Spotify API é utilizada para integração com serviços de streaming de música.


### Funcionalidades ⭐

- Listagem de músicas recomendadas, novos lançamentos e playlists populares.
- Reprodução de músicas com funcionalidades de reprodução, pausa, avanço e retrocesso.
- Pesquisa avançada e filtros para encontrar músicas, artistas e playlists específicos.
- Gerenciamento de playlists, permitindo aos usuários criar, editar e excluir suas próprias playlists.

### Pré-requisitos 📋

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- Node.js
- npm (ou yarn)
- Conta no Firebase para Firestore e Firebase Authentication

### Instalação 💻

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/spotify-clone.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd spotify-clone
    ```

3. Instale as dependências do front-end:

    ```bash
    cd client
    npm install
    ```

4. Instale as dependências do back-end:

    ```bash
    cd ../server
    npm install
    ```

### Configuração 🔧

1. Configure o Firebase:

   - Crie um projeto no Firebase.
   - Ative o Firestore e o Firebase Authentication.
   - Configure suas credenciais no projeto.

2. Configure a API do Spotify:

   - Obtenha as credenciais da Spotify API em [Spotify for Developers](https://developer.spotify.com/).
   - Configure as credenciais no arquivo `serve/config/spotifyConfig.js`.

### Uso 🚦

1. Inicie o servidor back-end:

    ```bash
    cd server
    npm start
    ```

2. Inicie o servidor front-end:

    ```bash
    cd client
    npm start
    ```

3. Acesse o aplicativo em [http://localhost:3000](http://localhost:3000).

### Visualização 🎉

Você pode visualizar o meu projeto hospedado no Vercel [aqui](https://clone-spotify2-zeta.vercel.app/).

### Contribuição 🤝

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

