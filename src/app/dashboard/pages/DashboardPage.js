import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar/Navbar';
import SummaryCard from '../components/SummaryCards/SummaryCard';
import FilterBar from '../components/FilterBar/FilterBar';
import TransactionsTable from '../components/TransactionTable/TransactionsTable';
import transactionsService from '../services/transactionsService';
import styles from '../styles/Dashboard.module.css';
import months from '../data/months'

const filterByDate = (transactions, filter) => {
    const now = new Date();
    let startOfPeriod;

    switch (filter) {
        case 'today':
            return transactions.filter(transaction => {
                const transactionDate = new Date(transaction.createdAt);
                return transactionDate.toDateString() === now.toDateString();
            });
        case 'week':
            startOfPeriod = new Date(now);
            startOfPeriod.setDate(now.getDate() - now.getDay());
            return transactions.filter(transaction => {
                const transactionDate = new Date(transaction.createdAt);
                return transactionDate >= startOfPeriod && transactionDate <= now;
            });
        case 'month':
            startOfPeriod = new Date(now.getFullYear(), now.getMonth(), 1);
            return transactions.filter(transaction => {
                const transactionDate = new Date(transaction.createdAt);
                return transactionDate >= startOfPeriod && transactionDate <= now;
            });
        default:
            return transactions;
    }
};

const filterByTransactionType = (transactions, type) => {
    if (type === 'all') {
        return transactions;
    }
    return transactions.filter(transaction => transaction.paymentMethod === type);
};

const applyFilters = (transactions, filter) => {
    let filtered = filterByDate(transactions, filter.date);

    if (filter.date && months.some(month => month.value === filter.date)) {
        const monthIndex = months.findIndex(month => month.value === filter.date);
        filtered = filtered.filter(transaction => {
            const transactionDate = new Date(transaction.createdAt);
            return transactionDate.getMonth() === monthIndex;
        });
    }

    filtered = filterByTransactionType(filtered, filter.type);
    return filtered;
};

const DashboardPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [filter, setFilter] = useState({ date: 'today', type: 'all' });

    useEffect(() => {
        transactionsService.getTransactions().then(data => {
            setTransactions(data);
            const initialFilteredTransactions = applyFilters(data, filter);
            setFilteredTransactions(initialFilteredTransactions);
        });
    }, []);

    useEffect(() => {
        const updatedFilteredTransactions = applyFilters(transactions, filter);
        setFilteredTransactions(updatedFilteredTransactions);
    }, [filter, transactions]);

    const calculateTotal = (transactions) => {
        return transactions.reduce((total, transaction) => total + transaction.amount, 0);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(prevFilter => ({ ...prevFilter, ...newFilter }));
    };

    return (
        <div className={styles.dashboard}>
            <Navbar />
            <div className={styles.row}>
                <SummaryCard total={calculateTotal(filteredTransactions)} />
                <FilterBar onFilterChange={handleFilterChange} months={months} />
            </div>
            <div className={styles.content}>
                <TransactionsTable transactions={filteredTransactions} />
            </div>
        </div>
    );
};

export default DashboardPage;
