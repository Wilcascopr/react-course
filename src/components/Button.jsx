const Button = ({ onClick, children, className }) => {

    return (
        <button 
            onClick={onClick} 
            className={`bg-primary hover:bg-primary-light active:bg-primary-light-dark
                active:animate-pulse max-w-fit
             text-white font-bold py-1 px-4 rounded ${className}`}
        >
            {children}
        </button>
    )
}

export default Button