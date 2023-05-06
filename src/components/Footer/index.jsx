import Logo from '../../assets/images/logo-white.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'
import Twitter from '../../assets/images/twitter.png'
import './index.css'


const Footer = () => {
    return(
        <div className="footer">
            <div className="logo-area">
            <img src={Logo} style={{paddingBottom:'51px'}} />
            </div> 
            <div className="row">
                <div className="terms">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="icons">
                   <a href="https://www.facebook.com/"> <img src={Facebook} /></a>
                   <a href="https://twitter.com/"><img src={Twitter}/></a>
                   <a href="https://www.instagram.com/"><img src={Instagram}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer