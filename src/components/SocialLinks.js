import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

const SocialLinks = () => (
    <Container >
        <Row style={{justifyContent:'center'}}>
            <Col xs="2">
                <SocialIcon network="github" target="_blank" url="https://github.com/drewhayward"/>
            </Col>
            <Col xs="2">
                <SocialIcon network="linkedin" target="_blank" url="https://www.linkedin.com/in/drew-hayward-b25886133/"/>
            </Col>
            <Col xs="2">
                <SocialIcon network="instagram" target="_blank" url="https://instagram.com/drewhayward"/>
            </Col>
            <Col xs="2">
                <SocialIcon network="email" target="_blank" url="mailto:d.andrew.hayward@gmail.com"/>
            </Col>
        </Row>
    </Container>
)

export default SocialLinks