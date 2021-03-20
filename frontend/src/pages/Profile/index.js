import React from 'react';
import './styles.css';
import logo from './../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


const Profile = () => {
    return (  
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>
                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={20} color="#e02041"/>

                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>
            </ul>
        </div>
    );
}
 
export default Profile;