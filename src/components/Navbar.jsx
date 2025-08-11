import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center bg-blue-600 text-white p-4 shadow-md'>
            <div className='text-2xl font-bold'>My Paste App</div>
            <div className='flex flex-row gap-8'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-yellow-300 border-b-2 border-yellow-300 font-bold"
                            : "hover:text-yellow-300"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/pastes"
                    className={({ isActive }) =>
                        isActive
                            ? "text-yellow-300 border-b-2 border-yellow-300 font-bold"
                            : "hover:text-yellow-300"
                    }
                >
                    Pastes
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;