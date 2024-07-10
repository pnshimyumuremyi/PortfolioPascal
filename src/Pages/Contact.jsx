import React, { useState } from 'react';
import './stylesheets/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailRegex = /^\S+@\S+\.\S+$/;

  const validateForm = () => {
    const formErrors = {};
    if (!name) {
      formErrors.name = "Le nom est requis";
    } else if (!nameRegex.test(name)) {
      formErrors.name = "Le nom n'est pas valide";
    }
    if (!email) {
      formErrors.email = "L'email est requis";
    } else if (!emailRegex.test(email)) {
      formErrors.email = "L'email n'est pas valide";
    }
    if (!message) {
      formErrors.message = "Le message est requis";
    }
    setErrors(formErrors);
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Formulaire soumis', { name, email, message });
      // Logique pour envoyer les données à un serveur ou une API
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div className="contact">
      <h1>Contactez-moi</h1>
      <p>Envoyez-moi un courriel sur : <a href="mailto:nshimiyesca@gmail.com">nshimiyesca@gmail.com</a></p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
