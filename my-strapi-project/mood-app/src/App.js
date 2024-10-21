import React, { useState } from 'react';

// Fonction pour le login de l'employé
async function employeeLogin(email, password) {
  try {
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.jwt) {
      localStorage.setItem('token', data.jwt);
      alert('Login réussi!');
      return true;
    } else {
      alert('Erreur de login');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors du login:', error);
    return false;
  }
}

async function submitMood(mood) {
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Vous devez être connecté pour soumettre votre mood');
    return;
  }

  try {
    const response = await fetch('http://localhost:1337/api/moods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Utiliser le JWT pour l'authentification
      },
      body: JSON.stringify({
        data: {
          mood: mood,
          employee: "employee_id_placeholder" // Remplacer par l'ID réel de l'employé
        }
      }),
    });

    if (response.ok) {
      alert('Mood soumis avec succès');
    } else {
      alert('Erreur lors de la soumission du mood');
    }
  } catch (error) {
    console.error('Erreur lors de la soumission du mood:', error);
  }
}

// Composant Login
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await employeeLogin(email, password);
    if (success) {
      onLogin();  // Appeler la fonction parent après le login réussi
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Mot de passe:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  );
}

// Composant MoodInput
function MoodInput() {
  return (
    <div id="moodSection">
      <h3>Comment vous sentez-vous aujourd'hui ?</h3>
      <div className="emoji-mood">
        <span className="emoji" data-mood="😊" onClick={() => submitMood("😊")}>😊</span>
        <span className="emoji" data-mood="😐" onClick={() => submitMood("😐")}>😐</span>
        <span className="emoji" data-mood="😢" onClick={() => submitMood("😢")}>😢</span>
        <span className="emoji" data-mood="😡" onClick={() => submitMood("😡")}>😡</span>
      </div>
    </div>
  );
}

// Composant principal App
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="app">
      {loggedIn ? (
        <MoodInput />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;

