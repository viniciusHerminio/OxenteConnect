import React, { useState } from 'react';
import logo from './images/logoOxente.png';
import Banner from './images/bannerSite.png';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [whatsapp, setWhatsapp] = useState('');

  const handleContatoClick = () => {
    setShowForm(!showForm);
  };

  const handleWhatsappChange = (event) => {
    const inputValue = event.target.value;

    // Remove todos os caracteres não numéricos
    const numericValue = inputValue.replace(/\D/g, '');

    // Limita a 11 caracteres (máximo de um número de celular)
    const limitedValue = numericValue.slice(0, 11);

    // Formata o número no formato de celular (XX) XXXXX-XXXX
    const formattedValue = limitedValue.replace(
      /(\d{2})(\d{5})(\d{4})/,
      '($1) $2-$3'
    );

    setWhatsapp(formattedValue);
  };

  return (
    <div>
      <div className="Header">
        <img src={logo} className="Logo" alt="Logo" />
        <div className='opHeader'>
          <h5 className='contato' onClick={handleContatoClick}>Contato</h5>
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
    </div>
  );
}

export default App;