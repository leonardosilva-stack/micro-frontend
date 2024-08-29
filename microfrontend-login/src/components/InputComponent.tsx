import React from 'react';
interface InputProps {
    type?: string;
    value?: string | number;
    placeholder?: string;
    name?: string;
    style?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    error?: string;
    label?: string;
}

const InputComponent = ({
    type,
    value,
    placeholder,
    name,
    style = '',
    onChange,
    onBlur,
    error,
    label
}: InputProps) => {
    return (
        <div className={`mb-4 ${type === 'checkbox' ? 'flex items-center' : ''}`}>
            {type === 'checkbox' ? (
                <>
                    <input
                        type="checkbox"
                        id={name}
                        className="mr-2"
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    <label htmlFor={name}>{label}</label>
                </>
            ) : (
                <>
                    <input
                        className={`border-2 focus:border-orange-300 focus:outline-none ${style}`}
                        value={value}
                        placeholder={placeholder}
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        type={type}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                </>
            )}
        </div>
    );
};

export default InputComponent;
