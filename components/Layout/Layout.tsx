import React from 'react'
import Navbar from '../Navbar/Navbar'
const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children} - Pagina
      <footer className="container">Footer</footer>
      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
