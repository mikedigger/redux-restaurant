const PromotionItem = ({img, title, text, expires}) => {
    return (
        <div className="rounded-[10px] overflow-hidden">
            <div className="overflow-hidden min-h-[140px] relative">
                <img
                    src={img}
                    alt={title}
                    className="object-cover h-full w-full" />
            </div>
            <div className="p-[15px] bg-base-fill">
                <h3 className="text-white font-bold text-[16px] mb-[5px] tab:text-[18px]">{title}</h3>
                <p className='mb-[10px] tab:[text-14px] tab:-[mb-15px]'>{text}</p>
                <span className="text-accent tab:[text-14px]">{expires}</span>
            </div>
        </div>
    )
}

export default PromotionItem