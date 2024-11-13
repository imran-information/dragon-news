import React from 'react';
import { Link } from 'react-router-dom';
import userLogo from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <Link to='/' className="font-bold text-2xl">Dragon News</Link >
            <div className="space-x-10 text-xl">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex items-center gap-3">
                <img src={userLogo} alt="" />
                <button className='btn btn-neutral text-lg rounded-none'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;