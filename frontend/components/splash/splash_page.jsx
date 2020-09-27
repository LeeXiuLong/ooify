import React from 'react';
import SplashNavBar from './splash_nav_bar';
import { Link } from 'react-router-dom'


class SplashPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let currentId;
        if(this.props.userId){
            currentId = this.props.userId
        }else{
            currentId = 0;
        }
        return(
            <div className="splash">
                <header>
                    <SplashNavBar />
                </header>
                <div className="mainSplash">
                    <h1 className="listeningisEverything">
                        <div className ="listeningIs">Listening is</div>
                        <div className="everything">Everything</div>
                        <p>Millions of songs and podcasts. No credit card needed.</p>
                        <Link className="button" to={`/home/${currentId}`}>
                            <div>
                                Open Web Player
                            </div>
                        </Link>
                    </h1>
                    
                    
                    
                </div>
                <div className="splashFooter">
                    <img src={window.white_logo} />
                    <ul>
                        <label>
                            TECHNOLOGIES
                        </label>
                        <li>Ruby</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                    <ul>
                        <label>
                            EDUCATION
                        </label>
                        <li>App Academy</li>
                        <li>LSU</li>
                        <li>Computer Science</li>
                    </ul>
                    
                    <ul>
                        <label>
                            WORK EXPERIENCE
                        </label>
                        <li>Kibo Commerce</li>
                        <li>CoEnterprise</li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default SplashPage;