const Map = () => {
    return (
        <div className="after:pointer-events-none after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000080] after:z-[2]">
            <iframe
                className='absolute top-0 left-0 w-full h-full z-1'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1188684797635!2d24.019985115709368!3d49.840223979395766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add717532da69%3A0xf0cb97b8441ff1fe!2z0LLRg9C70LjRhtGPINCj0L3RltCy0LXRgNGB0LjRgtC10YLRgdGM0LrQsCwgMSwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1648649557046!5m2!1suk!2sua"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Map