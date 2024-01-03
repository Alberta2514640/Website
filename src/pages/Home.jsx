import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/logo.png';

const Home = () => {
    return (
        <Container>
            <Row>
            <h1>Alberta 2514640 Inc.</h1>

            </Row>
            <Row>
                <Col>
                    <img src={logo} alt="logo" className="fade-out-image" />
                </Col>
                <Col>
                    <h1> Coming Soon</h1>
        
                    <p>
                    We are currently working on this website. <br />
                    Please come back later.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

{/* <div>


</div> */}