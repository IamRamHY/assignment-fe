import './input.scss';

interface iProps {
    className?: string;
    name: string;
    placeholder: string;
    value: string;
    type?: 'text' | 'password'
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

function Input(props: iProps): JSX.Element {
    const { className, name, placeholder, value, type='text', onChange } = props
    return (
        <input className={`inputField ${className}`} 
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange} 
        />
    )
}

export default Input