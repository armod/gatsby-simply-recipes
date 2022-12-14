import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { page, text } from '../examples/home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>home page</h1>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          provident quam, temporibus autem blanditiis ipsam harum ipsum hic!
          Dolores voluptatum veritatis earum saepe, accusamus reiciendis dolorum
          illo nemo perspiciatis repellat minima quasi sunt illum hic nostrum
          quia, numquam dolorem quibusdam!
        </p>
      </div>
    </Layout>
  )
}
