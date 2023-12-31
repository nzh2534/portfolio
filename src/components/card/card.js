import "./card.css";
import "./flip-transition.css";
import {Alert, Button} from 'react-bootstrap';

import { faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons";
import { faFlaskVial, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({onClick, front, back, symbol, link}) {
    const symbolObj = {
        "github": faGithub,
        "medium": faMedium,
        "data": faFlaskVial,
        "solution": faScrewdriverWrench
    }

  return (
    <div className="card" onMouseEnter={onClick}>
      <div className="card-back">
        <div>{back}</div>
        <div style={{marginTop: "1vh", cursor: "pointer"}}>
          <a href={link} target="_blank">
            <Button>
              <FontAwesomeIcon className="icon" size="2xl" icon={symbolObj[symbol]} color="white"/>
            </Button>
          </a>
        </div>
      </div>
      <div className="card-front">
        <Alert style={{width:"80%", backgroundColor: "white", borderWidth: "3px"}}>{front}</Alert>
      </div>
    </div>
  );
}

export default Card;