import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../App';
import BoxRow from '../components/BoxRow';


describe('UI', () => {
    it('renders the title and the boxes for inputs', () => {
        render(<App />);
        const title = screen.getByText('Wordle Clone');
        expect(title).toBeInTheDocument();
    });

    it('renders a table of boxes', () => {
        const { container } = render(<App />);
        expect(container).toContainHTML('<div className="box-table />');
    });

    it('renders 6 BoxRow components', () => {
        const { container } = render(<App />);
        expect(container.querySelectorAll('.box')).toHaveLength(36);
    });
});

describe('Box Row', () => {
    const setup = () => render(<BoxRow />);

    it('renders 6 boxes', () => {
        const { container } = setup();
        expect(container.querySelectorAll('.box')).toHaveLength(6);

    })
});
