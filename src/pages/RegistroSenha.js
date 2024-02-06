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
            <div className='form-registro '>
              
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
                
                <button type='submit' className='avancar-registro' style={{marginTop:"60px"}}>Avançar</button>
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

                <label style={{marginTop:"30px"}}>Data de nascimento</label>
                <span style={{fontSize:"x-small"}}>Por que precisamos da sua data de nascimento?</span>
                <Link style={{fontSize:"x-small"}}>Saiba mais</Link>
                
                <div className='data-nascimento'>
                  <input id='dia-nascimento' placeholder='dd'></input>
                  
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

                  <input id='ano-nascimento' placeholder='aaaa'></input>
                </div>
                
                <label>Gênero</label>
                <span style={{fontSize:"x-small"}}>Usamos seu gênero para ajudar a personalizar nossas recomendações de conteúdo e anúncios pra você.</span>
                
                <div className='selecaoGenero'>
                  <label>
                    <input
                      name='genero'
                      type="radio"
                      value="masculino"
                    />
                    Masculino
                  </label>

                  <label>
                    <input
                      name='genero'
                      type="radio"
                      value="feminino"
                    />
                    Feminino
                  </label>

                  <label>
                    <input
                      name='genero'
                      type="radio"
                      value="nao binario"
                    />
                    Não binário
                  </label>

                  <label>
                    <input
                      name='genero'
                      type="radio"
                      value="outro"
                    />
                    Outro
                  </label>

                  <label>
                    <input
                      name='genero'
                      type="radio"
                      value="prefiro nao dizer"
                    />
                    Prefiro não dizer
                  </label>
                </div>

                <button type='submit' className='avancar-registro'>Avançar</button>
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
              <form className='termosCondicoes'>
                <label>
                  <input
                    type="checkbox"
                  />
                  Concordo com os Termos e Condições de Uso do Spotify
                </label>

                <label>
                  <input
                    type="checkbox"
                  />
                  Não quero receber mensagens de marketing do Spotify
                </label>

                <label>
                  <input
                    type="checkbox"
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

