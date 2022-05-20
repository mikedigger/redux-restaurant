const SetDeliveryAddress = ({mod}) => {
    return (
        <div className={`min-h-[52px] p-[14px] bg-base-fill rounded-[8px] flex align-center gap-[12px] ${mod}`}>
            <i className="icon-location text-[22px] text-white"></i>
            <input
                className="block w-full bg-transparent text-white placeholder:text-base-light"
                placeholder="Ведіть адресу доставки"
                type="text" />
            <button>
                <i className="icon-search ml-auto text-base-light text-[22px]"></i>
            </button>
        </div>
    )
}

export default SetDeliveryAddress;