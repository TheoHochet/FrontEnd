import React, { useState } from 'react';
import { FaBell, FaBars } from 'react-icons/fa';
import moodImage from './mood-image.png';
import '../index.css';

function FatigueFactor() {
  const [fatigueLevel, setFatigueLevel] = useState(0);

  const handleCircleClick = (event) => {
    const circle = event.currentTarget;
    const rect = circle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = event.clientX - centerX;
    const y = event.clientY - centerY;
    const angle = Math.atan2(y, x) * (180 / Math.PI) + 180;
    const newFatigueLevel = Math.round((angle / 360) * 100);
    setFatigueLevel(newFatigueLevel);
  };

  return (
    <div className="fatigue-factor-container">
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

      {/* Fatigue Factor Section */}
      <div className="fatigue-test">
        <div className="fatigue-content">
          <div className="fatigue-text">
            <h3>Premier facteur</h3>
            <h1>La fatigue</h1>
            <p>À quel point vous sentez-vous fatigué aujourd'hui ?
            </p>
            <div className="fatigue-circle-container">
              <div className="fatigue-circle" onClick={handleCircleClick}>
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${fatigueLevel}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="percentage">{fatigueLevel}%</div>
              </div>
            </div>
            <button className="validate-button">Valider</button>
          </div>
          <div className="mood-image">
            <img src={moodImage} alt="Moodly" className="mood-icon" />
          </div>
        </div>
        <div className="step-indicator">1 / 6</div>
      </div>
    </div>
  );
}

export default FatigueFactor;
