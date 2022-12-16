import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const FetchData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
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
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name}:{item.age}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default FetchData
