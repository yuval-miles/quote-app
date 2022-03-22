const likedQuotePageMap = {

    mapStateToProps : (state) => {
        return { 
          divOneDisplayed:state.likedOps.divOneDisplayed,
          reverse:state.likedOps.reverse,
          appWidth:state.startOps.appWidth,
        }
      }
}

export default likedQuotePageMap;