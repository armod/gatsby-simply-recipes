import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import ReciepiesList from '../examples/ReciepiesList'
export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { fetured: { eq: true } }
    ) {
      nodes {
        id
        prepTime
        cookTime
      }
    }
  }
`

const About = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eum quasi corporis similique accusantium, repellendus
              necessitatibus provident beatae quos doloribus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ipsam fugiat perspiciatis ipsa dolore non odio iste nam expedita
              aliquid.
            </p>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg'
            alt='Person Pouring Salt in Blow'
            className='about-img'
            placeholder='blurred'
          />
        </section>
        <section className='featured-recipes'>
          <h5>Look at this Awesomesouce!</h5>
          <ReciepiesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export default About
