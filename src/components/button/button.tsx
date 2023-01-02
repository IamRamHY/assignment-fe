import './button.scss';

interface iProps {
    className?: string;
    btnName: string;
    isLoading?: boolean;
    onClick: ()=> void
}

function Button(props: iProps): JSX.Element {
    const { className, btnName, isLoading, onClick } = props
    return (
        <button className={`button ${className}`} type="button" onClick={onClick}>{isLoading ? 'Loading...' : btnName}</button>
    )
}

export default Button