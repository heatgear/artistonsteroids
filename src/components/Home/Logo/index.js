import './index.scss'
import LogoS from '../../../assets/images/logo-a.png'

const Logo = () => {

    return(
        <div className='logo-container'>
            <img className='soli-logo' src={LogoS} width={900} alt="Yv"/>
        </div>
    )
}

export default Logo