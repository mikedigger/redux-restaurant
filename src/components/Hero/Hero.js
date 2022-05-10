import React from 'react';

const Hero = () => {
  return (
    <section className={`pt-[90px] pb-[80px] bg-cover bg-no-repeat bg-center bg-hero tab:pt-[80px] tab:pb-[120px] tab:bg-hero-tab des:pt-[120px] des:pb-[170px]`}>
      <div className="container">
        <div className="font-deco text-white text-center m-w-[670px] my-0 mx-auto w-fit des:m-0">
          <h1 className="rotate-[-8deg] text-[35px] mx-auto mb-[30px] relative after:content-['Доставка_найсмачніших_страв_за_60_хвилин'] after:whitespace-pre-line after:text-center after:absolute after:top-[5px] after:left-[-10px] after:z-[-1] after:opacity-25 after:[-webkit-text-fill-color: transparent] after:[-webkit-text-stroke-width: 1px] after:[-webkit-text-stroke-color:#fff] des:text-[67px] ">
            Доставка найсмачніших <br /> страв за 60 хвилин
          </h1>
          <div className="skew-x-[-16deg] rotate-[-8deg]">
            <div className="max-w-[230px] text-[25px] px-[30px] py-[5px] bg-accent relative my-0 mx-auto before:z-[-1] before:absolute before:left-[-10px] before:top-[10px] before:w-full before:h-full before:border before:border-solid before:border-white des:[text-67px]">
              <span className='inline-block skew-x-[16deg]'>Спробуєте?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero