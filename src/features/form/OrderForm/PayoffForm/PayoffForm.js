import { Tab, TabPane } from '../Tab';

import { FormItemContainer, FormItem } from '../OrderFormParts';

const PayoffForm = ({ data }) => {

    const renderTabs = () => {
        return (
            data.map((item, idx) => {

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

    return (
        <FormItemContainer title="3. Оплата">
            <Tab>
                {renderTabs()}
            </Tab>
        </FormItemContainer>
    )
}

export default PayoffForm