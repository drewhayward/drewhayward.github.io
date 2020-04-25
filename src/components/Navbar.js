import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Col, Row } from 'react-bootstrap'

const navbar = () =>
    (
    <Navbar bg="light" expand="lg">
        <Container fluid='sm'>
            <Navbar.Brand href="/">Drew Hayward</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/publications">Publications</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )

export default navbar