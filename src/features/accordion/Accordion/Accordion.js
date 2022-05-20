import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAccordion, openAccordionItem } from '../accordionSlice';
import Spinner from '../../../components/common/Spinner';

const Accordion = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.accordion)

    useEffect(() => {
        dispatch(fetchAccordion())
    }, [dispatch])

    if (data.length === 0) return <Spinner />;

    const renderItems = () => {
        return (
            data.map(({ title, content, active, id }) => {

                const contentRegular = 'tab:text-[16px] bg-base-fill px-[20px] top-full left-0 w-full rounded-b-[10px] duration-300 max-h-0 overflow-hidden '
                let contentHidden = contentRegular + 'rounded-b-[10px] h-0 p-0';
                let contentActive = contentRegular + 'py-[25px] max-h-full';

                let titleClasses = 'cursor-pointer rounded-t-[10px] bg-accent pl-[20px] py-[16px] font-medium relative text-[14px] tab:text-[18px] duration-100 ';

                let iconRegularClasses = 'icon-arrow absolute right-[15px] text-[25px] top-[50%] translate-y-[-50%] duration-300 ';
                let iconActiveClasses = iconRegularClasses + 'rotate-[-180deg]';

                return (
                    <div
                        key={id}
                        className="relative overflow-hidden">
                        <div
                            onClick={() => dispatch(openAccordionItem(id))}
                            className={active ? titleClasses += 'rounded-b-0' : titleClasses += 'rounded-b-[10px]'}>
                            {title}
                            <i className={active ? iconActiveClasses : iconRegularClasses}></i>
                        </div>
                        <div className={active ? contentActive : contentHidden}>{content}</div>
                    </div>
                )
            })
        )
    }

    return (
        <div className='flex flex-col gap-[10px] text-white'>{renderItems()}</div>
    )
}


export default Accordion;