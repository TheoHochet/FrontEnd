import React from 'react';
import moodImage from './mood-image.png'; // Importation de l'image depuis le même dossier
import { FaBell, FaHome, FaBars, FaHistory, FaUser } from 'react-icons/fa';
import '../index.css'; // Importation du fichier CSS

function Dashboard({ onSubmitMood }) {
  const handleTestClick = () => {
    // Logique pour le bouton "Faire le test"
    console.log('Faire le test cliqué');
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="profile-section">
          <img src="/path/to/profile-pic.jpg" alt="Matthieu" className="profile-pic" />
          <div className="profile-info">
            <h2>Matthieu</h2>
            <p>Collaborateur</p>
          </div>
        </div>
        <div className="notification-section">
          <FaBell className="notification-icon" />
        </div>
      </header>

      {/* Search Section */}
      <div className="search-and-settings">
        <input type="text" placeholder="Rechercher..." className="search-bar" />
        <button className="settings-button">
          <FaBars />
        </button>
      </div>

       {/* Spacer Section */}
    <div className="spacer"></div>

    
      {/* Mood Test Section */}
      <div className="mood-test">
        <div className="mood-content">
          <div className="mood-text">
            <h3>Et aujourd'hui ?</h3>
            <p>Comment vous sentez-vous ?</p>
            <button onClick={handleTestClick} className="test-button">Faire le test</button>
          </div>
          <div className="mood-image">
            <img src={moodImage} alt="Moodly" className="mood-icon" />
          </div>
        </div>
      </div>

      {/* Weekly Statistics Section */}
      <div className="weekly-stats">
        <h3>Statistiques hebdomadaires</h3>
        <div className="stats-cards">
          <div className="stats-card">
            <p className="stats-value">Bonne</p>
            <span className="stats-label">Humeur globale</span>
          </div>
          <div className="stats-card">
            <p className="stats-value">4</p>
            <span className="stats-label">Tests effectués</span>
          </div>
          <div className="stats-card">
            <p className="stats-value">Stress</p>
            <span className="stats-label">Point d'attention</span>
          </div>
        </div>
      </div>

      {/* Company Morale Section */}
      <div className="company-morale">
        <div className="morale-header">
          <h3>Le moral en entreprise</h3>
        </div>
        <div className="morale-list">
          <div className="morale-item">
            <div className="morale-icon"> {/* Icône de fatigue */} </div>
            <div className="morale-info">
              <h4>La fatigue</h4>
              <p>Un manque d'énergie causé par un repos insuffisant.</p>
            </div>
          </div>
          <div className="morale-item">
            <div className="morale-icon"> {/* Icône de stress */} </div>
            <div className="morale-info">
              <h4>Le stress</h4>
              <p>Une pression constante pouvant impacter la santé mentale.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <nav className="bottom-nav">
        <button className="nav-button"><FaHome /> Accueil</button>
        <button className="nav-button"><FaBars /> Menu</button>
        <button className="nav-button"><FaHistory /> Historique</button>
        <button className="nav-button"><FaUser /> Compte</button>
      </nav>
    </div>
  );
}

export default Dashboard;
