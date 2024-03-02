import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebase';

import logo from '../assets/Spotify_Logo_CMYK_White.png';
import './style/loginPage.css';
import './style/registro.css';

export default function Login() {
    // State para armazenar o email, senha e mensagens de erro/sucesso
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [msgErro, setMsgErro] = useState('');
    const navigate = useNavigate();
    const [token, setToken] = useState('');

    // Efeito para verificar se há um token armazenado no localStorage
    useEffect(() => {
        const tk = localStorage.getItem('token');
        if(tk) setToken(tk);

        let logSessao = localStorage.getItem('msgSessaoExpirada');
        if(logSessao) setMsgErro(logSessao);
    }, []);

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

        try {
            // Tenta fazer o login com o email e senha fornecidos
            await signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Se o login for bem-sucedido, podemos fazer algo com o usuário (não utilizado atualmente)
            })
            .catch((error) =>{
                // Se houver um erro no login, exibimos a mensagem de erro no console
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`Algo deu errado: ${errorCode} ${errorMessage}`);
            });
            
            // Verifica se o usuário está autenticado
            if(auth.currentUser) {
                // Se autenticado, obtém o token de autenticação e armazena no localStorage
                const tk = await auth.currentUser.getIdToken(7200);
                localStorage.setItem('token', tk);
                setToken(tk);
                // Navega para a página home do usuário
                navigate(`/homeUser`);
            } else {
                // Se não autenticado, exibe uma mensagem de erro
                setMsgErro('Ops! Algo deu errado. Tente de novo ou consulte a nossa seção de ajuda.');
            }

        } catch (error) {
            // Se houver um erro, exibe uma mensagem de erro genérica
            setMsgErro('Ops! Algo deu errado. Tente de novo ou consulte a nossa seção de ajuda.');
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
