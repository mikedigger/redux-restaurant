import Hero from '../components/sections/Hero';
import ContactsSection from '../components/sections/ContactsSection';
import CafeSection from '../components/sections/CafeSection';
import Cards from '../features/cards/Cards';


const MainPage = () => {
    return (
        <main>
            <Hero />
            <Cards />
            <div className="relative tab:bottom-[-60px] z-[3] ">
                <CafeSection />
            </div>
            <ContactsSection />
        </main>
    )
}

export default MainPage;