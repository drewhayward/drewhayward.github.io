import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Publications from './pages/Publications'

export default function App() {
  return (
    <Router basename='/'>
      <div>
        <Navbar />
        <Container fluid='md'>
          <Switch>
            <Route path="/publications">
              <Publications />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer/>
      </div>
    </Router>
  );
}