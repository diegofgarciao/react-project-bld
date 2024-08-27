import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TransactionsTable from './TransactionsTable';

test('renders transactions and filters them based on search term', () => {
    const transactions = [
        {
            status: 'Success',
            createdAt: 1625158000000,
            paymentMethod: 'PSE',
            id: '12345',
            amount: 10000,
        },
        {
            status: 'Failed',
            createdAt: 1625244400000,
            paymentMethod: 'CARD',
            id: '67890',
            amount: 20000,
        },
    ];

    render(<TransactionsTable transactions={transactions} />);

    expect(screen.getByText(/success/i)).toBeInTheDocument();
    expect(screen.getByText(/failed/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/buscar por palabra/i), { target: { value: 'PSE' } });
    expect(screen.getByText(/success/i)).toBeInTheDocument();
    expect(screen.queryByText(/failed/i)).not.toBeInTheDocument();
});

test('renders transactions with correct date and amount formatting', () => {
    const transactions = [
        {
            status: 'Success',
            createdAt: 1625158000000,
            paymentMethod: 'PSE',
            id: '12345',
            amount: 10000,
        },
    ];

    render(<TransactionsTable transactions={transactions} />);

    expect(screen.getByText(/1 de julio de 2021/i)).toBeInTheDocument();

    expect(screen.getByText(/10.000/i)).toBeInTheDocument();
});

