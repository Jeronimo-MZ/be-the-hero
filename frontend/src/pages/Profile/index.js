import React, { useEffect, useState } from 'react';
import './styles.css';
import logo from './../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';


const Profile = () => {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();
    
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    function handleDeleteIncident(id) {
        api.delete(`/incidents/${id}`, {
            headers:{
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(incidents.filter(incident => incident.id !== id))
        })
        .catch(error => {
            alert('Ocorreu um erro ao tentar deletar o caso, tente novamente.')    
        }); 
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (  
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button"
                    onClick={handleLogout}
                >
                    <FiPower size={20} color="#e02041"/>

                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>
                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>
                        
                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-Br', {style:'currency', currency: 'BRL'}).format(incident.value)}</p>
                        <button
                            onClick={ () => handleDeleteIncident(incident.id)}
                        >
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}

                
               
            </ul>
        </div>
    );
}
 
export default Profile;