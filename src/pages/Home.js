import React from 'react'


import Container from 'react-bootstrap/Container'
import { Image, Row, Col } from 'react-bootstrap'

import SocialLinks from '../components/SocialLinks'
import QABar from '../components/QABar'
import profilePic from '../profile500.jpg'

const Home = () => (
    <Container>
        <Row className="justify-content-center align-items-center" fluid>
            <Col style={{ 'text-align': 'left', 'padding': 10 }} md="auto" className="justify-items-center">
                <Row className="justify-content-left align-items-center">
                    <Col md="4">
                        <Row className="justify-content-center">
                            <Image src={profilePic} roundedCircle fluid />
                        </Row>
                    </Col>
                    <Col style={{ 'text-align': 'left' }} md="8">
                        <h1>Drew Hayward</h1>
                        <SocialLinks />
                        <h3>I'm a software developer interested in language interfaces, ML Engineering, and building systems.</h3>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <QABar />
        </Row>
    </Container>
)

export default Home