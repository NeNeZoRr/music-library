import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavButtons = ({ handleBack, handleHome }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (handleBack) {
            handleBack();
        }
        navigate(-1);
    };

    return (
        <div>
            <button onClick={handleBackClick}>Back</button>
            <button onClick={handleHome}>Home</button>
        </div>
        
    );
};

export default NavButtons;
