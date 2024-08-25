import React, { useEffect, useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import transactionsService from '../services/transactionsService';

const TransactionsTable = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        transactionsService.getTransactions().then(data => setTransactions(data));
    }, []);

    const formatDate = (milliseconds) => {
        const date = new Date(milliseconds);
        return date.toLocaleString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };
    
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        }).format(amount);
    };

    return (
        <table className={styles.transactionsTable}>
            <thead>
                <tr>
                    <th>Transacción</th>
                    <th>Fecha y Hora</th>
                    <th>Método de Pago</th>
                    <th>ID Transacción</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.status}</td>
                        <td>{formatDate(transaction.createdAt)}</td>
                        <td>{transaction.paymentMethod}</td>
                        <td>{transaction.id}</td>
                        <td>{formatCurrency(transaction.amount)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionsTable;
