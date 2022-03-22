import React from "react";
import QuotePageComp from "./QuotePageComp";
import { connect } from 'react-redux';
import quotePageMap from "../MapFuncs/QuotePageMap";
import likedQuotePageMap from "../MapFuncs/LikedQuotePageMap";
import { Transition, animated, config} from "react-spring";
import LikePageComp from "./LikePageComp";
import LikedQuotePageComp from "./LikedQuotePage";
import likedPageMap from "../MapFuncs/LikedPageMap";

const QPContainer = connect(quotePageMap.mapStateToProps,null)(QuotePageComp);
const LQPContainer = connect(likedQuotePageMap.mapStateToProps,null)(LikedQuotePageComp);
const LPContainter = connect(likedPageMap.mapStateToProps,null)(LikePageComp);

class MainComp extends React.Component{

    render(){
        return(
            <div className="Main-comp">
                <Transition 
                    native
                    initial={null}
                    items={{mainComp:this.props.displayMainComp,liked:this.props.displayLiked}}
                    from={{y:"110vh"}}
                    enter={{y:"0vh"}}
                    leave={{y:"110vh"}}
                    trail={500}
                    config={config.slow}
                >
                    {(styles,show) => (show.mainComp&&show.liked) ?(
                        <animated.div style={styles}>
                            <LQPContainer/>
                        </animated.div>
                    ):(show.mainComp&&!show.liked)?(
                        <animated.div style={styles}>
                            <QPContainer/>
                        </animated.div>
                    ):(
                        <animated.div style={styles}>
                            <LPContainter/>
                        </animated.div>
                    )}
                </Transition>
            </div>
        );
    }
}

export default MainComp;