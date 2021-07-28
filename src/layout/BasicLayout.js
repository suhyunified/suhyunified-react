import React from 'react'
import styled from 'styled-components'

import Input from 'components/Input/Input'
import CounterContainer from 'containers/CounterContainer'

const BasicLayoutBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  min-width: 700px;
  box-sizing: border-box;
`

function BasicLayout() {
  return(
    <BasicLayoutBlock>
      <Input></Input>
      <CounterContainer></CounterContainer>
    </BasicLayoutBlock>
  )
}

export default BasicLayout