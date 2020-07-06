import React from 'react'
import Link from 'next/link'

const Navbar = () => (
    <nav>
        
            <ul>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/About">
                <a>About</a>
            </Link>
            <Link href="/Submit">
                <a>Submit Aria</a>
            </Link>
            </ul>
        
        
        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
    </nav>
)

export default Navbar