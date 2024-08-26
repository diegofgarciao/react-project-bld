import React from 'react';
import styles from '../SummaryCards/Summary.module.css';

const SummaryCard = ({ total }) => {
    return (
        <div className={styles.summaryCard}>
            <div className={styles.cardHeader}>
                <h3>Total de ventas filtro seleccionado</h3>
                <span className={styles.infoIcon}>i</span>
            </div>
            <div className={styles.cardBody}>
                <p className={styles.totalAmount}>{total.toLocaleString('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                })}</p>
            </div>
        </div>
    );
};

export default SummaryCard;
