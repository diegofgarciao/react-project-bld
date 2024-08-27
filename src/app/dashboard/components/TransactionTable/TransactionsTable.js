import React, { useState } from "react";
import styles from "../TransactionTable/TransactionTable.module.css";

const TransactionsTable = ({ transactions }) => {
  const formatDate = (milliseconds) => {
    const date = new Date(milliseconds);
    return date.toLocaleString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(amount);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.status?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      formatDate(transaction.createdAt)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.paymentMethod
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) || 
      transaction.id?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      formatCurrency(transaction.amount)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <h3 className={styles.tableTitle}>Transacciones</h3>
        <div className={styles.searchFilter}>
          <input
            type="text"
            placeholder="Buscar por palabra"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
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
          {filteredTransactions.map((transaction, index) => (
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
    </div>
  );
};

export default TransactionsTable;
