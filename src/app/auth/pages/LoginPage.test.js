import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import authService from '../services/authService';

jest.mock('../services/authService');

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

test('navigates to dashboard on successful login', async () => {
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    authService.login.mockResolvedValue(true);

    render(
        <MemoryRouter>
            <LoginPage />
        </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/usuario/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/ingresar/i));
    expect(authService.login).toHaveBeenCalledWith('testuser', 'password123');

    await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
});
