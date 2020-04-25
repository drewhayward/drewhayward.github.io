import React from 'react'


import Container from 'react-bootstrap/Container'
import { Image, Row, Col } from 'react-bootstrap'
import profilePic from '../profile500.jpg'
import Publication from '../components/Publication'

const Home = () => (
    <Container>
        <Row>
            <Col>
                <Image src={profilePic} roundedCircle fluid/>
            </Col>
        </Row>
        <Row>
            <h1>2020</h1>
        </Row>
    </Container>
)

export default Home