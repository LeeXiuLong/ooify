import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button onClick={this.props.openModal}>
                    Make a Playlist!
                </button>
            </div>
        )
    }
}

export default Home;