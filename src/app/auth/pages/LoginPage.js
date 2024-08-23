import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await authService.login(username, password);
        if (success) {
            navigate('/dashboard');
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftPane}>
                <h2 className={styles.title}>Bienvenido Bold App in React, por favor inicie sesión</h2>
                <form onSubmit={handleLogin} className={styles.form}>
                    <div>
                        <label>Usuario:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
            </div>
            <div className={styles.rightPane}>
                <img src="https://picsum.photos/600/400" alt="Imagen de bienvenida" className={styles.image} />
            </div>
        </div>
    );
};

export default LoginPage;
