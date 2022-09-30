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
    
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("https://github.com/ksdisch/portfolio/blob/[main|master]/db.json")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProjects(data)
            })
    }, [])
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

// npx json-server --watch data/db.json --port 8000
// endpoints
// http://localhost:8000 + endpoint
// /blogs   GET     Fetch all blogs
// /blogs/{id}  GET     Fetch a single blog
// /blogs   POST    Add a new blog
// /blogs/{id}  DELETE  Delete a blog

// React Router
// npm install react-router-dom@5
// 5 is the version