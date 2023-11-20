import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CollapsibleNavbar() {

  return (
    <Navbar collapseOnSelect bg="white" variant="light" style={{ marginTop: "4vh", width: '100%'}}>
      <Container className='m-auto' style={{width: '100%'}}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/portfolio/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Image src="https://file.rendit.io/n/KrpDCKYOjCA8tQ7NcSlN.svg" style={{maxHeight: "5vh"}}/>
          </Nav>
          <Nav>
            <a href="https://github.com/nzh2534" target="_blank" className='socials'>
              <FontAwesomeIcon className="icon" size="2xl" icon={faGithub} color="black" style={{marginRight: "2vw"}}/>
            </a>
            <a href="https://www.linkedin.com/in/noah-haglund-5b9704198/" target="_blank" className='socials'>
              <FontAwesomeIcon className="icon" size="2xl" icon={faLinkedin} color="black" style={{marginRight: "6vw"}}/>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;