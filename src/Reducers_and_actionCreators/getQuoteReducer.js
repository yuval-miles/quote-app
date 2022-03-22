import quoteArr from "../QuoteArr";

const NEXT_QUOTE = "NEXT";
const PREV_QUOTE = "PREV";
const LIKE_QUOTE = "LIKE";
const UPDATE_LIKEDOBJ = "UPDATE_LIKEDOBJ"
const intValue = Math.floor(Math.random()*quoteArr.length);

const intState = {
    quote:quoteArr[intValue].quote,
    author:quoteArr[intValue].author,
    prevQuote:quoteArr[intValue].quote,
    prevAuthor:quoteArr[intValue].author,
    prevQArr:[intValue],
    quoteArrPos:0,
    divOneDisplayed:true,
    reverse:false,
    quoteIdx:intValue,
    isLiked:false,
    likedObj:{}
}

export const getNextQuote = () =>{
    return {
        type: NEXT_QUOTE
    };
};

export const getPrevQuote = () =>{
    return {
        type: PREV_QUOTE
    };
}

export const likeQuote = () =>{
    return{
        type:LIKE_QUOTE
    }
}

export const updateLikedObj = (likedArr,author)=>{
    return{
        type:UPDATE_LIKEDOBJ,
        likedArr:likedArr,
        author:author,
    }
}

export const getQuoteReducer = (state = intState,action) =>{
    const newState = {...state};
    let tempLike = false;

    switch(action.type){
        case NEXT_QUOTE:
            let randomQIdx = Math.floor(Math.random()*quoteArr.length);

            if(state.quoteArrPos!==state.prevQArr.length-1){
                if(state.likedObj.hasOwnProperty(quoteArr[state.prevQArr[state.quoteArrPos + 1]].author)){
                    if(state.likedObj[quoteArr[state.prevQArr[state.quoteArrPos + 1]].author].indexOf(state.prevQArr[state.quoteArrPos + 1]) >= 0){
                        tempLike = true;
                    }else{
                        tempLike = false;
                    }
                }
            }else{
                if(state.likedObj.hasOwnProperty(quoteArr[randomQIdx].author)){
                    if(state.likedObj[quoteArr[randomQIdx].author].indexOf(randomQIdx) >= 0){
                        tempLike = true;
                    }else{
                        tempLike = false;
                    }
                }
            }

            return {
                quote:state.quoteArrPos!==state.prevQArr.length-1?quoteArr[state.prevQArr[state.quoteArrPos + 1]].quote:quoteArr[randomQIdx].quote,
                author:state.quoteArrPos!==state.prevQArr.length-1?quoteArr[state.prevQArr[state.quoteArrPos + 1]].author:quoteArr[randomQIdx].author,
                prevQArr:state.prevQArr.length < 20 ?(state.quoteArrPos!==state.prevQArr.length-1?[...state.prevQArr]:[...state.prevQArr,randomQIdx]):[...state.prevQArr].slice(1,state.prevQArr.length).concat(randomQIdx),
                quoteArrPos:state.prevQArr.length === 20?19:state.quoteArrPos + 1,
                prevQuote:state.quote,
                prevAuthor:state.author,
                divOneDisplayed:!state.divOneDisplayed,
                reverse:false,
                quoteIdx:state.quoteArrPos!==state.prevQArr.length-1?state.prevQArr[state.quoteArrPos + 1]:randomQIdx,
                isLiked:tempLike,
                likedObj:state.likedObj,
            }
        case PREV_QUOTE:

            if(state.quoteArrPos === 0){
                if(state.likedObj.hasOwnProperty(quoteArr[state.prevQArr[0]].author)){
                    if(state.likedObj[quoteArr[state.prevQArr[0]].author].indexOf(state.prevQArr[0]) >= 0){
                        tempLike = true;
                    }else{
                        tempLike = false;
                    }
                }
            }else{
                if(state.likedObj.hasOwnProperty(quoteArr[state.prevQArr[state.quoteArrPos - 1]].author)){
                    if(state.likedObj[quoteArr[state.prevQArr[state.quoteArrPos - 1]].author].indexOf(state.prevQArr[state.quoteArrPos - 1]) >= 0){
                        tempLike = true;
                    }else{
                        tempLike = false;
                    }
                }
            }

            return{
                quote:state.quoteArrPos === 0 ? quoteArr[state.prevQArr[0]].quote : quoteArr[state.prevQArr[state.quoteArrPos - 1]].quote,
                author:state.quoteArrPos === 0 ? quoteArr[state.prevQArr[0]].author : quoteArr[state.prevQArr[state.quoteArrPos - 1]].author,
                prevQArr:[...state.prevQArr],
                quoteArrPos:state.quoteArrPos === 0?0:state.quoteArrPos - 1,
                prevQuote:state.quote,
                prevAuthor:state.author,
                divOneDisplayed:state.quoteArrPos === 0?state.divOneDisplayed : !state.divOneDisplayed,
                reverse:true,
                quoteIdx:state.quoteArrPos === 0 ? state.prevQArr[0]:state.prevQArr[state.quoteArrPos - 1],
                isLiked:tempLike,
                likedObj:state.likedObj,
            }
        case LIKE_QUOTE:
            const tempObj = {...state.likedObj}
            if(state.likedObj.hasOwnProperty(state.author)){
                if(tempObj[state.author].indexOf(state.quoteIdx) >= 0){
                    tempObj[state.author].splice(tempObj[state.author].indexOf(state.quoteIdx),1)
                    if(tempObj[state.author].length === 0){
                        delete tempObj[state.author];
                    }
                }else{
                    tempObj[state.author] = [...tempObj[state.author],state.quoteIdx];
                }
            }else{
                tempObj[state.author] = [state.quoteIdx];
            }
            newState.likedObj = tempObj;
            newState.isLiked = !state.isLiked;
            return newState;
        case UPDATE_LIKEDOBJ:

            if(action.likedArr.length > 0){
                newState.likedObj[action.author] = [...action.likedArr];
            }else{
                delete newState.likedObj[action.author];
            }

            if(newState.likedObj.hasOwnProperty(quoteArr[state.prevQArr[state.quoteArrPos]].author)){
                if(newState.likedObj[quoteArr[state.prevQArr[state.quoteArrPos]].author].indexOf(state.prevQArr[state.quoteArrPos]) >= 0){
                    tempLike = true;
                }else{
                    tempLike = false;
                }
            }
            newState.isLiked = tempLike;
            return newState;
        default:
            return state;
    }
}
