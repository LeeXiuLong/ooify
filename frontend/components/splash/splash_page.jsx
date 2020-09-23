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
                <div class="footer">
                    <p>Ooify</p>
                    <label>
                        TECHNOLOGIES
                        <ul>
                            <li>Ruby</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </label>
                    <label>
                        EDUCATION
                        <ul>
                            <li>App Academy</li>
                            <li>LSU</li>
                            <li>Computer Science</li>
                        </ul>
                    </label>
                    <label>
                        WORK EXPERIENCE
                        <ul>
                            <li>Kibo Commerce</li>
                            <li>CoEnterprise</li>
                        </ul>
                    </label>
                </div>
            </div>
        )
    }
}

export default SplashPage;