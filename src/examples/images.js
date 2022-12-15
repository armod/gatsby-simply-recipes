import React from 'react'
import styled from 'styled-components'
import big from '../assets/images/big.jpg'
import { StaticImage } from 'gatsby-plugin-image'
const Images = () => {
  return (
    <Wrapper>
      <StaticImage src={big} alt='food' />
      <h2>Images</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images
