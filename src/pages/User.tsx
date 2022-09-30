import React from 'react'
import image3 from '../assets/corte-e-gravacao-laser-mdf-e-acrilico-01.jpg'

type Props = {}

const User = (props: Props) => {
  return (
    <div>
      <img src={image3}></img>
      <p>exibir informações do usuário, endereço e tudo mais</p>
      <p>informações podem ser editadas</p>
    </div>
  )
}

export default User;
