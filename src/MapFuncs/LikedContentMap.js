const likedContentMap = {
    
    mapStateToProps : (state) => {
        return { 
          quote:state.likedOps.quote, 
          author:state.likedOps.author, 
          prevQuote:state.likedOps.prevQuote,
          prevAuthor:state.likedOps.prevAuthor,
          isLiked:state.likedOps.isLiked,
          likedArr:state.likedOps.likedArr,
          displayMode:state.startOps.displayMode
        }
      } 
}

export default likedContentMap;