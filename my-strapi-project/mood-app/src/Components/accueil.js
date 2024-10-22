import React from 'react';
import '../index.js'; // Assurez-vous d'avoir un fichier CSS pour le style.
import { FaBell, FaHome, FaBars, FaHistory, FaUser } from 'react-icons/fa';

function Dashboard() {
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

      {/* Search and Mood Section */}
      <div className="search-and-mood">
        <input type="text" placeholder="Rechercher..." className="search-bar" />
        <button className="settings-button">
          <FaBars />
        </button>
        <div className="mood-test">
          <h3>Et aujourd'hui ?</h3>
          <p>Comment vous sentez-vous ?</p>
          <button className="test-button">Faire le test</button>
        </div>
      </div>

      {/* Weekly Statistics Section */}
      <div className="weekly-stats">
        <h3>Statistiques hebdomadaires</h3>
        <div className="stats-cards">
          <div className="stats-card">
            <p>Bonne</p>
            <span>Humeur globale</span>
          </div>
          <div className="stats-card">
            <p>4</p>
            <span>Tests effectués</span>
          </div>
          <div className="stats-card">
            <p>Stress</p>
            <span>Point d'attention</span>
          </div>
        </div>
      </div>

      {/* Company Morale Section */}
      <div className="company-morale">
        <div className="morale-header">
          <h3>Le moral en entreprise</h3>
          <a href="#">Voir plus</a>
        </div>
        <div className="morale-list">
          <div className="morale-item">
            <div className="morale-icon"> {/* Icône de fatigue */} </div>
            <div className="morale-info">
              <h4>La fatigue</h4>
              <p>Un manque d'énergie causé par un repos insuffisant.</p>
            </div>
            <a href="#">En savoir plus</a>
          </div>
          <div className="morale-item">
            <div className="morale-icon"> {/* Icône de stress */} </div>
            <div className="morale-info">
              <h4>Le stress</h4>
              <p>Une pression constante pouvant impacter la santé mentale.</p>
            </div>
            <a href="#">En savoir plus</a>
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
