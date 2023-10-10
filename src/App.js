import React, { useState, useEffect } from 'react';
import logo from './images/logoOxente.png';
import Banner from './images/bannerSite.png';
import nuvem from './images/nuvem.png';
import mobilidade from './images/mobilidade.png';
import financeiro from './images/financeiro.png';
import gestao from './images/gestão.png';
import homemCelular from './images/homemCelular.jpg';
import './App.css';
import { useSpring, animated } from 'react-spring';
import emailjs from 'emailjs-com'; // Importe 'emailjs-com' em vez de '@emailjs/browser'

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
    beneficios: ['Benefício 1', 'Benefício 2', 'Benefício 3', 'Benefício 4', 'Benefício 5']
  },
  {
    name: 'Plano Padrão',
    price: '$49.99/mês',
    description: 'Ótima opção para negócios em crescimento com necessidades mais avançadas.',
    beneficios: ['Benefício 1', 'Benefício 2', 'Benefício 3', 'Benefício 4', 'Benefício 5']
  },
  {
    name: 'Plano Avançado',
    price: '$79.99/mês',
    description: 'Para negócios estabelecidos que exigem funcionalidades avançadas e suporte dedicado.',
    beneficios: ['Benefício 1', 'Benefício 2', 'Benefício 3', 'Benefício 4', 'Benefício 5']
  }
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [whatsapp, setWhatsapp] = useState('');
  const [videoVisible, setVideoVisible] = useState(false);

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmailMessage', 'template_s0n3fmq', e.target, 'ieaebn5vLF1l8PvsY') // Use e.target para referenciar o formulário
      .then((result) => {
        alert('Mensagem enviada com sucesso!');
        clearFormFields();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const clearFormFields = () => {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    setWhatsapp('');
    document.getElementById('comment').value = '';
  };

  const slideAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  useEffect(() => {
    const handleScroll = () => {
      const planCards = document.querySelectorAll('.PlanCard');
      planCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect) {
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            card.classList.add('in-view');
          } else {
            card.classList.remove('in-view');
          }
        }
      });

      const videoSection = document.querySelector('.VideoSection');
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        if (rect) {
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setVideoVisible(true);
          } else {
            setVideoVisible(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
          <h5 className='plano'>
            <a href="#planos">Planos</a>
            </h5>
        </div>
      </div>

      {showForm && <div className="blur-overlay"></div>}

      <img className={`Banner ${showForm ? 'blur-background' : ''}`} src={Banner} alt='Banner' />
      <div className='MobileContent'>
  <div className='buttonNumberOneContainer'>
    <div className='textoBotao'>
      <div className='textoCopy'>
        <animated.h2 style={slideAnimation} className={`primeiroTitle${showForm ? 'blur-text' : ''}`}>Maximize sua eficiência empresarial</animated.h2>
        <animated.h2 style={slideAnimation} className={`segundoTitle${showForm ? 'blur-text' : ''}`}>com a telefonia digital!</animated.h2>
        <animated.p style={slideAnimation} className={`textoDaCopy${showForm ? 'blur-text' : ''}`}>Potencialize a comunicação da sua empresa com nosso
          inovador serviço de PABX Virtual. A chave para o sucesso 
          dos negócios está na eficiência da comunicação. Com nossa 
          solução, você terá um sistema robusto que integra chamadas de
          voz, mobilidade e gestão avançada, tudo em um único lugar. 
          Simplifique o atendimento, melhore a mobilidade da equipe e
          economize tempo e recursos. Faça a diferença, conecte-se 
          de forma inteligente e alcance novos patamares com o PABX
          Virtual da nossa empresa.</animated.p>
      </div>
      <animated.button style={slideAnimation} className={`buttonNumberOne${showForm ? 'blur-text' : ''}`} onClick={handleContatoClick}>
        Fale com um especialista
      </animated.button>
    </div>
    <animated.img style={slideAnimation} className={`fotoHomem${showForm ? 'blur-text' : ''}`} src={homemCelular} alt='homem ao celular' />
  </div>
</div>
      {showForm && (
        <div className={`FormContainer show`}>
          <div className="CloseIcon" onClick={handleToggleForm}>
            &#x2715;
          </div>
          <h2 className="FormTitle">Preencha seus dados de contato:</h2>
          <form className="Form" id='gmailMessage' onSubmit={sendEmail}>
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
    <label htmlFor="comment">Mensagem:</label>
    <textarea className='text' placeholder='Deixe sua mensagem que entraremos em contato o mais breve possível!' rows="4" cols="50" id="comment" name="comment" form="gmailMessage"/>
  </div>

  <animated.button style={slideAnimation} type="submit" className="SubmitButton">
    Enviar
  </animated.button>
</form>
        </div>
      )}

      <div className={`VideoSection${showForm ? 'blur-text' : ''} ${videoVisible ? 'slide-in' : ''}`}>
        <div className='botaoVideo'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qrHNeZ1-obg"
            title="PABX Virtual"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <animated.button
            style={slideAnimation}
            className={`buttonNumberOne${showForm ? 'blur-text' : ''}`}
            onClick={handleContatoClick}
          >
            Fale com um especialista
          </animated.button>
        </div>
        <div>
        </div>
        <div className="VideoTitleContainer">
          <animated.h1 style={slideAnimation} className={`VideoTitle${showForm ? 'blur-text' : ''}`}>Assista a esse vídeo</animated.h1>
          <animated.p style={slideAnimation} className={`Videodescricao${showForm ? 'blur-text' : ''}`}>E entenda o porquê o nosso PABX virtual irá <br/> elevar a comunicação da sua empresa a outro nível.</animated.p>
          <animated.h1 style={slideAnimation} className={`VideoTitle${showForm ? 'blur-text' : ''}`}>Dúvidas?</animated.h1>
          <animated.p style={slideAnimation} className={`Videodescricao${showForm ? 'blur-text' : ''}`}>Se restar mais alguma dúvida, entre em contato <br/> com nosso time comercial. Estaremos ansiosos em lhe atender.</animated.p>
        </div>
      </div>
      <div className={`beneficioscompleto${showForm ? 'blur-text' : ''}`}>
        <animated.h1 style={slideAnimation} className={`BenefitsTitle ${showForm ? 'blur-text' : ''}`}>Benefícios</animated.h1>
        <div className={`BenefitsContainer ${showForm ? 'blur-background' : ''}`}>
          {benefitsData.map((benefit, index) => (
            <animated.div style={slideAnimation} className="BenefitCard" key={index}>
              <div className="CardHeader">
                <img src={benefit.icon} alt="Ícone de nuvem" className="CardIcon" />
                <h3 className="CardTitle">{benefit.title}</h3>
              </div>
              <div className="CardContent">
                <animated.p style={slideAnimation} className={`descricao${index}`}>{benefit.description}</animated.p>
              </div>
            </animated.div>
          ))}
        </div>
      </div>

      <div id="planos" className='planosContainer'>
        <animated.h1 style={slideAnimation} className={`BenefitsTitle ${showForm ? 'blur-text' : ''}`}>Confira Nossos Planos</animated.h1>
        <div className={`PlansContainer${showForm ? 'blur-text' : ''}`}>
          {plansData.map((plan, index) => (
            <div className="PlanCard" key={index}>
              <div className="CardHeader">
                <h3 className="CardTitle">{plan.name}</h3>
                <p className="PlanPrice">{plan.price}</p>
              </div>
              <div className="CardContent">
                <p className={`planodescricao${index}`}>{plan.description}</p>
                <h4 className='subtitlePlan'>Benefícios:</h4>
                <ul>
                  {plan.beneficios.map((beneficio, idx) => (
                    <li key={idx}>{beneficio}</li>
                  ))}
                </ul>
                <button className={`ButtonSpecialist${showForm ? 'blur-text' : ''}`} onClick={handleContatoClick}>
                  Fale com um especialista
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="Rodape">
        <p>Todos os direitos reservados &copy; {new Date().getFullYear()} Oxente Net</p>
      </footer>
    </div>
  );
}

export default App;