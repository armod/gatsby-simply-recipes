import React from 'react'
import { graphql } from 'gatsby'

const Testing = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Testing</h2>
    </div>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`
export default Testing
