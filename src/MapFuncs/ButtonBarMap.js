const buttonBarMap = {
    
    mapStateToProps : (state) => {
        return { 
            displayLiked:state.likedOps.displayLiked,
            displayMainComp:state.startOps.displayMainComp,
            displayMode:state.startOps.displayMode,
        }
      },  
}

export default buttonBarMap;