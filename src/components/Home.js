import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import { faFlaskVial, faScrewdriverWrench, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Transition, Summary, Projects} from './index';

function Home({projects}) {
return (<Container>
    <Container className="portfolio-home" style={{marginTop: "10vh"}}>
    <Row>
        <Col className="portfolio-header">
            <header style={{marginBottom: "2vh", textAlign: "center"}}>
                Welcome to Noah's Portfolio
            </header>
            <ul style={{listStyleType: "none"}}>
                <li><FontAwesomeIcon className="icon" size="l" icon={faFlaskVial}/> Data Scientist</li>
                <li><FontAwesomeIcon className="icon" size="l" icon={faScrewdriverWrench}/>  Solution Engineer</li>
                <li><FontAwesomeIcon className="icon" size="l" icon={faSeedling}/> Humanitarian</li>
            </ul>
        </Col>
        <Col className="portfolio-header">
            <Image src="https://file.rendit.io/n/g2aUEFs8524D6MVQB42Y.svg" className="w-min" style={{height: "40vh"}}/>
        </Col>
    </Row>
    </Container>
    <Transition figure={1}/>
    <Summary count={projects.length}/>
    <Transition figure={2}/>
    <Projects projects={projects}/>
</Container>
    );
}

export default Home;