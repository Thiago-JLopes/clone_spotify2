import React from 'react';
import './style/rodape.css';
import { Link } from 'react-router-dom';

export default function Rodape() {
    return (
    <>
        <div className='linksDiversos'>
            <div className='linksUteis spaceAround2'>
                <ul>
                    <li className='titleLink'>Empresa</li>
                    <li><Link> Sobre</Link></li>
                    <li><Link> Empregos</Link></li>
                    <li><Link> For the Record</Link> </li>
                </ul>
          
                <ul>
                    <li className='titleLink'>Comunidades</li>
                    <li><Link> Para Artistas</Link></li>
                    <li><Link> Desenvolvedores</Link></li>
                    <li><Link> Publicidade</Link> </li>
                    <li><Link> Investidores</Link> </li>
                    <li><Link> Fornecedores</Link> </li>
                </ul>

                <ul>
                    <li className='titleLink'>Links úteis</li>
                    <li><Link> Suporte</Link></li>
                    <li><Link> Aplicativo móvel</Link></li>
                    <li><Link> grátis</Link> </li>
                </ul>
            </div>
            
            <div className='redesSociais'>
                <ul className='listaRedesSociais spaceAround'>
                    <li> <i class="fa fa-instagram" aria-hidden="true" style={{color: '#fff'}}></i> </li>
                    <li> <i class="fa fa-twitter" aria-hidden="true" style={{color: '#fff'}}></i> </li>
                    <li> <i class="fa fa-facebook-official" aria-hidden="true" style={{color: '#fff'}}></i> </li>
                </ul>
            </div>
        </div>
        
        <div style={{color: 'rgb(148, 148, 148)', padding: '5px', margin: '12px'}}> 
            <i class="fa fa-copyright" aria-hidden="true" style={{color: 'rgb(148, 148, 148)'}}></i>
            <span style={{margin:'8px'}}>2024 Spotify AB</span>
        </div>
    </>
    );
}