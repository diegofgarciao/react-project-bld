import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Navbar', () => {
    test('renders links with correct attributes', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const miNegocioLink = screen.getByText(/mi negocio/i);
        const ayudaLink = screen.getByText(/ayuda/i);

        expect(miNegocioLink).toHaveAttribute('href', 'https://bold.co/v1');
        expect(miNegocioLink).toHaveAttribute('target', '_blank');
        expect(miNegocioLink).toHaveAttribute('rel', 'noopener noreferrer');

        expect(ayudaLink).toHaveAttribute('href', 'https://jobs.bold.co/o/frontend-engineer-react');
        expect(ayudaLink).toHaveAttribute('target', '_blank');
        expect(ayudaLink).toHaveAttribute('rel', 'noopener noreferrer');

    });

    test('navigates to home on logout click', () => {
        const mockNavigate = jest.fn();
        jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const logoutLink = screen.getByText(/logout/i);
        fireEvent.click(logoutLink);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

});
