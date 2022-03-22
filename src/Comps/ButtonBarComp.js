import React from "react";
import withHandleClick from "./withHandleClick";

class ButtonBarComp extends React.Component{
    render(){
        return(
            <div className={this.props.displayMode?"Button-Bar-Day-Mode Button-Bar":"Button-Bar-Night-Mode Button-Bar"}>
                <div className={this.props.displayMode?"Toggle-Button-container-Day-Mode Toggle-Button-container":"Toggle-Button-container-Night-Mode Toggle-Button-container"} onClick={(e,data)=>{
                    data = {
                        buttonType:"random-liked-toggle",
                        displayLiked:this.props.displayLiked,
                    }
                    this.props.handleClick(e,data)
                    }}>
                    <i className={(this.props.displayMainComp&&!this.props.displayLiked)?"fas fa-random Toggle-Button Toggle-Button-S":"fas fa-random Toggle-Button Toggle-Button-US"}></i>
                    <i className={(this.props.displayMainComp&&!this.props.displayLiked)?"fas fa-heart Toggle-Button Toggle-Button-US":"fas fa-heart Toggle-Button Toggle-Button-S"}></i>
                </div>
                <div className={this.props.displayMode?"Toggle-Button-container-Day-Mode Toggle-Button-container":"Toggle-Button-container-Night-Mode Toggle-Button-container"} onClick={(e,data)=>{
                    data = {
                        buttonType:"display-mode-toggle",
                    }
                    this.props.handleClick(e,data);
                }}>
                    <i className={this.props.displayMode?"fas fa-sun Toggle-Button Toggle-Button-S":"fas fa-sun Toggle-Button Toggle-Button-US"}></i>
                    <i className={this.props.displayMode?"fas fa-moon Toggle-Button Toggle-Button-US":"fas fa-moon Toggle-Button Toggle-Button-S"}></i>
                </div>
            </div>
        );
    }
}

export default withHandleClick(ButtonBarComp);