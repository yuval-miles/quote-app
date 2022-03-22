const mainCompMap = {

   mapStateToProps : (state) => {
      return { 
        displayLiked:state.likedOps.displayLiked,
        displayMainComp:state.startOps.displayMainComp,
      }
    }
}

export default mainCompMap;