import React from 'react';
import { render, screen } from '@testing-library/react';
import SummaryCard from './SummaryCard';

test('renders total amount in Colombian pesos', () => {
    const total = 5000000;

    render(<SummaryCard total={total} />);

    const totalElement = screen.getByText(/5.000.000,00/i);
    expect(totalElement).toBeInTheDocument();
});

test('renders header and info icon', () => {
    render(<SummaryCard total={1000000} />);
    const headerElement = screen.getByText(/Total de ventas filtro seleccionado/i);
    expect(headerElement).toBeInTheDocument();
});