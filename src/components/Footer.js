import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Alert } from 'react-bootstrap';

import { faReact, faFigma } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {

  return (
    <Navbar collapseOnSelect bg="white" variant="light" className='m-auto m-0' style={{ marginTop: "4vh", width: '100%'}}>
        <Navbar.Toggle className='m-auto m-0' aria-controls="responsive-footer-nav" />
        <Navbar.Collapse className='m-auto m-0' id="responsive-footer-nav">
            <Nav>
              coded and designed using
            </Nav>
            <Nav>
              <Nav.Link href="https://react.dev/" target="_blank">
                <FontAwesomeIcon className="icon" size="2xl" icon={faReact} color="black"/> 
              </Nav.Link>
              <Nav.Link href="https://www.figma.com" target="_blank"> 
                <FontAwesomeIcon className="icon" size="2xl" icon={faFigma} color="black"/> 
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer;