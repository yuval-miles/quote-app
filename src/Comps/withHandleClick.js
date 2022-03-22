import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withHandleClickMaps from "../MapFuncs/withHandleClickMaps";

const withHandleClick = WrappedComp => ({
     getNextLikedQuote,
     getNextQuote,
     getPrevLikedQuote,
     getPrevQuote,
     unlikeLikedQuote,
     updateLikedObj,
     likeQuote,
     toggleMainComp,
     endLikedQuote,
     startLikedQuote,
     toggleDisplayMode,
     ...props
    }) => {   
        const handleClick = (e,data) => {
            switch(data.buttonType){
            case "next":
                data.isLikedPage ? getNextLikedQuote() : getNextQuote()
                break;
            case "prev":
                data.isLikedPage ? getPrevLikedQuote() : getPrevQuote();
                break;
            case "like":
                if(data.isLikedPage){
                unlikeLikedQuote();
                updateLikedObj(data.likedArr,data.author);
                }else{
                likeQuote();
                }
                break;
            case "random-liked-toggle":
                if(!data.displayLiked){
                    toggleMainComp();
                }else{
                    endLikedQuote();
                }
                break;
            case "return-to-author":
                toggleMainComp();
                endLikedQuote();
                break;
            case "liked-authors":
                startLikedQuote(data.likedArr)
                toggleMainComp();
                break;
            case "display-mode-toggle":
                toggleDisplayMode();
                break;
            default:
                console.log("INVAILD BUTTON TYPE");
                break;
            }
        }
        
        return <WrappedComp
                handleClick = {handleClick}
                {...props}
                />
}

export default compose(connect(null,withHandleClickMaps.mapDispatchToProps),withHandleClick)