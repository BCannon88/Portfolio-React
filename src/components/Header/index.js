import React from 'react';
import Jumbotron from "../../assets/cover/Ref6f8ac3c1d9038cad7f072261ffc841.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from '../Navigation';


function Header() {
    return (
        <section className="my-5">
            <Container fluid>
                <Row>
                    <h1 id="Header">Baron Cannon Portfolio</h1>
                    <Navigation></Navigation>
                    <img style={{ height: '20%', width: '100%' }} src={Jumbotron} alt="" />
                </Row>
            </Container>

        </section>
    );
}

export default Header;