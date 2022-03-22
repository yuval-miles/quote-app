
const quoteContentMap = {

    mapStateToProps : (state) => {
        return { 
          quote:state.quoteOps.quote, 
          author:state.quoteOps.author, 
          prevQuote:state.quoteOps.prevQuote,
          prevAuthor:state.quoteOps.prevAuthor,
          isLiked:state.quoteOps.isLiked,
          displayMode:state.startOps.displayMode,
        }
      } 
}

export default quoteContentMap;