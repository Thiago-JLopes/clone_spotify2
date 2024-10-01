import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/Spotify_Logo_CMYK_White.png';
import './style/loginPage.css';
import './style/registro.css';

export default function Login() {
    // State para armazenar o email, senha e mensagens de erro/sucesso
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [msgErro, setMsgErro] = useState('');


    // Função para lidar com o processo de login
    const realizarLogin = async (event) => {
        event.preventDefault();
        // Expressão regular para validar o formato do email
        const regex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;

        // Verifica se o email está no formato válido
        if (email === '' || !regex.test(email.toLowerCase())) {
            setMsg('Esse e-mail é inválido.');
            return;
        }

    };

    return (
        <div className="page-login">
            <div className="logo-login">
                {/* Link para a página inicial */}
                <Link to={'/'}><img src={logo} alt='logo'/></Link>
            </div>

            <div className='center'>
                <div className='campo-login'>
                    <h1>Entrar no Spotify</h1>
                    {/* Exibe mensagem de erro */}
                    <div className='msgErro center'>{msgErro}</div>
                    <form className='login'>
                        <label>E-mail ou nome de usuário</label>
                        {/* Campo de entrada para o email */}
                        <input type='text' name='email' value={email} placeholder='E-mail ou nome de usuário' onChange={(e) => {setEmail(e.target.value); setMsg(''); setMsgErro('')}}></input>
                        {/* Exibe mensagem de erro para o email */}
                        <div className='avisoErro'>{msg}</div> 

                        <label>Senha</label>
                        {/* Campo de entrada para a senha */}
                        <input name='senha' value={senha}  placeholder='Senha' type='password' onChange={(e) => {setSenha(e.target.value); setMsgErro('')}}></input>
                        
                        {/* Botão para enviar o formulário de login */}
                        <button type='submit' onClick={realizarLogin}>Entrar</button>
                    </form>

                    <span><Link>Esqueceu sua senha?</Link></span>
                    {/* Link para a página de registro */}
                    <span>Não tem uma conta <Link to={'/registro'}>inscreva-se no Spotify </Link></span>
                </div>
            </div>
            <div className='center footer-login'>
                {/* Mensagem de rodapé */}
                <span>Este site é protegido pelo reCAPTCHA e está sujeito à Política de Privacidade e aos Termos de Serviço do Google.</span>
            </div>
        </div>
    );
};
