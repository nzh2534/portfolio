import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Transition({figure}) {
return (<>{ (figure === 1) ? 
    <Container className='transition'>
        <Image src="https://file.rendit.io/n/BCkFHW47H4OLxGe6jVNe.svg" style={{width: "25vw"}}/>
    </Container>
    : (figure === 2) ?
    <Container className='transition2'>
        <Image src="https://file.rendit.io/n/FhIowyoEP94I1iYXRmaI.svg" style={{width: "15vw", marginRight: "5vw"}}/>
    </Container>
    :
    <></>
    }</>);
}

export default Transition;