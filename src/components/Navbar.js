import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

const navbar = () =>
    (
    <Navbar bg="light" expand="lg">
        <Container fluid='sm'>
            <Navbar.Brand  as={Link} to="/">Drew Hayward</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )

export default navbar
