import quoteArr from "../QuoteArr";

const NEXT_LIKEDQUOTE = "NEXT_LIKED"
const PREV_LIKEDQUOTE = "PREV_LIKED"
const START_LIKEDQUOTE = "START_LIKED"
const END_LIKEDQUOTE = "END_LIKED"
const UNLIKE_LIKED = "UNLIKE_LIKED"

const intState = {
    quote:"",
    author:"",
    prevQuote:"",
    prevAuthor:"",
    isLiked:false,
    likedArr:[],
    displayLiked:false,
    arrPos:0,
    divOneDisplayed:true,
    reverse:false,
}

export const getNextLikedQuote = () =>{
    return {
        type:NEXT_LIKEDQUOTE
    }
}

export const getPrevLikedQuote = () =>{
    return {
        type:PREV_LIKEDQUOTE
    }
}

export const unlikeLikedQuote = () =>{
    return {
        type:UNLIKE_LIKED
    }
}

export const endLikedQuote = () => {
    return {
        type:END_LIKEDQUOTE
    }
}

export const startLikedQuote = (likedArr) =>{
    return {
        type:START_LIKEDQUOTE,
        likedArr:likedArr
    }
}

export const likedQuoteReducer = (state = intState,action) => {
    const newState = {...state};
    switch(action.type){
        case NEXT_LIKEDQUOTE :
            return{
                likedArr:state.likedArr,
                quote: (state.arrPos === state.likedArr.length - 1) ? state.quote : quoteArr[state.likedArr[state.arrPos+1]].quote,
                author: (state.arrPos === state.likedArr.length - 1) ? state.author : quoteArr[state.likedArr[state.arrPos+1]].author,
                prevQuote:state.quote,
                prevAuthor:state.author,
                displayLiked:true,
                isLiked:true,
                arrPos:(state.arrPos === state.likedArr.length - 1) ? state.arrPos:state.arrPos+1,
                divOneDisplayed:(state.arrPos === state.likedArr.length - 1)?state.divOneDisplayed:!state.divOneDisplayed,
                reverse:false,
            };
        case PREV_LIKEDQUOTE:
            return{
                likedArr:state.likedArr,
                quote: (state.arrPos === 0) ? state.quote : quoteArr[state.likedArr[state.arrPos-1]].quote,
                author: (state.arrPos === 0) ? state.author : quoteArr[state.likedArr[state.arrPos-1]].author,
                prevQuote:state.quote,
                prevAuthor:state.author,
                displayLiked:true,
                isLiked:true,
                arrPos:(state.arrPos === 0) ? state.arrPos:state.arrPos-1,
                divOneDisplayed:(state.arrPos === 0)?state.divOneDisplayed:!state.divOneDisplayed,
                reverse:true,
            };
        case UNLIKE_LIKED:
            if((state.arrPos === state.likedArr.length - 1)&&(state.likedArr.length !== 1)){
                newState.prevQuote = quoteArr[state.likedArr[state.arrPos]].quote;
                newState.prevAuthor = quoteArr[state.likedArr[state.arrPos]].author;
                newState.likedArr.splice(newState.arrPos,1);
                newState.arrPos = newState.arrPos - 1;
                newState.quote = quoteArr[state.likedArr[state.arrPos - 1]].quote;
                newState.author = quoteArr[state.likedArr[state.arrPos - 1]].author;
                newState.divOneDisplayed = !newState.divOneDisplayed;
                newState.reverse = true;
            }else if(state.likedArr.length === 1){
                newState.likedArr.splice(newState.arrPos,1);
                newState.displayLiked = false;
            }else{
                newState.prevQuote = quoteArr[state.likedArr[state.arrPos]].quote;
                newState.prevAuthor = quoteArr[state.likedArr[state.arrPos]].author;
                newState.likedArr.splice(newState.arrPos,1);
                newState.quote = quoteArr[state.likedArr[state.arrPos]].quote;
                newState.author = quoteArr[state.likedArr[state.arrPos]].author;
                newState.divOneDisplayed = !newState.divOneDisplayed;
                newState.reverse = false;
            }
            return newState;
        case START_LIKEDQUOTE:
            return{
                likedArr:[...action.likedArr],
                quote:quoteArr[action.likedArr[0]].quote,
                author:quoteArr[action.likedArr[0]].author,
                prevQuote:quoteArr[action.likedArr[0]].quote,
                prevAuthor:quoteArr[action.likedArr[0]].author,
                displayLiked:true,
                isLiked:true,
                arrPos:0,
                divOneDisplayed:state.divOneDisplayed,
                reverse:false,
            };
        case END_LIKEDQUOTE:
            newState.displayLiked = false;
            newState.likedArr=[];
            return newState;
        default:
            return state;
    }
}