import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/server/firebase';

import logo from '../assets/Spotify_Logo_CMYK_White.png';
import './style/loginPage.css';
import './style/registro.css';


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [msgErro, setMsgErro] = useState('');
    const navigate = useNavigate();
    
    const realizarLogin = async (event) => {
        event.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;

        if (email === '' || !regex.test(email.toLowerCase())) {
            setMsg('Esse e-mail é inválido.');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                //const user = userCredential.user;
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(`Algo deu errado: ${errorCode} ${errorMessage}`);
            });
            
            if(auth.currentUser) {
                navigate(`/homeUser`);
            } else {
                setMsgErro('Ops! Algo deu errado. Tente de novo ou consulte a nossa seção de ajuda.');
            }

        } catch (error) {
            setMsgErro('Ops! Algo deu errado. Tente de novo ou consulte a nossa seção de ajuda.');
        }
    };

    return (
        <div className="page-login">
            <div className="logo-login">
                <Link to={'/'}><img src={logo} alt='logo'/></Link>
            </div>

            <div className='center'>
                <div className='campo-login'>
                    <h1>Entrar no Spotify</h1>
                    <div className='msgErro center'>{msgErro}</div>
                    <form className='login'>
                        <label>E-mail ou nome de usuário</label>
                        <input type='text' name='email' value={email} placeholder='E-mail ou nome de usuário' onChange={(e) => {setEmail(e.target.value); setMsg(''); setMsgErro('')}}></input>
                        <div className='avisoErro'>{msg}</div> 

                        <label>Senha</label>
                        <input name='senha' value={senha}  placeholder='Senha' type='password' onChange={(e) => {setSenha(e.target.value); setMsgErro('')}}></input>
                        
                
                        <button type='submit' onClick={realizarLogin}>Entrar</button>
                    </form>

                    <span><Link>Esqueceu sua senha?</Link></span>
                    <span>Não tem uma conta <Link to={'/registro'}>inscreva-se no Spotify </Link></span>
                </div>
            </div>
            <div className='center footer-login'>
                <span>Este site é protegido pelo reCAPTCHA e está sujeito à Política de Privacidade e aos Termos de Serviço do Google.</span>
            </div>
        </div>
    );
};
