import { Tab, TabPane } from '../Tab';
import { FormItemContainer, FormItem } from '../OrderFormParts';
import DropdownButton from './DropdownButton';

const DeliveryForm = ({ data }) => {

    const renderTabs = () => {
        return (data.map((item, idx) => {

            const { title, inputs } = item;

            if (title === 'Самовивіз') {
                return (
                    <TabPane key={idx} tabTitle={title}>
                        <div className="flex-grow">
                            <div className="mb-[15px]">Виберіть ресторан</div>
                            <DropdownButton data={inputs} />
                        </div >
                    </TabPane>
                )
            }

            return (
                <TabPane tabTitle={title} key={idx}>
                    {
                        inputs.map((item, idx) => <FormItem key={idx} {...item} />)
                    }
                </TabPane>
            )
        }))
    }


    return (
        <FormItemContainer title="2. Доставка">
            <Tab>
                {renderTabs()}
            </Tab>
        </FormItemContainer>
    )
}

export default DeliveryForm