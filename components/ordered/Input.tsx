import { ChangeEvent } from 'react';

interface TInput {
    label?: string;
    name?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'tel';

    value: string;
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
    disabled: boolean;
}

export const Input = ({
    name,
    placeholder,
    type = 'text',
    label,
    value,
    error,
    onChangeInput,
    disabled,
}: TInput) => {
    return (
        <label className="form__item form-item">
            {label && <span className="form-item__label">{label}</span>}

            <input
                value={value}
                onChange={onChangeInput}
                className={`form-item__input${error ? ' is-error' : ''}`}
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
            />
            {error && <span className="error-text">{error}</span>}
        </label>
    );
};
