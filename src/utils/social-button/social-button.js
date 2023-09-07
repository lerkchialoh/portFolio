import "./social-button.css"
import {Image} from 'react-bootstrap'

const SocialButton = (obj) => {
    return (
        <a id={obj.id} href={obj.href} target="_blank" rel="noreferrer">
            <div className={`image-container ${obj.className}`} style={{border: `2px ${obj.borderColor} solid`, background: `${obj.backgroundColor}` }}>
                <Image className="image" src={obj.src} alt={obj.alt} />
            </div>
        </a>
    )
}

export default SocialButton;