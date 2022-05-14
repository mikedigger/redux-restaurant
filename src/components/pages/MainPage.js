import React from 'react';

import Hero from '../Hero';
import ContactsSection from '../ContactsSection';
import CafeSection from '../CafeSection';
import DishListSection from '../DishListSection';


const MainPage = () => {
    return (
        <main>
            <Hero />
            <DishListSection
                title="Холодні страви"
                type='cold'/>
            <DishListSection
                title="Гарячі страви"
                type='hot'/>
            <DishListSection
                title="М'ясні страви"
                type='meat'/>
            <div className="relative tab:bottom-[-60px] z-[3] ">
                <CafeSection />
            </div>
            <ContactsSection />
        </main>
    )
}

export default MainPage;