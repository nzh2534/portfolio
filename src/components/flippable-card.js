import './flippable-card.css';
import Card from './card/card';
import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';

function FlippableCard({front, back, symbol, link}) {
    const [showFront, setShowFront] = useState(true);
    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={1000}
                classNames='flip'
            >
                <Card front={front} back={back} symbol={symbol} link={link} onClick={() => {
                    setShowFront((v) => !v);
                }}/>
            </CSSTransition>
        </div>
    );
}

export default FlippableCard;