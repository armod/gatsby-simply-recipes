import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Link to='/about'>about</Link>
      </div>
      <div>
        <Link to='/company/history'>history</Link>
      </div>
      <a href='/about'>reg link</a>
    </div>
  )
}
