import React from 'react';
import styles from '../styles/Dashboard.module.css';

const FilterBar = ({ onFilterChange }) => {
    return (
        <div className={styles.filterBar}>
            <button onClick={() => onFilterChange('today')}>Hoy</button>
            <button onClick={() => onFilterChange('week')}>Esta semana</button>
            <select onChange={(e) => onFilterChange(e.target.value)}>
                <option value="month">Mes</option>
                <option value="january">Enero</option>
                <option value="february">Febrero</option>
            </select>
            <button onClick={() => onFilterChange('transactionType')}>Filtrar</button>
        </div>
    );
};

export default FilterBar;
