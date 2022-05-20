import { useSelector } from 'react-redux';

import Button from '../../../common/Button';

const HeaderCart = () => {

    const { cart } = useSelector(state => state.cards)

    return (
        <Button
            mod='m-w-[52px] flex flex-col items-center group tab:m-w-[150px] tab:h-[52px] tab:flex-row'>
            <>
                <i className="icon-cart text-[24px] tab:hidden"></i>
                <p className=" my-[2px] py-[2px] border-t border-solid border-gray-100 tab:inline-flex tab:align-center tab:height-full tab:px-[20px] tab:capitalize tab:border-t-0 tab:border-r group-hover:border-accent tab:font-semibold">
                    кошик</p>
                <div className="hidden tab:ml-[10px] tab:rounded-circle tab:flex tab:justify-center tab:items-center tab:w-[24px] tab:bg-white tab:text-black tab:h-[24px] tab:leading-none tab:font-semibold tab:border tab:boder-solid tab:border-transparent group-hover:border-accent">{cart.length}</div>
            </>
        </Button>
    )
}

export default HeaderCart;