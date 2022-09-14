import React, { useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
    background-color: var(--cor-B);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
type Props = {}

const Corte = (props: Props) => {
  const [text, setText] = useState('Palavra')
  return (
    <Main>
      <h1>{text}</h1>
      <input onChange={(e)=>{setText(e.target.value)}} type="text" placeholder={text} />
      <p>Digite o palavra desejada</p>
    </Main>
  )
}

export default Corte;