import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Assuming you have a CSS file for styling.

// Function for employee login
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
      alert('Login successful!');
      return true;
    } else {
      alert('Login error');
      return false;
    }
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
}

// Login component
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utilisation de useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await employeeLogin(email, password);
    if (success) {
      navigate('/accueil'); // Redirection vers la page Accueil après une connexion réussie
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="welcome-section">
          <h2>Bienvenue</h2>
          <p>"Bienvenue sur Moodly, votre allié pour un bien-être épanouissant au travail."</p>
          <div className="logo">
            {/* Add your logo here, can be an <img> tag */}
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="matthieu.perret@hellowork.co"
          />
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="**********"
          />
          <div className="forgot-password">
            <a href="#">Mot de passe oublié ?</a>
          </div>
          <button className="login-button" type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
