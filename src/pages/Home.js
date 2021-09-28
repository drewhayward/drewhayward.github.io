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
                <p>Master's Student at Michigan State University</p>
                <SocialLinks />
                <p>Hi! I'm a masters student with training in Natural Language Processing and Machine Learning.<br />
                Currently, I'm looking for positions where I can leverage my experience in an engineering role and grow my engineering skills.<br />
                If you'd like to chat feel free to send me an email.
                </p>
            </Col>
        </Row>
    </Container>
)

export default Home