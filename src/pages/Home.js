import React from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import { Image, Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

import SocialLinks from '../components/SocialLinks'
import QABar from '../components/QABar'
import profilePic from '../profile500.jpg'
import Typist from 'react-typist'
import DialogHistory from '../components/DialogHistory'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            answerText: "",
            showCursor: false,
            history: []
        }

        this.fetchQuestionAnswer = this.fetchQuestionAnswer.bind(this)
    }

    fetchQuestionAnswer(text) {
        axios.post("http://localhost:8000/question/", {
            'question': text
        }).then((resp) => {
            var answer = resp.data.answer
            answer = answer.charAt(0).toUpperCase() + answer.slice(1)
            this.setState({
                answerText: answer,
                history: [{ question: text, answer: answer }].concat(this.state.history)
            })
        }).catch((resp) => {
            console.log(resp)
            this.setState({
                answerText: "IT failed"
            })
        })
    }

    render() {
        return (
            <div>
                <Row className="justify-content-center align-items-center" fluid>
                    <Col style={{ 'textAlign': 'left', 'padding': 10, 'paddingTop': 30 }} md="auto" className="justify-items-center">
                        <Row className="justify-content-center align-items-center">
                            <Col md="4">
                                <Row className="justify-content-center">
                                    <Image src={profilePic} roundedCircle fluid />
                                </Row>
                            </Col>
                            <Col style={{ 'text-align': 'left' }} md="4">
                                <h1>Drew Hayward</h1>
                                <h5>I'm a software developer interested in language interfaces, ML Engineering, and building real-world systems.</h5>
                                <SocialLinks />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="justify-content-center" style={{ padding: 10 }}>
                    <Col md={8}>
                        <QABar onSubmit={this.fetchQuestionAnswer} />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={7}>
                        <DialogHistory history={this.state.history} />
                    </Col>
                </Row>

            </div >
        )
    }

}

export default Home