import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  query FirstQuery {
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

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  console.log(useStaticQuery(getData))
  return (
    <div>
      {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
      <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData
