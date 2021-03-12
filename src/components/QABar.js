import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class QABar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hintText: "Ask me anything..."
        }
    }

    render() {
        return (<div style={searchbarStyle}>
            <p>{this.state.hintText}</p>
        </div>)
    }
}

const searchbarStyle = {
    "border-color": "black"
}

export default QABar