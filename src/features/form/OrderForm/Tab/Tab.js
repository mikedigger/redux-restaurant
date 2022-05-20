
import { useState, useEffect, Children } from 'react';


const Tab = ({ children, active = 0 }) => {

    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabsData] = useState([]);


    useEffect(() => {

        const data = [];

        Children.forEach(children, tab => {
            const { props: { tabTitle, children } } = tab;
            data.push({ tabTitle, children });
        })

        setTabsData(data);

    }, [children]);

    const renderItems = () => {
        return (
            tabsData.map(({ tabTitle }, idx, arr) => {
                let tabItemClass = 'px-[40px] py-[20px] flex justify-center text-[12px] hover:bg-accent duration-300 cursor-pointer ';

                tabItemClass += arr.length === 2 ? ' w-1/2 basis-1/2 ' : ' w-1/3 basis-1/3 ';

                if (idx === activeTab) {
                    tabItemClass = tabItemClass + ' bg-accent';
                } else {
                    tabItemClass += ' bg-transparent';
                }

                return (
                    <div
                        onClick={() => setActiveTab(idx)}
                        key={idx}
                        className={tabItemClass}>
                        {tabTitle}
                    </div>
                )
            })
        )
    }


    return (
        <div className="flex flex-col gap-[15px] flex-nowrap">
            <div className="rounded-[10px] border-[1px] border-solid border-accent flex overflow-hidden tab:w-1/3">
                { renderItems() }
            </div>

            <div className="flex flex-col gap-[15px] tab:flex-row flex-nowrap">
                {tabsData[activeTab] && tabsData[activeTab].children}
            </div>
        </div>
    )
}

const TabPane = ({ children }) => {
    return { children }
}

export {
    Tab,
    TabPane
};