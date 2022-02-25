import "../styles/footer.css"
import LogoWhite from "../assets/LogoWhite.svg"

function Footer(){
    return(
        <div className="footer">

            <img src={LogoWhite} alt="logo kasa blanc"></img>
            <h4 className='copyright'>© 2020 Kasa. All rights reserved</h4>

        </div>
    )
}

export default Footer;