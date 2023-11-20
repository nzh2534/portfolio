import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlippableCard from './flippable-card';

function Projects({projects}) {
return (<Container fluid style={{marginBottom: "2vh"}}>
    <Row style={{marginTop: "2vh"}} className='g-0'>
      {projects.map((x) => 
        <Col lg={3}><FlippableCard front={x.name} back={x.brief} symbol={x.symbol} link={x.link}/></Col>
      )}
    </Row>
  </Container>);
}

export default Projects;