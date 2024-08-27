import React from 'react';
import styles from '../TransactionModal/Transaction.module.css';

function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
    }).format(amount);
  }
  
function formatDate(milliseconds) {
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
  }

const TransactionModal = ({ transaction, onClose }) => {
  if (!transaction) return null;

  const renderIconAndMessage = () => {
    if (transaction.status === 'SUCCESSFUL') {
      return (
        <>
          <span className={styles.successIcon}>✔️</span>
          <h2>¡Cobro exitoso!</h2>
        </>
      );
    } else if (transaction.status === 'REJECTED') {
      return (
        <>
          <span className={styles.rejectIcon}>❌</span>
          <h2>¡Cobro rechazado!</h2>
        </>
      );
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalHeader}>
          {renderIconAndMessage()}
          <h1>{formatCurrency(transaction.amount)}</h1>
          <p>{formatDate(transaction.createdAt)}</p>
        </div>
        <div className={styles.modalBody}>
          <p><strong>ID transacción Bold:</strong> {transaction.id}</p>
          <p><strong>Deducción Bold:</strong> <span className={styles.deduction}>-{formatCurrency(transaction.deduction)}</span></p>
          <hr />
          <p><strong>Método de pago:</strong> <span className={styles.paymentMethod}>💳{transaction.paymentMethod}</span></p>
          <p><strong>Tipo de pago:</strong> <span className={styles.salesType}>{transaction.salesType}</span></p>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;


