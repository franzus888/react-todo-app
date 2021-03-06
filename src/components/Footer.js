import React from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faXing, faLinkedin} from '@fortawesome/free-brands-svg-icons';
// Styles
import './../styles/Footer.scss';

function Footer() {
    return (
        <footer className="App-footer">
            <p>
                <span><FontAwesomeIcon className="App-svg-left" icon={faEnvelope}/>
                    <a href="mailto:franz.straube@gmail.com">Franz Straube</a>
                </span>
            </p>
            <p>
                <span>
                    <a
                        href="https://www.xing.com/profile/Franz_Straube"
                        target="_blank"
                        rel="noopener noreferrer"><FontAwesomeIcon className="App-svg-left" icon={faXing}/></a>
                </span>
                <span className="seperator">|</span>
                <span>
                    <a
                        href="https://www.linkedin.com/in/franz-straube-039473b4/"
                        target="_blank"
                        rel="noopener noreferrer"><FontAwesomeIcon className="App-svg-right" icon={faLinkedin}/></a>
                </span>
            </p>
        </footer>
    )
};

export default Footer;