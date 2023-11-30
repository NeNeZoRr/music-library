import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavButtons = ({ handleHome }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleHome}>Home</button>
        </div>
    );
};

export default NavButtons;
