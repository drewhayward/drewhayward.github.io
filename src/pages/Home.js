import React from 'react'


import Container from 'react-bootstrap/Container'
import { Image, Row, Col } from 'react-bootstrap'
import profilePic from '../profile500.jpg'
import Publication from '../components/Publication'

const Home = () => (
    <Container>
        <Row className="justify-content-center align-items-center" fluid>
            <Col style={{'text-align':'center', 'padding':10}} md="auto" className="justify-items-center">
                    <Image src={profilePic} roundedCircle fluid/>
                    <h1>Drew Hayward</h1>
                    <p>PhD Student at Michigan State University</p>
            </Col>
        </Row>
    </Container>
)

export default Home