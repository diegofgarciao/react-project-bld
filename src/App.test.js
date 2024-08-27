import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

test('renders LoginPage at root path', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <AppRoutes />
        </MemoryRouter>
    );

    expect(screen.getByText(/inicie sesión/i)).toBeInTheDocument();
});

test('renders DashboardPage at /dashboard path', () => {
    render(
        <MemoryRouter initialEntries={['/dashboard']}>
            <AppRoutes />
        </MemoryRouter>
    );

    expect(screen.getByText(/transacciones/i)).toBeInTheDocument();
});
