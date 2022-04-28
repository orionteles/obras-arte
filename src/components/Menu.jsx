import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiObras from '../services/apiObras'

const Menu = () => {

  const [tipos, setTipos] = useState([])

  useEffect(() => {

    apiObras.get('artwork-types').then(resultado => {
      setTipos(resultado.data.data)
    })

  }, [])
  console.log(tipos);

  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/obras">Obras</Link>
            <NavDropdown title="Tipos de Obra" className="show" id="basic-nav-dropdown">
              {tipos.map(item => (
                <Link key={item.id} className="dropdown-item" to="/filmes/populares">
                  {item.title}
                </Link>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu