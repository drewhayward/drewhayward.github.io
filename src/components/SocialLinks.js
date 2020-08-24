import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

const SocialLinks = () => (
    <Container >
        <Row style={{justifyContent:'center'}}>
            <Col xs="2">
                <SocialIcon network="twitter" target="_blank" url="https://twitter.com/thedrewhayward"/>
            </Col>
            <Col xs="2">
                <SocialIcon network="github" target="_blank" url="https://github.com/drewhayward"/>
            </Col>
        </Row>
    </Container>
)

export default SocialLinks