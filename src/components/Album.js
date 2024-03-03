import './style/album.css'
import imgDefalut from '../assets/Spotify_Logo_CMYK_White.png';

export default function Album (props) {
    const {infoAlbum} = props;
    console.log('infoAlbum: ', infoAlbum)
    return (
        <>
            <div className="container-album">
                <div className="capa">
                    {
                        infoAlbum ?
                        <img src={infoAlbum.images[1].url} className='capa-api'/>
                        :
                        <img src={imgDefalut} />
                    }
                    <div className='descricao'>
                        <span className='title-album'>{infoAlbum ? infoAlbum.name : 'Default'}</span>
                        <span className='label-album'>{infoAlbum ? infoAlbum.label : 'Default'}</span>
                    </div>
                </div>

                <div className="titulo-descricao">

                </div>
            </div>
        </>
    );
}