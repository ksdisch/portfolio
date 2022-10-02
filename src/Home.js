import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Intro from "./Intro";
import Headline from "./Headline";
import ProjectList from "./ProjectList";
import BrandStatement from "./BrandStatement";
import Education from "./Education";
import CallToAction from './CallToAction';
import ContactInfo from './ContactInfo';



const Home = () => {
    
    return (
        <Container fluid="md">
            <div className="home text-center">
                <Row>
                    { <Intro />}
                </Row>
                <Row>
                    { <Headline /> }
                </Row>
                <Row>
                    { <ProjectList />}
                </Row>
                <Row>
                    { <BrandStatement />}
                </Row>
                <Row>
                    { <Education />}
                </Row>
                <Row>
                    { <CallToAction />}
                </Row>
                <Row>
                    { <ContactInfo />}
                </Row>
                <p className='copyright text-left'>Kyle Disch © 2022</p>
            </div>
        </Container>
    );
}
 
export default Home;
