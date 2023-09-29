import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário (por exemplo, para um servidor ou API)
    console.log(formData);
    // Limpar o formulário
    setFormData({
      nome: '',
      email: '',
      whatsapp: '',
      mensagem: '',
    });
  };

  return (
    <div className="ContactForm">
      <h2>Preencha seus dados de contato:</h2>
      <form onSubmit={handleSubmit}>
        <div className="FormField">
          <label htmlFor="nome">Nome completo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Seu Nome Completo"
          />
        </div>

        <div className="FormField">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email@email.email"
          />
        </div>

        <div className="FormField">
          <label htmlFor="whatsapp">WhatsApp:</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="(XX) XXXXX-XXXX"
            maxLength="15"
            required
          />
        </div>

        <div className="FormField">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Deixe sua mensagem que entraremos em contato o mais breve possível!"
            rows="4"
            cols="50"
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;