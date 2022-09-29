import Intro from "./Intro";
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Headline from "./Headline";


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
            </div>
        </Container>
    );
}
 
export default Home;