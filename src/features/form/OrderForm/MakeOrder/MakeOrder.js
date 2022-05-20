import { Link } from 'react-router-dom';

import Button from '../../../../components/common/Button';
import { CheckBox } from '../OrderFormParts';
import { routePath } from '../../../../routing/routePath';

const MakeOrder = () => {
    return (
        <div className='py-[30px] px-[25px] bg-base-fill rounded-[10px] text-white flex flex-col items-center gap-[12px] tab:flex-row tab:justify-between'>
            <Button mod='min-w-[210px] w-fit min-h-[51px] !font-bold !text-[14px] tab:order-1'>
                Оформити замовлення
            </Button>
            <div className="max-w-[260px] tab:max-w-none tab:order-none">
                <CheckBox
                    inputName='permission'
                    containerMod='!w-[18px] !h-[18px]'
                    mod='rounded-[3px] bg-white outline-0 !w-[18px] !h-[18px] after:block peer-checked:!bg-white after:hidden peer-checked:after:block after:w-[9px] after:h-[14px] after:border-solid after:border-accent after:border-r-[4px] after:border-b-[4px] after:rotate-45 after:ml-[1px] after:mt-[-3px] flex items-center justify-center mr-[10px]'>
                    Я згоден на обробку моїх персональних данних згідно з
                    <span className='text-accent underline pl-[4px]'>
                        <Link to={routePath.conditions}>Умовами</Link>
                    </span>
                </CheckBox>
            </div>
        </div>
    )
}

export default MakeOrder