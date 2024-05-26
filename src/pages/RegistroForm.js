import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebase';

import 'react-tabs/style/react-tabs.css';
import './style/custom-tabs.css';
import './style/pages.css'; 

import checked from '../assets/tick.png'
import unChecked from '../assets/tick2.png'
import logo from '../assets/Spotify_Logo_CMYK_White.png';
import { Link } from 'react-router-dom';
import arrow from '../assets/lefth-chevron.png'
import { insertUser } from '../services/controller/userControllers';

export default function RegistroForm() {
  const [email, setEmail] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const [senha, setSenha] = useState('');
  const [hasLetter, setHasLetter] = useState(false);
  const [hasNumberOrSpecialChar, setHasNumberOrSpecialChar] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);
  const [nome, setNome] = useState('');
  const [diaNascimento, setDiaNascimento] = useState('');
  const [mesNascimento, setMesNascimento] = useState('');
  const [anoNascimento, setAnoNascimento] = useState('');
  const [genero, setGenero] = useState();
  const [concordoTermos, setConcordoTermos] = useState(false);
  const [naoQueroMensagens, setNaoQueroMensagens] = useState(false);
  const [compartilharDados, setCompartilharDados] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgDate, setMsgDate] = useState('');
  const [msgGenero, setMsgGenero] = useState('');
  const [msgCadastro, setMsgCadastro] = useState('');
  const [token, setToken] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  

  const regexLetter = /[a-zA-Z]/;
  const regexNumberOrSpecialChar = /[0-9!@#$%^&*()_+|~=`{}[\]:";'<>?,./\\]/;

  const verificaSenha = (e) => {
    const senhaAtual = e;
    setHasLetter(regexLetter.test(senhaAtual));
    setHasNumberOrSpecialChar(regexNumberOrSpecialChar.test(senhaAtual));
    setHasMinLength(senhaAtual.length >= 10)
  }

  const isValidName = () => {
    return nome.trim() !== '';
  };

  const isValidYear = () => {
    const year = parseInt(anoNascimento);
    return !isNaN(year) && year > 1900 && year < 2009;
  };

  const isValidDay = () => {
    const day = parseInt(diaNascimento);
    const month = parseInt(mesNascimento);
    const year = parseInt(anoNascimento);
    return !isNaN(day) && day > 0 && day <= new Date(year, month, 0).getDate();
  };

  const handleAvancarClick = (e) => {
    if (tabIndex === 0) {
      verificaSenha(senha);
      if (senha && hasLetter && hasNumberOrSpecialChar && hasMinLength) {
        setTabIndex(tabIndex + 1);
      }
    } else if (tabIndex === 1) {
      if (isValidName() && isValidYear() && isValidDay() && genero !== undefined) {
        setTabIndex(tabIndex + 1);
      } else {
        e.preventDefault();
        
        if(!isValidName()) {
          setMsgName('Insira um nome para seu perfil.')
        }
        if(!isValidDay() || !isValidYear()){
          setMsgDate('Insira sua data de nascimento.')
        }
        
        if(genero === undefined) {
          setMsgGenero('Insira sua data de nascimento.')
        }
      }
    }
  };

  const handleVoltarClick = () => {
    setTabIndex(tabIndex - 1); // Volta para a aba anterior
  };

  const handleConcordoTermosChange = (e) => {
    setConcordoTermos(e.target.checked);
  };

  const handleNaoQueroMensagensChange = (e) => {
    setNaoQueroMensagens(e.target.checked);
  };

  const handleCompartilharDadosChange = (e) => {
    setCompartilharDados(e.target.checked);
  };

  const handleRegistroSubmit = async (e) => {
    e.preventDefault();
  
    if (concordoTermos && compartilharDados && naoQueroMensagens) {
      const dataNascimento = new Date(`${anoNascimento}-${mesNascimento}-${diaNascimento}`);
      const userData = {
        email,
        senha,
        nome,
        dataNascimento,
        genero
      };

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.senha);
        const user = userCredential.user;
        await insertUser(user.uid, userData);
        await signInWithEmailAndPassword(auth, userData.email, userData.senha)
        .then(() => {

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });

        if(auth.currentUser) {
          const tk = await auth.currentUser.getIdToken();
          localStorage.setItem('token', tk);
          setToken(tk);
          navigate(`/homeUser`);

        } else {
            setMsgCadastro('Ops! Algo deu errado. Tente de novo ou consulte a nossa seção de ajuda.');
        }
      } catch (error) {
        setMsgCadastro('Ops! Algo deu errado. Tente de novo ou consulte a nossa seção de ajuda.');
        console.error('Erro:', error);

      }
    } else {
      setMsgCadastro('Por favor, concorde com os termos antes de se inscrever.');
      return;
    }

  };

  return (
    <div className="container-registro">
      <div className="logo-2">
        <Link to={'/'}><img src={logo} alt="logo spotify"/></Link>
      </div>

      <div className='form center'>
        <Tabs selectedIndex={tabIndex}>
          <TabList>
            <Tab disabled={tabIndex !== 0}>Crie um senha</Tab>
            <Tab disabled={tabIndex !== 1}>Fale de você</Tab>
            <Tab disabled={tabIndex !== 2}>Termos</Tab>
          </TabList>
          <TabPanel>
            <div className='form-registro'>
              
              <div className='center-start'>
                <button className='voltar' onClick={() => {window.history.back()}}>
                  <img src={arrow} alt='voltar' style={{marginRight: "5px", width:"20px"}}/>
                </button>
                <span>Etapa 1 de 3</span>
              </div>

              <form>
                <label style={{marginTop:'25px'}}>Senha</label>
                <input id='senha' name={senha} type='password' onChange={(e) => {setSenha(e.target.value); verificaSenha(e.target.value)}} value={senha}></input>
                
                <span style={{color: "white", fontWeight: "bold", marginTop: "15px", marginBottom: "15px"}}>A senha deve ter pelo menos</span>
                <p className='center-start'><img alt='check' src={hasLetter ? checked : unChecked} style={{marginRight:"4px"}}/> 1 letra</p>
                <p className='center-start'><img alt='check' src={hasNumberOrSpecialChar ? checked : unChecked} style={{marginRight:"4px"}}/> 1 número ou caractere especial (exemplo: # ? ! &)</p>
                <p className='center-start'><img alt='check' src={hasMinLength ? checked : unChecked} style={{marginRight:"4px"}}/>10 caracteres</p>
                
                <button type='submit' className='avancar-registro' style={{marginTop:"60px"}} onClick={handleAvancarClick}>Avançar</button>
              </form>

              <span className='span-info' style={{fontSize:"x-small", marginTop:"20px"}}>
                <pre>This site is protected by reCAPTCHA and the Google</pre>
                <pre>Privacy Policy and Terms of Service apply.</pre>
              </span>
            </div>
          </TabPanel>

          <TabPanel>
            {/* ----------------------------------Conteúdo da Segunda Aba ----------------------------*/}
            <div className='form-registro'>
              
              <div className='center-start'>
                <button className='voltar' onClick={handleVoltarClick}>
                  <img src={arrow} alt='voltar' style={{marginRight: "5px", width:"20px"}}/>
                </button>
                <span>Etapa 2 de 3</span>
              </div>

              <form>
                <label style={{marginTop:'25px'}}>Nome</label>
                <span>Este nome aparecerá no seu perfil</span>
                <input id='nome' name='nome' value={nome} type='text' onChange={(e) =>{setNome(e.target.value); setMsgName('')}}></input>
                
                <span style={{color:"red"}}>{msgName}</span>
                
                <label style={{marginTop:"30px"}}>Data de nascimento</label>
                <span style={{fontSize:"x-small"}}>Por que precisamos da sua data de nascimento?</span>
                <Link style={{fontSize:"x-small"}}>Saiba mais</Link>
                
                <div className='data-nascimento'>
                  <input id='dia-nascimento' placeholder='dd' value={diaNascimento} onChange={(e) => {setDiaNascimento(e.target.value); setMsgDate('')}}></input>
                  
                  <select id='mes-nascimento' value={mesNascimento} onChange={(e) => {setMesNascimento(e.target.value)}}>
                    <option value="">Mês</option>
                    <option value={1}>Janeiro</option>
                    <option value={2}>Fevereiro</option>
                    <option value={3}>Março</option>
                    <option value={4}>Abril</option>
                    <option value={5}>Maio</option>
                    <option value={6}>Junho</option>
                    <option value={7}>Julho</option>
                    <option value={8}>Agosto</option>
                    <option value={9}>Setembro</option>
                    <option value={10}>Outubro</option>
                    <option value={11}>Novembro</option>
                    <option value={12}>Dezembro</option>
                  </select>

                  <input id='ano-nascimento' placeholder='aaaa' value={anoNascimento} onChange={(e) => setAnoNascimento(e.target.value)}></input>
                </div>
                <span className='center-start' style={{color:"red"}}>{msgDate}</span>

                
                
                <label style={{marginTop:"30px"}}>Gênero</label>
                <span style={{fontSize:"x-small"}}>Usamos seu gênero para ajudar a personalizar nossas recomendações de conteúdo e anúncios pra você.</span>
                
                <div className='selecaoGenero'>
                  <div className='center-start'>
                    <label>
                      <input
                        name='genero'
                        type="radio"
                        value="homem"
                        onChange={(e) => {setGenero(e.target.value); setMsgGenero('')}}
                      />
                      Homem
                    </label>

                    <label>
                      <input
                        name='genero'
                        type="radio"
                        value="mulher"
                        onChange={(e) => {setGenero(e.target.value); setMsgGenero('')}}
                      />
                      Mulher
                    </label>
                  </div>

                  <div className='center-start'>
                    <label>
                      <input
                        name='genero'
                        type="radio"
                        value="naoBinario"
                        onChange={(e) => {setGenero(e.target.value); setMsgGenero('')}}
                      />
                      Não binário
                    </label>

                    <label>
                      <input
                        name='genero'
                        type="radio"
                        value="outro"
                        onChange={(e) => {setGenero(e.target.value); setMsgGenero('')}}
                      />
                      Outro
                    </label>
                  </div>
                  
                  <div className='center-start'>
                    <label>
                      <input
                        name='genero'
                        type="radio"
                        value="prefiroNaoDizer"
                        onChange={(e) => {setGenero(e.target.value); setMsgGenero('')}}
                      />
                      Prefiro não dizer
                    </label>
                  </div>
      
                <span className='center-start' style={{color:"red"}}>{msgGenero}</span>

                </div>

                <button type='submit' className='avancar-registro' onClick={handleAvancarClick}>Avançar</button>
              </form>

              <span className='span-info' style={{fontSize:"x-small", marginTop:"20px", marginBottom:"20px"}}>
                <pre>This site is protected by reCAPTCHA and the Google</pre>
                <pre>Privacy Policy and Terms of Service apply.</pre>
              </span>
            </div>
          </TabPanel>

          <TabPanel>
            {/*---------------------------- Conteúdo da Terceira Aba -------------------------------------*/}
            <div className='form-registro'>
              <div className='center-start'>
                <button className='voltar' onClick={handleVoltarClick}>
                  <img src={arrow} alt='voltar' style={{marginRight: "5px", width:"20px"}}/>
                </button>
                <span>Etapa 3 de 3</span>
              </div>
              <div style={{color: 'red'}}>{msgCadastro}</div>
              <form className='termosCondicoes' onSubmit={handleRegistroSubmit} style={{marginTop:'25px'}}>
                <label>
                  <input
                    type="checkbox"
                    checked={concordoTermos}
                    onChange={handleConcordoTermosChange}
                  />
                  Concordo com os Termos e Condições de Uso do Spotify
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={naoQueroMensagens}
                    onChange={handleNaoQueroMensagensChange}
                  />
                  Não quero receber mensagens de marketing do Spotify
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={compartilharDados}
                    onChange={handleCompartilharDadosChange}
                  />
                  Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing
                </label>

                  <button type='submit' className='registro' style={{marginTop:"60px"}}>inscreva-se</button>
                </form>

              <span className='span-info' style={{fontSize:"x-small", marginTop:"20px", marginBottom:"20px"}}>
                <pre>This site is protected by reCAPTCHA and the Google</pre>
                <pre>Privacy Policy and Terms of Service apply.</pre>
              </span>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

