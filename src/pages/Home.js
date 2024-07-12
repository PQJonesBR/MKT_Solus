import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.png'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="content-product">
            <header>
                <div className="banner">
                    <img src={banner} alt="Banner" />
                </div>
                <div className="user">
                    <span>SOBRE A LOJA | Produtos | Contato</span>
                </div>
            </header>
            <body>
                <div className="text-intro">
                    <h1>Quem Somos</h1>
                    <p>
                        A Solus IT é uma empresa especializada em soluções tecnológicas para evolução do seu negócio através de consultoria personalizada. Oferecemos para sua empresa um diagnóstico completo e o planejamento integrado com a T.I através da contratação do nosso plano de horas de consultoria, que possibilita otimização do tempo e a demanda de cada cliente.
                    </p>
                    <p>
                        Aproveite nosso market place!
                    </p>
                </div>
            </body>
            
            <footer>
                <button className='more-info' onClick={() => navigate('/contact')}>{"< Contato"}</button>
                <button className='more-info' onClick={() => navigate('/products')}>{"Produtos >"}</button>
            </footer>
        </div >
    )
}
