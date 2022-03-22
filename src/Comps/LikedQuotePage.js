import React from "react";
import { Transition, animated,config} from "react-spring";
import QuoteContent from "./QuoteContent";
import { connect } from 'react-redux';
import likedContentMap from "../MapFuncs/LikedContentMap";

const QCContainer = connect(likedContentMap.mapStateToProps,null)(QuoteContent) 

class LikedQuotePageComp extends React.Component{

    setAnimState(){
        switch(this.props.appWidth){
            case "LARGE":
                return this.props.reverse ? -85:85
            case "MEDIUM":
                return this.props.reverse ? -100:100
            case "SMALL":
                return this.props.reverse ? -120:120
            default:
                return;
        }
    }

    render(){
        const animState = this.setAnimState()
        return (
            <div>
            <Transition
                native
                initial={null}
                items={this.props.divOneDisplayed}
                from={{x:`${animState}vw`}}
                enter={{x:"0vw"}}
                leave={{x:`${animState * -1}vw`}}
                trail={500}
                config={config.slow}
            >
            {(styles,show) => show ? (
            <animated.div style={styles}>
                <QCContainer
                    isLikedPage={true}
                    divOneDisplayed={this.props.divOneDisplayed}
                />
            </animated.div>
            ):(
            <animated.div style={styles}>
                <QCContainer
                    isLikedPage={true}
                    divOneDisplayed={!this.props.divOneDisplayed}
                />
            </animated.div>
            )}
            </Transition>
            </div>
        );
    }
}

export default LikedQuotePageComp;