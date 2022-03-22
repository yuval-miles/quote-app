const quotePageMap = {

    mapStateToProps : (state) => {
        return { 
          divOneDisplayed:state.quoteOps.divOneDisplayed,
          reverse:state.quoteOps.reverse,
          appWidth:state.startOps.appWidth,
        }
      }
}

export default quotePageMap;