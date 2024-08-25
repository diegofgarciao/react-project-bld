import React from 'react';
import styles from '../styles/Dashboard.module.css';

const SummaryCard = ({ total }) => {
    return (
        <div className={styles.summaryCard}>
            <h3>Total de ventas filtro seleccionado</h3>
            <p className={styles.totalAmount}>${total.toLocaleString()}</p>
        </div>
    );
};

export default SummaryCard;