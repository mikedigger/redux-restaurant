import SectionTitle from '../components/common/SectionTitle';
import ContactsSection from '../components/sections/ContactsSection';
import PromotionList from '../features/promotion/Promotion/PromotionList';

const PromotionPage = () => {
    return (
        <main>
            <section className='pt-[40px] pb-[50px]'>
                <div className="container">
                    <SectionTitle title='Акції' />
                    <PromotionList />
                </div>
            </section>
            <ContactsSection />
        </main>
    )
}

export default PromotionPage;