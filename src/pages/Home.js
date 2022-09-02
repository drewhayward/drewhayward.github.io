import React from 'react'


import Container from 'react-bootstrap/Container'
import { Image, Row, Col } from 'react-bootstrap'

import SocialLinks from '../components/SocialLinks'
import profilePic from '../profile500.jpg'

const Home = () => (
    <Container>
        <Row className="justify-content-center align-items-center" fluid>
            <Col style={{ 'text-align': 'center', 'padding': 10 }} md="auto" className="justify-items-center">
                <Image src={profilePic} roundedCircle fluid />
                <h1>Drew Hayward</h1>
                <p>Software Engineer</p>
                <SocialLinks />
            </Col>
        </Row>
    </Container>
)

export default Home