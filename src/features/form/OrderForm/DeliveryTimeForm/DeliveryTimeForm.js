import { FormItemContainer, FormItem, CheckBox } from '../OrderFormParts';
import { Tab, TabPane } from '../Tab';

const DeliveryTimeForm = ({ data }) => {

    const { tabs, checkboxes } = data;

    const renderTabs = () => {
        return (
            tabs.map((item, idx) => {

                const { title, inputs } = item;

                return (
                    <TabPane tabTitle={title} key={idx}>
                        {
                            inputs.map((item, idx) => <FormItem key={idx} {...item} />)
                        }
                    </TabPane>
                )
            })
        )
    }

    const renderCheckboxes = () => {
        return (
            checkboxes.checkboxItems.map(({ id, placeholder }) => {
                return (
                    <CheckBox
                        mod='peer-checked:!bg-accent'
                        key={id}>
                        {placeholder}
                    </CheckBox>

                )
            })
        )
    }

    return (
        <FormItemContainer title="4. Час доставки">
            <Tab>
                {renderTabs()}
            </Tab>

            <div className='mt-[15px]'>
                <div className="font-bold text-[16px] mb-[20px]">{checkboxes.title}</div>
                <div className="flex gap-[20px] pl-[3px]">
                    {renderCheckboxes()}
                </div>
            </div>
        </FormItemContainer>
    )
}

export default DeliveryTimeForm