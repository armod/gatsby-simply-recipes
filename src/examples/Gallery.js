import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {/* <h2>simple image gallery</h2> */}
      {nodes.map((image, index) => {
        const { name } = image
        return (
          <article key={index}>
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Gallery
