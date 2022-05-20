import DishList from '../DishList';
import SectionTitle from '../../../components/common/SectionTitle'

const DishListSection = ({ title, data }) => {

    return (
        <section className='pt-[35px] pb-[50px] relative'>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-section-grad"></span>
            <div className="container">
                <SectionTitle title={title} />
            </div>
            <DishList
                data={data} />
        </section>
    )
}

export default DishListSection;