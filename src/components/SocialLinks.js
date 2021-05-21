import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

const SocialLinks = () => (
    <Row className="justify-content-space-between">
        <Col xs="3"  className="text-center">
            <SocialIcon network="github" target="_blank" url="https://github.com/drewhayward" />
        </Col>
        <Col xs="3" className="text-center">
            <SocialIcon network="linkedin" target="_blank" url="https://www.linkedin.com/in/drew-hayward-b25886133/" />
        </Col>
        <Col xs="3" className="text-center">
            <SocialIcon network="twitter" target="_blank" url="https://twitter.com/thedrewhayward" />
        </Col>
        <Col xs="3" className="text-center">
            <SocialIcon network="email" target="_blank" url="mailto:d.andrew.hayward@gmail.com" />
        </Col>
    </Row>
)

export default SocialLinks