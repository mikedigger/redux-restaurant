import { FormItemContainer, FormItem } from '../OrderFormParts';

const ContactForm = ({data}) => {

    const renderItems = () => data.map(item => <FormItem key={item.id} {...item} />)
    return (
        <FormItemContainer title='1. Контактна інформація'>
            <div className="flex flex-col gap-[15px] tab:flex-row">
                { renderItems() }
            </div>
        </FormItemContainer>
    )
}

export default ContactForm