import './pages.css'
import logo from '../assets/Spotify_Logo_CMYK_White.png'
import { Link } from 'react-router-dom';

export default function Registro() {
    return (
        <div className="container-registro">
            <div className="logo-2">
                <img src={logo} alt="logo spotify"/>
            </div>

            <div className='form center'>
                <div className='form-email'>
                    <h1>Se inscreva e comece a curtir</h1>

                    <form>
                        <label>Endereço de e-mail</label>
                        <input className='input-email' placeholder='nome@dominio.com'></input>
                        <Link className='cadastrar-telefone'>Usar número de telefone</Link>
                        <button type='submit' className='avancar-registro'>Avançar</button>
                    </form>

                    <hr/>
                    <span className='center'>Já tem uma conta? <Link>Faça login aqui</Link>.</span> 
                    <span className='span-info' style={{fontSize:"x-small", marginTop:"20px"}}>
                        <pre>This site is protected by reCAPTCHA and the Google</pre>
                            <pre>Privacy Policy and Terms of Service apply.</pre>
                    </span>
                </div>
                
            </div>
        </div>
    );
}