import React from 'react';
import logo from "../../images/fitnessLogo.png";

const Header = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img className='w-16' src={logo} alt="fitness logo" />
                <h1 className='text-3xl font-semibold text-orange-800 ml-4'>Fitness Care</h1>
            </div>
        </div>
    );
};

export default Header;