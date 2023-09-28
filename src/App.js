import React, { useState, useEffect } from 'react';
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

const plansData = [
  {
    name: 'Plano Básico',
    price: '$29.99/mês',
    description: 'Ideal para pequenos negócios que estão começando.',
    beneficios: ['beneficio1','beneficio2','beneficio3', 'beneficio4', 'beneficio5']
  },
  {
    name: 'Plano Padrão',
    price: '$49.99/mês',
    description: 'Ótima opção para negócios em crescimento com necessidades mais avançadas.',
    beneficios: ['beneficio1','beneficio2','beneficio3', 'beneficio4', 'beneficio5']
  },
  {
    name: 'Plano Avançado',
    price: '$79.99/mês',
    description: 'Para negócios estabelecidos que exigem funcionalidades avançadas e suporte dedicado.',
    beneficios: ['beneficio1','beneficio2','beneficio3', 'beneficio4', 'beneficio5']
  }
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [whatsapp, setWhatsapp] = useState('');

  const handleContatoClick = () => {
    setShowForm(!showForm);

    const video = document.querySelector('.VideoSection iframe');
    if (video) {
      video.classList.toggle('blur-video', showForm);
    }
  };

  const handleWhatsappChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 11);
    const formattedValue = limitedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    setWhatsapp(formattedValue);
  };

  useEffect(() => {
    const handleScroll = () => {
      const planCards = document.querySelectorAll('.PlanCard');
      planCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          card.classList.add('in-view');
        } else {
          card.classList.remove('in-view');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();  // Chame a função inicialmente para os cards visíveis ao carregar a página
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleForm = () => {
    setShowForm(!showForm);
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
        <div className={`FormContainer ${showForm ? 'show' : ''}`}>
          <div className="CloseIcon" onClick={handleToggleForm}>
            &#x2715;
          </div>
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

            <div className="FormField">
              <label htmlFor="menssagem">Menssagem:</label>
              <textarea className='text' placeholder='Deixe sua mensagem que entraremos em contato o mais breve possível!' rows="4" cols="50" name="comment" form="usrform"/>
            </div>

            <button type="submit" className="SubmitButton">Enviar</button>
          </form>
        </div>
      )}

      <div className={`VideoSection${showForm ? 'blur-text' : ''}`}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qrHNeZ1-obg"
          title="PABX Virtual"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="VideoTitleContainer">
          <h1 className={`VideoTitle${showForm ? 'blur-text' : ''}`}>Assista a esse vídeo</h1>
          <p className={`Videodescricao${showForm ? 'blur-text' : ''}`}>E entenda o porquê o nosso PABX virtual irá <br/> elevar a comunicação da sua empresa a outro nível.</p>
          <h1 className={`VideoTitle${showForm ? 'blur-text' : ''}`}>Dúvidas?</h1>
          <p className={`Videodescricao${showForm ? 'blur-text' : ''}`}>Se restar mais alguma dúvida, entre em contato <br/> com nosso time comercial. Estaremos ansiosos em lhe atender.</p>
        </div>
      </div>

      <div className={`beneficioscompleto${showForm ? 'blur-text' : ''}`}>
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
      <div>
      <h1 className={`BenefitsTitle ${showForm ? 'blur-text' : ''}`}>Confira Nossos Planos</h1>
      <div className={`PlansContainer${showForm ? 'blur-text' : ''}`}>
      {plansData.map((plan, index) => (
  <div className="PlanCard" key={index}>
    <div className="CardHeader">
      <h3 className="CardTitle">{plan.name}</h3>
      <p className="PlanPrice">{plan.price}</p>
    </div>
    <div className="CardContent">
      <p className={`planodescricao${index}`}>{plan.description}</p>
      <h4>Benefícios:</h4>
      <ul>
        {plan.beneficios.map((beneficio, idx) => (
          <li key={idx}>{beneficio}</li>
        ))}
      </ul>
    </div>
  </div>
))}
      </div>
    </div>
    </div>
  );
}

export default App;