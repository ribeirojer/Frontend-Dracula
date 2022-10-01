import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Produtos = (props: Props) => {

  const navigate = useNavigate()

  return (
    <div>
        <p>fundir essa página com a página de search</p>
        <button type="submit" onSubmit={()=>{}}>comprar</button>
    </div>
  )
}

export default Produtos;
