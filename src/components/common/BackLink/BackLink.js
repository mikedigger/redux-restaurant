import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';


const BackLink = ({txt, mod}) => {
    return (
        <Link
            to='/'
            className={`flex items-center gap-[10px] px-[15px] mb-[15px] tab:p-0 ${mod}`}>
            <Button mod='w-[25px] h-[25px] !rounded-circle'>
                <i className="icon-arrow text-[16px] rotate-90 ml-[-3px]"></i>
            </Button>
            <span className='font-semibold text-[16px] text-white hover:underline flex-shrink-0'>{txt}</span>
        </Link>
    )
}

export default BackLink;