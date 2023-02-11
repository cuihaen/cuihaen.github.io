import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 50px;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  background-color:#efefef;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 30px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      © 2023 CUI 👋🏻, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer