import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
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
      </main>
    </Layout>
  )
}

export default About
