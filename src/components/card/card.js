import "./card.css";
import "./flip-transition.css";
import Alert from 'react-bootstrap/Alert';

import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({onClick, front, back, symbol, link}) {
    const symbolObj = {
        "github": faGithub,
        "medium": faMedium
    }

  return (
    <div className="card" onMouseEnter={onClick}>
      <div className="card-back">
        <div>{back}</div>
        <div><a href={link} target="_blank"><FontAwesomeIcon className="icon" size="2xl" icon={symbolObj[symbol]} color="black" style={{marginTop: "1vh", cursor: "pointer"}}/></a></div>
      </div>
      <div className="card-front">
        {/* <Alert style={{width:"80%"}} variant='primary'>{front}</Alert> */}
        {front}
      </div>
    </div>
  );
}

export default Card;