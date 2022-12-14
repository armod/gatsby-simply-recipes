import React from 'react'
import Layout from '../components/Layout'
import { page, text } from '../examples/about.module.css'
import styled from 'styled-components'
const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi
          vitae vel aperiam nihil totam placeat officia at in neque, impedit ea
          unde harum ullam distinctio libero ratione fugiat pariatur praesentium
          illo adipisci id, illum maxime atque! Id, necessitatibus quod?
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
