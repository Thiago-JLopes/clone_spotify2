import {
  ContainerAlbum,
  Capa,
  TitleAlbum,
  LabelAlbum,
  Descricao,
  NewAlbum,
} from './AlbumStyle';

export default function Album(props) {
    const { infoAlbum } = props;
  
    // Verifica se infoAlbum existe e possui a propriedade 'albums'
    const albums = infoAlbum && infoAlbum.albums ? infoAlbum.albums : [];
  
    return (
      <div className="spaceAround">
      {albums.map((album, index) => (
        <NewAlbum key={index}>
          <ContainerAlbum>
            <Capa src={album.images[0].url} alt="Capa do Álbum" />
            <Descricao>
              <TitleAlbum>{album.name}</TitleAlbum>
              <LabelAlbum>{album.label}</LabelAlbum>
            </Descricao>
          </ContainerAlbum>
        </NewAlbum>
      ))}
    </div>
    );
  }
  