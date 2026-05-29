import React from 'react';

const Button = ({ children, color, large, icon, onClick, ...rest}) => {
    // On définit le style de manière conditionnelle
    const buttonStyle = {
        backgroundColor: color ? color : 'initial',
        // Si large est true, on applique un grand padding, sinon on met un padding par défaut (ex: 8px 16px)
        padding: large ? '16px 32px' : '8px 16px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px'
    };
    return (
        <button style={buttonStyle} onClick={onClick} {...rest}>
            {/* children représente tout ce qui est écrit entre <Button> et </Button> */}
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;