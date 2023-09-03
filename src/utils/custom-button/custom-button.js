import './custom-button.css'

const CustomButton = (obj) => {
    return (
        <a href={obj.href}>
            <div className={`${obj.className} button-container`}>
                <div className='inner-button'>{obj.value}</div>
            </div>
        </a>
    )
}

export default CustomButton;
