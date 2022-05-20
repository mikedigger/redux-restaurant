import BackLink from '../components/common/BackLink';
import SectionTitle from '../components/common/SectionTitle';
import OrderForm from '../features/form/OrderForm';

const OrderindPage = () => {
    return (
        <section className="pt-[50px] pb-[90px]">
            <div className="container !max-w-[1040px] mx-auto ">
                <BackLink txt='до кошика'/>
                <SectionTitle 
                    title='Оформлення замовлення'/>
                <OrderForm />
            </div>
        </section>
    )
}

export default OrderindPage