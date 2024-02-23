import './style/pages.css';
import './style/registro.css'
import logo from '../assets/Spotify_Logo_CMYK_White.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Registro() {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const validaEmail = async (event) => {
        event.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/; // Expressão regular ajustada
    
        if (email === '' || !regex.test(email.toLowerCase())) { // Convertendo o e-mail para minúsculas antes de validar
            setMsg('Esse e-mail é inválido. O formato correto é assim: exemplo@email.com');
            return;
        }
    
        try {
            // Verifica se o email já está cadastrado
            const methods = 0;
            if (methods === 0) {
                // Email não cadastrado
                navigate(`/registroForm?email=${email}`);
            } else {
                // Email já cadastrado
                setMsg('Esse e-mail já está cadastrado. Por favor, use outro.');
            }
        } catch (error) {
            console.error('Erro ao verificar o email:', error);
            setMsg('Erro ao verificar o email. Por favor, tente novamente.');
        }
    };
    

    return (
        <div className="container-registro">
            <div className="logo-2">
                <Link to={'/'}>
                    <img src={logo} alt="logo spotify" />
                </Link>
            </div>

            <div className='form center'>
                <div className='form-email'>
                    <h1>Se inscreva e comece a curtir</h1>

                    <form>
                        <label>Endereço de e-mail</label>
                        <input
                            id='email'
                            name={email}
                            value={email}
                            placeholder='nome@dominio.com'
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setMsg('');
                            }}
                        ></input>

                        <div className='avisoErro'>
                            {msg}
                        </div>
                        <Link className='cadastrar-telefone'>Usar número de telefone</Link>
                        <button type='submit' className='avancar-registro' onClick={validaEmail}>Avançar</button>
                    </form>

                    <hr />
                    <span className='center'>
                        Já tem uma conta? <Link>Faça login aqui</Link>.
                    </span>
                    <span className='span-info' style={{ fontSize: 'x-small', marginTop: '20px' }}>
                        <pre>This site is protected by reCAPTCHA and the Google</pre>
                            <pre>Privacy Policy and Terms of Service apply.</pre>
                    </span>
                </div>

            </div>
        </div>
    );
}
