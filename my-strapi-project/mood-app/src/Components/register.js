import React from 'react';
import '../index.css';

function Register() {
    return (
        <div className="register_container">
            <div className="register_card">
                <div className="welcome_section">
                    <h2>Inscrivez_vous</h2>
                    <p>"Rejoignez Moodly et améliorez votre bien_être au travail."</p>
                    <div className="logo">
                        {/* Ajoutez votre logo ici, peut être une balise <img> */}
                    </div>
                </div>
                <form action="/register" method="post" className="register_form">
                    <label htmlFor="full_name">Nom complet:</label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        placeholder="Matthieu Perret"
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="matthieu.perret@hellowork.co"
                    />
                    <label htmlFor="post">Poste:</label>
                    <input
                        type="text"
                        id="post"
                        name="post"
                        required
                        placeholder="Votre poste"
                    />
                    <label htmlFor="password">Mot de passe:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="**********"
                    />
                    <label htmlFor="confirm_password">Confirmer le mot de passe:</label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        required
                        placeholder="**********"
                    />
                    <button className="register_button" type="submit">S'inscrire</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
