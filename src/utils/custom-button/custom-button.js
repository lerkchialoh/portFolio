import './custom-button.css'

const CustomButton = (obj) => {
    return (
            <div onClick={obj.onClickBtn} className={`${obj.className} button-container`}>
                <div className='inner-button'>{obj.value}</div>
            </div>
    )
}

export default CustomButton;
