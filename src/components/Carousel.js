import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

function UncontrolledExample({carousel}) {
  return (
    <Carousel slide={false}>
        {carousel.map((item, index) => {
            return <Carousel.Item key={index}>
                <Image src={require("./images/".concat(item.link))} style={{height: "75vh", width: "auto"}}/>
                <Carousel.Caption>
                    <Alert>
                        <p>{item.text}</p>
                    </Alert>
                </Carousel.Caption>
            </Carousel.Item>
        })}
    </Carousel>
  );
}

export default UncontrolledExample;