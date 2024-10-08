import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/loginPage.css';
import './style/registro.css';
import logo from '../assets/Spotify_Primary_Logo_RGB_White.png'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    // State para armazenar o email, senha e mensagens de erro/sucesso
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [msgErro, setMsgErro] = useState('');
    const navigate = useNavigate();

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

        if(senha === ''){
            setMsgErro('A senha não pode ser vazia.');
            return;
        }


    };

    return (
        <div className="page-login">
            <div className='campo-login'>
                <img src={logo} alt='logo' className='logo-login' onClick={()=> {navigate('/')}}></img>
                <h1>Entrar no Spotify</h1>
                <div className='login'>
                    {/* Exibe mensagem de erro */}
                    <div className='msgErro center'>{msgErro}</div>
                    <form>
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
                </div>
                
                <span><Link>Esqueceu sua senha?</Link></span>
                {/* Link para a página de registro */}
                <span>Não tem uma conta <Link to={'/registro'}>inscreva-se no Spotify </Link></span>
            </div>
            <div className='center footer-login'>
                {/* Mensagem de rodapé */}
                <span>Este site é protegido pelo reCAPTCHA e está sujeito à Política de Privacidade e aos Termos de Serviço do Google.</span>
            </div>
        </div>
    );
};
