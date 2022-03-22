import {  toggleMainComp , toggleDisplayMode, } from "../Reducers_and_actionCreators/appStartReducer";
import { startLikedQuote , getNextLikedQuote, getPrevLikedQuote ,endLikedQuote ,unlikeLikedQuote } from "../Reducers_and_actionCreators/likedQuoteReducer";
import { getNextQuote , getPrevQuote , likeQuote , updateLikedObj} from "../Reducers_and_actionCreators/getQuoteReducer";

const withHandleClickMaps = {

   mapDispatchToProps : (dispatch) => {
       return {
         toggleMainComp: ()=>{
           dispatch(toggleMainComp())
         },
         endLikedQuote: () => {
           dispatch(endLikedQuote());
        },
         getNextQuote: () => {
            dispatch(getNextQuote());
         },
         getPrevQuote: () => {
           dispatch(getPrevQuote());
         },
         likeQuote: () => {
           dispatch(likeQuote());
         },
         getNextLikedQuote: () => {
           dispatch(getNextLikedQuote());
         },
         getPrevLikedQuote: () => {
           dispatch(getPrevLikedQuote());
         },
         startLikedQuote: (likedArr) => {
           dispatch(startLikedQuote(likedArr));
         },
         unlikeLikedQuote: () => {
           dispatch(unlikeLikedQuote());
         },
         updateLikedObj: (likedArr,author) => {
           dispatch(updateLikedObj(likedArr,author));
         },
         toggleDisplayMode: () => {
           dispatch(toggleDisplayMode())
         },
       }
     }
};

export default withHandleClickMaps;