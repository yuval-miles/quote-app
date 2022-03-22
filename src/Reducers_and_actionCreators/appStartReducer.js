const START_APP = "START";
const TOGGLE_MCOMP = "TOGGLE_COMP";
const TOGGLE_DISPLAY_MODE = "TOGGLE_DISPLAY_MODE";
const CHANGE_WIDTH = "CHANGE_WIDTH";

const intState = {
    showBubble:true,
    displayMainComp:true,
    displayMode:true,
    appWidth:"LARGE",
}

export const startApp = () => {
    return {
        type: START_APP
    }
};

export const toggleMainComp = () => {
    return {
        type: TOGGLE_MCOMP
    }
}

export const toggleDisplayMode = () => {
    return {
        type: TOGGLE_DISPLAY_MODE
    }
}

export const changeWidth = (width) => {
    return {
        type: CHANGE_WIDTH,
        width:width
    }
}

export const appStartReducer = (state = intState,action) => {
    switch(action.type){
        case START_APP:
            return {
                showBubble:false,
                displayMainComp:state.displayMainComp,
                displayMode:state.displayMode,
                appWidth:state.appWidth,
            }
        case TOGGLE_MCOMP:
            return{
                showBubble:state.showBubble,
                displayMainComp:!state.displayMainComp,
                displayMode:state.displayMode,
                appWidth:state.appWidth,
            }
        case TOGGLE_DISPLAY_MODE:
            return{
                showBubble:state.showBubble,
                displayMainComp:state.displayMainComp,
                displayMode:!state.displayMode,
                appWidth:state.appWidth,
            }
        case CHANGE_WIDTH:
            return{
                showBubble:state.showBubble,
                displayMainComp:state.displayMainComp,
                displayMode:state.displayMode,
                appWidth:action.width,
            }
        default:
            return state;
    }
};