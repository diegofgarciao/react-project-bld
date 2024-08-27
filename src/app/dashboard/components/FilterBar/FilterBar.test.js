import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('FilterBar', () => {
    test('calls onFilterChange with correct date filter when buttons are clicked', () => {
        const onFilterChange = jest.fn();
        const months = [{ value: '01', label: 'January' }];

        render(<FilterBar onFilterChange={onFilterChange} months={months} />);

        fireEvent.click(screen.getByText(/hoy/i));
        expect(onFilterChange).toHaveBeenCalledWith({ date: 'today' });

        fireEvent.click(screen.getByText(/esta semana/i));
        expect(onFilterChange).toHaveBeenCalledWith({ date: 'week' });
    });

    test('calls onFilterChange with correct type filter when selecting transaction type', () => {
        const onFilterChange = jest.fn();
        const months = [{ value: '01', label: 'January' }];

        render(<FilterBar onFilterChange={onFilterChange} months={months} />);

        fireEvent.change(screen.getByDisplayValue(/todos/i), { target: { value: 'PSE' } });
        expect(onFilterChange).toHaveBeenCalledWith({ type: 'PSE' });
    });

    test('renders the list of months and calls onFilterChange when a month is selected', () => {
        const onFilterChange = jest.fn();
        const months = [
            { value: '01', label: 'January' },
            { value: '02', label: 'February' },
        ];

        render(<FilterBar onFilterChange={onFilterChange} months={months} />);

        months.forEach(month => {
            expect(screen.getByText(month.label)).toBeInTheDocument();
        });

        fireEvent.change(screen.getByDisplayValue(/mes/i), { target: { value: '02' } });
        expect(onFilterChange).toHaveBeenCalledWith({ date: '02' });
    });
});
