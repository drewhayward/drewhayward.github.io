import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Typist from 'react-typist'


const DialogHistory = (props) => {
    let history = props.history

    const dialogHistory = history.map((pair, index) => (
        <Row>
            <Col>
                <Row>
                    <Col md="6">
                        <p>{pair.question}</p>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col md="6">
                        {pair.answer}
                        {/* <Typist cursor={{ hideWhenDone: true }}>{pair.answer}</Typist> */}
                    </Col>
                </Row>
            </Col>
        </Row>

    ))

    return (
        <div>
            {dialogHistory}
        </div>
    )
}

export default DialogHistory