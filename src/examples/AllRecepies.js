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
    <div>
      <h4>all recepies</h4>
      <TagsList recipes={recipes} />
      <ReciepiesList />
    </div>
  )
}

export default AllRecepies
