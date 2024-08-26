import React from 'react';
import styles from '../FilterBar/FilterBar.module.css';

const FilterBar = ({ onFilterChange, months }) => {

    const handleDateFilter = (filter) => {
        onFilterChange({ date: filter });
    };

    const handleMonthChange = (e) => {
        onFilterChange({ date: e.target.value });
    };

    const handleTypeFilter = (e) => {
        onFilterChange({ type: e.target.value });
    };

    return (
        <div className={styles.filterBar}>
            <button onClick={() => handleDateFilter('today')}>Hoy</button>
            <button onClick={() => handleDateFilter('week')}>Esta semana</button>
            <select onChange={handleMonthChange}>
                <option value="">Mes</option>
                {months.map(month => (
                    <option key={month.value} value={month.value}>{month.label}</option>
                ))}
            </select>
            <select onChange={handleTypeFilter}>
                <option value="all">Todos</option>
                <option value="PSE">PSE</option>
                <option value="CARD">Tarjeta</option>
                <option value="NEQUI">Nequi</option>
                <option value="BANCOLOMBIA">Bancolombia</option>
                <option value="DAVIPLATA">Daviplata</option>
            </select>
        </div>
    );
};

export default FilterBar;
