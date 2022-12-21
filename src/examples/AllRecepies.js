import React from 'react'
import TagsList from './TagsList'
import ReciepiesList from './ReciepiesList'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
      }
    }
  }
`

const AllRecepies = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  // console.log(data)
  return (
    <section className='recipes-container'>
      <TagsList recipes={recipes} />
      <ReciepiesList recipes={recipes} />
    </section>
  )
}

export default AllRecepies
