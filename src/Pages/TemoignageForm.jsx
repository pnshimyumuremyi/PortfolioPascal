import React, { useState, useEffect } from 'react';
import './stylesheets/TemoignageForm.css';

const TemoignageForm = ({ currentTemoignage, onSave }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  useEffect(() => {
    if (currentTemoignage) {
      setName(currentTemoignage.name);
      setMessage(currentTemoignage.message);
    }
  }, [currentTemoignage]);

  const validateForm = () => {
    const newErrors = {};
    if (!nameRegex.test(name)) {
      newErrors.name = 'Le nom est invalide';
    }
    if (message.trim() === '') {
      newErrors.message = 'Le message ne peut pas être vide';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const temoignage = { name, message };

    try {
      const response = await fetch('http://localhost:4000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(temoignage),
      });

      if (response) {
        alert('Votre témoignage a été ajouté');
        setName('');
        setMessage('');
        setErrors({});
      } else {
        console.error('Erreur lors de l\'envoi du témoignage');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="temoignage-form">
      <h1>{currentTemoignage ? 'Modifier Témoignage' : 'Ajouter un Témoignage'}</h1>
      <form >
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button onClick={handleSubmit}>Enregistrer</button>
      </form>
    </div>
  );
};

export default TemoignageForm;
