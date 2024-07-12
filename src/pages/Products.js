import { useNavigate } from 'react-router-dom'
import { createContext, useEffect, useState } from "react"
import Item from "../components/Item"
import banner from '../assets/banner.png'
import products from '../products.json'

// 1 - Criar um contexto
export const Contexto = createContext();

export default function Products() {
  const navigate = useNavigate()
  const [productList, setProductList] = useState([])
  const [count, setCount] = useState(0); // quantidade de compras realizadas
  const [buttonActived, setButtonActived] = useState(false)

  useEffect(() => {
    setProductList(products.services)
  }, []);

  return (
    <div className="content-product">
      <header>
        <div className="banner">
          <img src={banner} alt="Banner" />
        </div>
        <div className="user">
          <span>Sobre a loja | PRODUTOS | Contato</span>
        </div>
      </header>

      <section className="main-products">
        {/* 2 - Prover o contexto */}
        {/* https://react.dev/reference/react/createContext#provider
        Context.Provider: é um componente que 'fornece/provém' os dados do contexto (declarados no value), bem como as suas mudanças, aos seus 'consumidores' 
        Todos os componentes dentro de Context.Provider poderão utilizar o contexto Context. 
        */}
        <Contexto.Provider value={setCount}>
          {productList.map((p, index) => (
            <Item key={index} product={p} buttonActived={buttonActived} setButtonActived={setButtonActived}/>
          ))}
        </Contexto.Provider>
      </section>
      <footer>      
        <button className='more-info' onClick={() => navigate('/')}>{"< Sobre"}</button>
        <button className='more-info' onClick={() => navigate('/contact')}>{"Contato >"}</button>
      </footer>
    </div>
  )
}
