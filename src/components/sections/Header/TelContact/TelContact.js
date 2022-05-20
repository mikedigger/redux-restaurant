import Button from '../../../common/Button';

function TelContact({mod}) {
    return (
        <a
            className={`gap-[10px] text-white ${mod}`}
            href="tel:+380322394187">
            <Button mod="w-[32px] h-[32px] !rounded-circle">
                <i className="icon-phone"></i>
            </Button>
            <div>
                <div className="text-[12px] text-base-light">Контакти:</div>
                <div className="text-[16px] font-bold">+38 (032) 239-41-87</div>
            </div>
        </a>
    )
}

export default TelContact;