import React from 'react';

const SectionTitle = ({ title, mod, noGreenStrip }) => {

  let classNames = `mb-[30px] font-bold text-white text-[20px] uppercase des:text-[32px] des:mb-[40px] ${mod}`;
  if (!noGreenStrip) classNames += ' pl-[10px] border-l-[4px] border-solid border-accent des:pl-[20px]';
  
  return (
    <h2 className={classNames}>{title}</h2>
  )
}

export default SectionTitle;