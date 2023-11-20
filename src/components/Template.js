import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import UncontrolledExample from './Carousel';

function Template({projects}) {
    const {id} = useParams();
    return (
        <Container className="portfolio-home" style={{marginTop: "3vh"}}>
        <Row md={1}>
            <Col className="portfolio-header">
                <header style={{marginBottom: "2vh", textAlign: "center"}}>
                    {projects[id].name}
                </header>
            </Col>
            <Col className="carousel">
                <UncontrolledExample carousel={projects[id].carousel}/>
            </Col>
        </Row>
        </Container>
    );
    }

export default Template;