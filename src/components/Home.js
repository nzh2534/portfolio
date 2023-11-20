import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import { faFlaskVial, faScrewdriverWrench, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
return (
<Container className="portfolio-home" style={{marginTop: "10vh"}}>
    <Container className="portfolio-header">
        <header style={{marginBottom: "2vh"}}>
            Welcome to Noah's Portfolio
        </header>
        <ul style={{listStyleType: "none"}}>
            <li><FontAwesomeIcon className="icon" size="l" icon={faFlaskVial}/> Data Scientist</li>
            <li><FontAwesomeIcon className="icon" size="l" icon={faScrewdriverWrench}/>  Solution Engineer</li>
            <li><FontAwesomeIcon className="icon" size="l" icon={faSeedling}/> Humanitarian</li>
        </ul>
    </Container>
    <Container className="portfolio-header">
        <Image src="https://file.rendit.io/n/g2aUEFs8524D6MVQB42Y.svg" className="w-min" style={{height: "40vh"}}/>
    </Container>
</Container>
    );
}

export default Home;