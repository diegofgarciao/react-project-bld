import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import transactionsService from '../services/transactionsService';

jest.mock('../services/transactionsService');

test('filters transactions by payment method', async () => {
    const mockTransactions = [
        { id: '1', createdAt: Date.now(), paymentMethod: 'PSE', amount: 10000 },
        { id: '2', createdAt: Date.now(), paymentMethod: 'CARD', amount: 20000 },
        { id: '3', createdAt: Date.now(), paymentMethod: 'NEQUI', amount: 15000 },
    ];

    transactionsService.getTransactions.mockResolvedValue(mockTransactions);

    render(
        <MemoryRouter>
            <DashboardPage />
        </MemoryRouter>
    );

    await waitFor(() => {
        expect(transactionsService.getTransactions).toHaveBeenCalledTimes(1);
    });

    const paymentMethodSelect = screen.getByDisplayValue('Todos');
    fireEvent.change(paymentMethodSelect, { target: { value: 'CARD' } });

    await waitFor(() => {
        expect(screen.getByText(/CARD/i)).toBeInTheDocument();
    });
});
