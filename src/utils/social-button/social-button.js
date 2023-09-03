import "./social-button.css"
import {Image} from 'react-bootstrap'

const SocialButton = (obj) => {
    return (
        <a id={obj.id} href={obj.href}>
            <div className={`image-container ${obj.className}`}>
                <Image className="image" src={obj.src} alt={obj.alt} />
            </div>
        </a>
    )
}

export default SocialButton;