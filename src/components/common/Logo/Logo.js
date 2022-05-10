import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';

const Logo = ({mod}) => {
    return (
        <Link
            className={`block w-[100px] h-[25px] z-[4] overflow-hidden ${mod}`}
            to='/'>
            <img
                className='block w-full h-full object-contain'
                src={logo}
                alt="logo" />
        </Link>
    )
}

export default Logo;