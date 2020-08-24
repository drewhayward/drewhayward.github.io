import React from 'react'


import Container from 'react-bootstrap/Container'
import { Image, Row, Col } from 'react-bootstrap'

import SocialLinks from '../components/SocialLinks'
import profilePic from '../profile500.jpg'

const Home = () => (
    <Container>
        <Row className="justify-content-center align-items-center" fluid>
            <Col style={{'text-align':'center', 'padding':10}} md="auto" className="justify-items-center">
                    <Image src={profilePic} roundedCircle fluid/>
                    <h1>Drew Hayward</h1>
                    <p>PhD Student at Michigan State University</p>
                    <SocialLinks/>
                    <p>I'm interested in the intersection of learning, language understanding and reasoning. <br/>
                        Currently, I'm exploring the use of neuro-symbolic approaches in Visual Question Answering.</p>
            </Col>
        </Row>
    </Container>
)

export default Home