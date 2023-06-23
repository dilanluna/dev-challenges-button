import { render, screen } from '@testing-library/react';
import { Button } from './button';
import { RefObject } from 'react';

describe('Button', () => {
	it('should display a button', () => {
		render(<Button label="Button" />);
		expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument();
	});

	it('should forward ref', () => {
		const ref: RefObject<HTMLButtonElement> = { current: null };
		render(<Button ref={ref} />);
		expect(ref.current).not.toBeNull();
	});
});
