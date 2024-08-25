import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css';
import logo from '../../assets/icons/iconNavBar.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <ul className={styles.navLinks}>
                <li><a href="https://bold.co/v1" target="_blank" rel="noopener noreferrer">Mi Negocio</a></li>
                <li><a href="https://jobs.bold.co/o/frontend-engineer-react" target="_blank" rel="noopener noreferrer">Ayuda</a></li>
                <li><a href="/login" onClick={handleLogout} className={styles.navLink}>Logout</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;