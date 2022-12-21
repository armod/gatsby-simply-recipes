import React from 'react'
import Layout from '../components/Layout'
import AllRecepies from '../examples/AllRecepies'

const Recipes = () => {
  return (
    <Layout>
      <main className='page'>
        <AllRecepies />
      </main>
    </Layout>
  )
}

export default Recipes
