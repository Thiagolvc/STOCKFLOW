// ContactForm.jsx
import React, { useState } from 'react';
import '../../styles/home-components/contact-form.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário
    alert('Mensagem enviada!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Fale Conosco</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Sua mensagem"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </div>
        <button type="submit" className="contact-btn">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;