import React, { useState } from 'react';
import logo from './images/logoOxente.png';
import Banner from './images/bannerSite.png';
import nuvem from './images/nuvem.png';
import mobilidade from './images/mobilidade.png';
import financeiro from './images/financeiro.png';
import gestao from './images/gestão.png';
import './App.css';

const benefitsData = [
  {
    icon: nuvem,
    title: 'Integração com o Provedor de Internet',
    description: 'Integração com nosso provedor de internet para maior segurança, velocidade e fácil manutenção em todo o sistema.'
  },
  {
    icon: mobilidade,
    title: 'Mobilidade e Flexibilidade',
    description: 'Permite a comunicação de qualquer lugar, proporcionando maior mobilidade e flexibilidade para os usuários, facilitando o trabalho remoto e deslocamentos.'
  },
  {
    icon: financeiro,
    title: 'Economia de Custos',
    description: 'Reduz os custos operacionais e de manutenção, pois utiliza a infraestrutura de rede existente e elimina a necessidade de hardware físico extenso.'
  },
  {
    icon: gestao,
    title: 'Gestão e Monitoramento Avançados',
    description: 'Oferece recursos avançados de gestão e monitoramento em tempo real, possibilitando um controle mais eficaz das chamadas, o que contribui para melhorar a eficiência da comunicação empresarial.'
  }
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [whatsapp, setWhatsapp] = useState('');

  const handleContatoClick = () => {
    setShowForm(!showForm);
  };

  const handleWhatsappChange = (event) => {
    const inputValue = event.target.value;

    const numericValue = inputValue.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 11);
    const formattedValue = limitedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    setWhatsapp(formattedValue);
  };

  return (
    <div>
      <div className={`Header ${showForm ? 'blur-background' : ''}`}>
        <img src={logo} className="Logo" alt="Logo" />
        <div className='opHeader'>
          <h5 className={`contato ${showForm ? 'blur-text' : ''}`} onClick={handleContatoClick}>Contato</h5>
          <h5 className='plano'>Planos</h5>
        </div>
      </div>

      {showForm && <div className="blur-overlay"></div>}

      <img className={`Banner ${showForm ? 'blur-background' : ''}`} src={Banner} alt='Banner' />

      {showForm && (
        <div className="FormContainer">
          <h2 className="FormTitle">Preencha seus dados de contato:</h2>
          <form className="Form">
            <div className="FormField">
              <label htmlFor="nome">Nome completo:</label>
              <input type="text" id="nome" name="nome" required placeholder="Seu Nome Completo" />
            </div>

            <div className="FormField">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required placeholder="email@email.email" />
            </div>

            <div className="FormField">
              <label htmlFor="whatsapp">WhatsApp:</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={whatsapp}
                onChange={handleWhatsappChange}
                placeholder="(XX) XXXXX-XXXX"
                maxLength="15"
                required
              />
            </div>

            <button type="submit" className="SubmitButton">Enviar</button>
          </form>
        </div>
      )}

      <h1 className={`BenefitsTitle ${showForm ? 'blur-text' : ''}`}>Benefícios</h1>
      <div className={`BenefitsContainer ${showForm ? 'blur-background' : ''}`}>
        {benefitsData.map((benefit, index) => (
          <div className="BenefitCard" key={index}>
            <div className="CardHeader">
              <img src={benefit.icon} alt="Ícone de nuvem" className="CardIcon" />
              <h3 className="CardTitle">{benefit.title}</h3>
            </div>
            <div className="CardContent">
              <p className={`descricao${index}`}>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;