import classNames from 'classnames'

const SectionTitle = ({ title, mod, noGreenStrip }) => {

  const clazz = classNames(
    `mb-[30px] font-bold text-white text-[20px] uppercase des:text-[32px] des:mb-[40px] ${mod}`,
    {'pl-[10px] border-l-[4px] border-solid border-accent des:pl-[20px]': !noGreenStrip}
  )
  
  return <h2 className={clazz}>{title}</h2>
}

export default SectionTitle;