import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './custom-tabs.css';
import './pages.css'; 

import logo from '../assets/Spotify_Logo_CMYK_White.png';
import { Link } from 'react-router-dom';
import arrow from '../assets/lefth-chevron .png'

export default function RegistroForm() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="container-registro">
      <div className="logo-2">
        <Link to={'/'}><img src={logo} alt="logo spotify"/></Link>
      </div>

      <div className='form center'>
        <Tabs selectedIndex={tabIndex} onSelect={handleTabChange}>
          <TabList>
            <Tab>Crie um senha</Tab>
            <Tab>Fale de você</Tab>
            <Tab>Termos e Condições</Tab>
          </TabList>
          <TabPanel>
            <div className='form-registro'>
              
              <div className='center-start'>
                <button className='voltar'>
                  <img src={arrow} alt='voltar' style={{marginRight: "5px", width:"20px"}}/>
                </button>
                <span>Etapa 1 de 3</span>
              </div>

              <form>
                <label>Senha</label>
                <input id='senha' type='password'></input>
                
                <span style={{color: "white", fontWeight: "bold", marginTop: "15px", marginBottom: "15px"}}>A senha deve ter pelo menos</span>
                <p>1 letra</p>
                <p>1 número ou caractere especial (exemplo: # ? ! &)</p>
                <p>10 caracteres</p>
                
                <button type='submit' className='avancar-registro'>Avançar</button>
              </form>

              <span className='span-info' style={{fontSize:"x-small", marginTop:"20px"}}>
                <pre>This site is protected by reCAPTCHA and the Google</pre>
                <pre>Privacy Policy and Terms of Service apply.</pre>
              </span>
            </div>
          </TabPanel>

          <TabPanel>
            {/* Conteúdo da Segunda Aba */}
            <div className='form-registro'>
              
              <div className='center-start'>
                <button className='voltar'>
                  <img src={arrow} alt='voltar' style={{marginRight: "5px", width:"20px"}}/>
                </button>
                <span>Etapa 2 de 3</span>
              </div>

              <form>
                <label>Nome</label>
                <span>Este nome aparecerá no seu perfil</span>
                <input id='nome' type='text'></input>

                <label style={{marginTop:"12px"}}>Data de nascimento</label>
                <span style={{fontSize:"x-small"}}>Por que precisamos da sua data de nascimento?</span>
                <Link style={{fontSize:"x-small"}}>Saiba mais</Link>
                
                <div className='data-nascimento center'>
                  <input id='dia-nascimento'></input>
                  
                  <select id='mes-nascimento'>
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

                  <input id='ano-nascimento'></input>

                </div>
                
                <label style={{marginTop:"12px"}}>Gênero</label>
                  <span style={{fontSize:"x-small"}}>Usamos seu gênero para ajudar a personalizar nossas recomendações de conteúdo e anúncios pra você.</span>
                  
                <div>
                  
                </div>

                <button type='submit' className='avancar-registro'>Avançar</button>
              </form>

              <span className='span-info' style={{fontSize:"x-small", marginTop:"20px"}}>
                <pre>This site is protected by reCAPTCHA and the Google</pre>
                <pre>Privacy Policy and Terms of Service apply.</pre>
              </span>
            </div>
          </TabPanel>

          <TabPanel>
            {/* Conteúdo da Terceira Aba */}
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
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
