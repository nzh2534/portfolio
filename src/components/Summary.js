import { useRef, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import { useSpring, animated} from "react-spring";


function Number({n}) {
    const { number } = useSpring({
        from: { number: 0},
        number: n,
        delay: 200,
        config: {mass: 1, tensions: 20, friction: 150}
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

function Summary({count}) {
    const myRef = useRef();
    const [visible, setVisible] = useState();
    console.log(visible)
    useEffect(() => { 
        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])
return (<>
<Container className="portfolio-home" style={{marginTop: "10vh", display: "flex", flexDirection: "column", width: "50%"}}>
    <Container>
        <h4 style={{textAlign: "center"}}><b>As a Data Scientist, with full stack development skills, I've helped teams engineer innovative solutions from design through deployment.</b></h4>
    </Container>
</Container>
<Container className="portfolio-home" style={{marginTop: "5vh", textAlign: "center"}}>
    <h4 ref={myRef}>Check out my list of </h4>
    {visible ? <Alert style={{marginTop:"10px", marginRight: "1vw", marginLeft: "1vw", backgroundColor: "white", borderWidth: "3px"}} variant='primary'><Number n={count} /></Alert> : <></>}
    <h4> professional projects</h4>
</Container>
</>);
}

export default Summary;