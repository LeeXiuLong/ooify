import React from 'react';
import SplashNavBar from './splash_nav_bar';


class SplashPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <header>
                    <SplashNavBar />
                </header>
                <div className="mainSplash">
                    <h1>Listening is everything.
                        <p>Millions of songs and podcasts. No credit card needed.</p>
                        <button>Open Web Player</button>
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