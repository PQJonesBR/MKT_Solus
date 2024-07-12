import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"
import banner from '../assets/banner.png'
import whatsappimg from '../assets/whatsapp.png'
import linkedinimg from '../assets/linkedin.png'
import instagramimg from '../assets/instagram.png'
import phoneimg from '../assets/phone.png'

export default function Contact() {
    const navigate = useNavigate()

    return (
        <div className="content-product">
            <header>
                <div className="banner">
                    <img src={banner} alt="Banner" />
                </div>
                <div className="user">
                    <span>Sobre a loja | Produtos | CONTATO</span>
                </div>
            </header>
            <body>
                <div class="contact-body">
                    <div class="contact-icons">
                        <Link to="https://wa.me/559193544236"><img src={whatsappimg} alt="WhatsApp" class="contact-icon" /></Link>
                        <Link to="https://www.linkedin.com/company/solusit"><img src={linkedinimg} alt="LinkedIn" class="contact-icon" /></Link>
                        <Link to="https://www.instagram.com/solus.it/"><img src={instagramimg} alt="Instagram" class="contact-icon" /></Link>
                    </div>
                    <div class="phone-info">
                        <img src={phoneimg} alt="Telefone" class="phone-image" />
                        <span>+55 91 3241-5792</span>
                    </div>
 	                <div class="footer-right">Copyright since 2022-2024</div>
                </div>
            </body>
            
            <footer>
                <button className='more-info' onClick={() => navigate('/products')}>{"< Produtos"}</button>
                <button className='more-info' onClick={() => navigate('/')}>{"Sobre >"}</button>     
            </footer>
        </div >
    )
}
