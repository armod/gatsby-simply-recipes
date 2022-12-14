import React from 'react'
import Layout from '../components/Layout'
import { page, text } from '../examples/about.module.css'
const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi
          vitae vel aperiam nihil totam placeat officia at in neque, impedit ea
          unde harum ullam distinctio libero ratione fugiat pariatur praesentium
          illo adipisci id, illum maxime atque! Id, necessitatibus quod?
        </p>
      </div>
    </Layout>
  )
}

export default about
