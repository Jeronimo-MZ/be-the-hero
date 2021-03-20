import React, { useState } from 'react';
import './styles.css';
import logo from './../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from './../../services/api';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();

    function handleRegister(event) {
        event.preventDefault();
        const data = {name, email, whatsapp, city, uf};
        api.post('/ongs', data).then((response) => {
            alert(`Seu id de acesso: ${response.data.id}`);
            history.push('/');
        }).catch( () =>{
            alert("Erro no cadastro, tente novamente");
        });

    }

    return ( 
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG .</p>

                    <Link className="back-link" to="/">
                            <FiArrowLeft size={20} color="#E02041"/>
                            Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="UF" 
                            style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button">
                        Cadastrar
                    </button>

                </form>
            </div>
        </div>
    );
}
 
export default Register;