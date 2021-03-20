import React, { useState } from 'react';
import './styles.css';
import logo from './../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

const NewIncident = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    function handleNewIncident(event) {
        event.preventDefault();
        const data = {
            title,
            description,
            value: value.toString()
        };
        api.post('incidents',data, {
            headers: {Authorization: ongId}
        });
        history.push('/profile');

    }

    return ( 
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Cadastrar Novo caso</h1>
                    <p>Descreva seu caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                            <FiArrowLeft size={20} color="#E02041"/>
                            Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Título do caso"
                        required    
                    />
                    <textarea 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Descrição"
                        required
                    />
                    <input type="number" step="0.01" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor em reais"
                        required    
                    />
                    
                    <button type="submit" className="button">
                        Cadastrar
                    </button>

                </form>
            </div>
        </div>
    );
}
 
export default NewIncident;