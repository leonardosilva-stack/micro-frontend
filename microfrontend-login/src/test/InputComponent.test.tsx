import { render, screen, fireEvent } from '@testing-library/react';
import InputComponent from '../components/InputComponent';

describe('InputComponent', () => {
    test('renders text input correctly', () => {
        render(<InputComponent type="text" placeholder="Digite seu usuário" name="username" />);
        const inputElement = screen.getByPlaceholderText(/Digite seu usuário/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'text');
    });

    test('renders password input correctly', () => {
        render(<InputComponent type="password" placeholder="Digite sua senha" name="password" />);
        const inputElement = screen.getByPlaceholderText(/Digite sua senha/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'password');
    });

    test('renders checkbox input correctly', () => {
        render(<InputComponent type="checkbox" label="Manter conectado" name="rememberMe" />);
        const inputElement = screen.getByLabelText(/Manter conectado/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'checkbox');
    });

    test('displays error message when error prop is passed', () => {
        render(<InputComponent type="text" placeholder="Digite seu usuário" name="username" error="Campo obrigatório" />);
        const errorMessage = screen.getByText(/Campo obrigatório/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('calls onChange handler correctly', () => {
        const handleChange = jest.fn();
        render(<InputComponent type="text" placeholder="Digite seu usuário" name="username" onChange={handleChange} />);
        const inputElement = screen.getByPlaceholderText(/Digite seu usuário/i);
        fireEvent.change(inputElement, { target: { value: 'novo valor' } });
        expect(handleChange).toHaveBeenCalled();
    });

    test('calls onBlur handler correctly', () => {
        const handleBlur = jest.fn();
        render(<InputComponent type="text" placeholder="Digite seu usuário" name="username" onBlur={handleBlur} />);
        const inputElement = screen.getByPlaceholderText(/Digite seu usuário/i);
        fireEvent.blur(inputElement);
        expect(handleBlur).toHaveBeenCalled();
    });
});
