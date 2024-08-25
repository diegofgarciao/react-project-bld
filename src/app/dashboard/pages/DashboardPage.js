import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SummaryCard from '../components/SummaryCard';
import FilterBar from '../components/FilterBar';
import TransactionsTable from '../components/TransactionsTable';
import styles from '../styles/Dashboard.module.css';

const DashboardPage = () => {
    const [total, setTotal] = useState(0);

    const handleFilterChange = (filter) => {
        // Aquí puedes implementar la lógica para filtrar las transacciones
        console.log(filter);
    };

    return (
        <div className={styles.dashboard}>
            <Navbar />
            <div className={styles.content}>
                <SummaryCard total={total} />
                <FilterBar onFilterChange={handleFilterChange} />
                <TransactionsTable />
            </div>
        </div>
    );
};

export default DashboardPage;
