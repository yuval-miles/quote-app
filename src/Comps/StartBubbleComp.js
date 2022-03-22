import React from "react";

class StartBubbleComp extends React.Component{

    constructor (props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.startApp();
    }

    render(){
        return(
            <div className="bubble-div">
                <div className="bubble" onClick={this.handleClick} id="bubble">
                    <i className="fas fa-quote-right bubble-q" onClick={this.handleClick} id="i-bubble"></i>
                </div>
            </div>
        );
    }
}
export default StartBubbleComp;