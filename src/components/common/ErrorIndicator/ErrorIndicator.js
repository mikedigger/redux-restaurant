import ErrorImg from '../../../assets/images/error.png';

const ErrorIndicator = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col">
            <div className="flex flex-col gap-[15px] items-center">
                <div className='overflow-hidden'>
                    <img
                        className='block object-contain w-[150px] h-[150px] des:w-[200px] des:h-[200px]'
                        src={ErrorImg}
                        alt="Виникла помилка" />
                </div>
            <div className="text-white text-[18px] des:text-[22px] font-medium text-center leading-tight">Сталася помилка, <br/> вибачте за незручності</div>
            </div>
        </div>
    )
}

export default ErrorIndicator