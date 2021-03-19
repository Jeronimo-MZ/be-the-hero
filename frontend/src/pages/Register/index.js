import React from 'react';
import './styles.css';
import logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Register = () => {
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
                <form action="">
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" placeholder="email"/>
                    <input type="text" placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input type="text" placeholder="cidade"/>
                        <input type="text" placeholder="uf" style={{width: 80}}/>
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