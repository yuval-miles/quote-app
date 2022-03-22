
const likedPageMap = {
    
    mapStateToProps : (state) => {
        return { 
            likedObj:state.quoteOps.likedObj,
            displayMode:state.startOps.displayMode,
        }
      },  
}

export default likedPageMap;