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
import { AiOutlinePlusCircle, AiFillMinusCircle } from 'react-icons/ai';

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
  const [videoVisible, setVideoVisible] = useState(false);

  const [faqData, setFAQData] = useState([
    {
      question: 'Como faço para contratar o PABX Virtual?',
      answer: 'Para contratar o PABX Virtual, entre em contato conosco através do formulário de contato ou ligue para o nosso suporte. Nossa equipe terá prazer em lhe ajudar a escolher o plano certo para o seu negócio.',
      open: false,
    },
    {
      question: 'Quais são os benefícios do PABX Virtual?',
      answer: 'O PABX Virtual oferece integração com provedor de internet, mobilidade e flexibilidade, economia de custos e recursos avançados de gestão e monitoramento em tempo real. Esses benefícios podem melhorar a eficiência da comunicação da sua empresa.',
      open: false,
    },
    {
      question: 'O PABX Virtual é compatível com dispositivos móveis?',
      answer: 'Sim, o PABX Virtual é compatível com uma variedade de dispositivos, incluindo smartphones, proporcionando flexibilidade de uso.',
      open: false,
    },
    {
      question: 'É Fácil a instalação??',
      answer: 'Com o PABX Virtual da Oxente.net, a instalação é rápida, fácil e descomplicada. Eliminamos equipamentos volumosos e configurações complexas, permitindo que sua empresa desfrute de uma comunicação eficiente em poucos passos.',
      open: false,
    },
    {
      question: 'O PABX Virtual é seguro para uso na minha empresa?',
      answer: 'Sim, o PABX Virtual é uma solução segura para comunicações empresariais. Ele é projetado com medidas de segurança avançadas para proteger suas chamadas e dados. A integração com nosso provedor de internet de alta qualidade também ajuda a garantir a segurança e a qualidade das chamadas. Além disso, oferecemos suporte técnico para manter o sistema seguro e atualizado, garantindo a tranquilidade dos usuários.".',
      open: false,
    },
    {
      question: 'Tenho um contato que utilizo a anos, consigo integrar ele ao PABX virtual?',
      answer: 'Sim, é possível integrar seus contatos antigos ao PABX virtual da Oxente.net. Oferecemos planos com minutagem e, se necessário, utilizamos uma chipeira para vincular chips não vinculados à operadora ao PABX Virtual. Também podemos integrar números fixos aos ramais, assegurando uma transição suave para uma comunicação empresarial moderna, sem perder nenhum contato.',
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFAQData = [...faqData];
    updatedFAQData[index].open = !updatedFAQData[index].open;
    setFAQData(updatedFAQData);
  };

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
        <animated.h2 style={slideAnimation} className={`primeiroTitle${showForm ? 'blur-text' : ''}`}>O que é o PABX Virtual?</animated.h2>
        <animated.p style={slideAnimation} className={`textoDaCopy${showForm ? 'blur-text' : ''}`}>
        O PABX Virtual, também conhecido como PBX em nuvem,
        é uma evolução do sistema de PABX tradicional. Em vez
        de hardware físico, ele é baseado na nuvem, o que
        significa que as chamadas são feitas pela internet. O
        PABX Virtual oferece uma série de vantagens em
        comparação com seu antecessor.
        </animated.p>
      </div>
      <div className='primeiroBotao'>
      <animated.button style={slideAnimation} className={`buttonNumberOne${showForm ? 'blur-text' : ''}`} onClick={handleContatoClick}>
        Fale com um especialista
      </animated.button>
      </div>
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
      <div className={`FAQSection${showForm ? 'blur-text' : ''}`}>
        <h1 className="FAQTitle">Perguntas Frequentes</h1>
        <div className={`FAQContainer ${showForm ? 'blur-background' : ''}`}>
  {faqData.map((faqItem, index) => (
    <div className="FAQItem" key={index}>
      <div className="FAQQuestion" onClick={() => toggleFAQ(index)}>
        <h3 className="FAQQuestionText">{faqItem.question}</h3>
        <div className="QuestionToggle">
          {faqItem.open ? <AiFillMinusCircle /> : <AiOutlinePlusCircle />}
        </div>
      </div>
      <div className={`FAQAnswer ${faqItem.open ? 'open' : ''}`}>
        <p className="FAQAnswerText">{faqItem.answer}</p>
      </div>
    </div>
  ))}
</div>
    </div>
    <div className="OpenFormButtonContainer">
        <animated.button
          style={slideAnimation}
          className={`buttonNumberTwo${showForm ? 'blur-text' : ''}`}
          onClick={handleToggleForm}
        >
          Fale com um Especialista
        </animated.button>
      </div>
      <footer className={`Rodape${showForm ? 'blur-text' : ''}`}>
        <p>Todos os direitos reservados &copy; {new Date().getFullYear()} Oxente Net</p>
      </footer>
    </div>
  );
}

export default App;