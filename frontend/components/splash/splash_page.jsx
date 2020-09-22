import React from 'react';
import SplashNavBar from './splash_nav_bar';


class SplashPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <SplashNavBar />
        </div>
        )
    }
}

export default SplashPage;