import { useLocation, useNavigate } from "react-router-dom"
import SimpleBottomNavigation from "../components/Navigation";
import banner from '../assets/banner.png'
import products from '../products.json'

export default function ProductDetails() {
  let { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="content-product">
      <header>
        <div className="banner">
          <img src={banner} alt="Banner" />
        </div>
        <div className="user">
          <span>DETALHES DO PRODUTO</span>
        </div>
      </header>
      <div className="details-body">
        <img width={150} src={state.productInfo.image} alt='Imagem do produto'/>
      </div>
       <div className="text-intro">
        <h1>{state.productInfo.title}</h1>
        <p>{state.productInfo.detail}</p>
      </div>
      <footer>
        <button className="more-info" onClick={() => navigate('/products')}>{"< Voltar"}</button>
      </footer>
    </div>
  )
}
