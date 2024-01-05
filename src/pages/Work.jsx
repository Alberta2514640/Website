import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Work = () => {
    return (
        <Container>
            <Row>
                <h1>Alberta 2514640 Inc.</h1>
            </Row>
            <Row>
                <Col>
                    <h2> Our Active Work (Coming Soon)</h2>
                    <ul>
                        <li>Consulting Available</li>
                        <li>Custom Hardware and Software Development</li>
                        <li>AVR, ARM Microcontrollers</li>
                        <li>Embedded Linux</li>
                        <li>VLSI</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Work;

