import React from 'react';

import spinerImg from '../../../assets/images/spinner.gif'

const Spinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-[5] flex items-center justify-center h-full bg-base-fill flex-col gap-[20px]">
            <div className="h-[100px] w-[100px]">
                <img src={spinerImg} alt="Spinner" />
            </div>
            <div className="text-white text-[18px] font-medium">Зачекайте будь ласка</div>
        </div>
    )
}

export default Spinner