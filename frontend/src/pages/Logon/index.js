import React, { useState } from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logo from './../../assets/logo.svg';
import heroesImg from './../../assets/heroes.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


const Logon= () => {
    const [id, setId] = useState('');
    const history = useHistory();

    function handleLogin(event) {
        event.preventDefault();
        api.post('/session', {id}).then(response => {
            console.log(response.data.id);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
            
        }).catch(error => {
            alert("Falha no login, tente novamente.")
        })
    }
    return ( 
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>
            
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}
 
export default Logon;
