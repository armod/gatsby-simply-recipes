import * as React from 'react'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
      <div>Hello world!</div>
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
