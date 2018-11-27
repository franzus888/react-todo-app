import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faXing, faLinkedin} from '@fortawesome/free-brands-svg-icons';
// Styles
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <div>
                    <span><FontAwesomeIcon className="App-svg-left" icon={faCopyright}/>
                        <a href="mailto:franz.straube@gmail.com">Franz Straube</a>
                    </span>
                </div>
                <div>
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
                </div>
            </footer>
        )
    };
};

export default Footer;