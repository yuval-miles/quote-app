import { startApp, changeWidth} from "../Reducers_and_actionCreators/appStartReducer";

const AppMaps = {

     mapStateToProps : (state) => {
        return { 
          showBubble:state.startOps.showBubble,
          displayMode:state.startOps.displayMode,
        }
      },
      
    mapDispatchToProps : (dispatch) => {
        return {
          startApp: ()=>{
            dispatch(startApp())
          },
          changeWidth: (width) => {
            dispatch(changeWidth(width))
          },
        }
      }

};

export default AppMaps;