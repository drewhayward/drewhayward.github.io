import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {

    return (
        <Navbar bg="light" fixed="bottom">
            <Container fluid="md">
                <p>Found a bug the website? <a href="fake.com">Report it!</a></p>
            </Container>
        </Navbar>
    )
}

export default Footer