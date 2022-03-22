import React from "react";
import MainComp from "./Comps/MainComp";
import StartBubbleComp from "./Comps/StartBubbleComp";
import ButtonBarComp from "./Comps/ButtonBarComp";
import { Transition, animated, config } from "react-spring";
import { connect } from 'react-redux';
import mainCompMap from "./MapFuncs/MainCompMap";
import buttonBarMap from "./MapFuncs/ButtonBarMap";

const MCContainer = connect(mainCompMap.mapStateToProps,null)(MainComp);
const BBContainer = connect(buttonBarMap.mapStateToProps,null)(ButtonBarComp)

class App extends React.Component {

  constructor(props){
    super(props)
    
    this.handleMedia = this.handleMedia.bind(this);

    this.props.changeWidth(
      !window.matchMedia("(min-width: 400px)").matches ? "SMALL" : (
        window.matchMedia("(min-width: 950px)").matches ? "LARGE" : "MEDIUM"
        )
      );

    window.matchMedia("(min-width: 950px)").addEventListener('change',(e,data)=>{
      data = {
         type:"width",
         width: window.matchMedia("(min-width: 950px)").matches ? "LARGE" : "MEDIUM",
      }
      this.handleMedia(e,data)
    });

    window.matchMedia("(min-width: 400px)").addEventListener('change',(e,data)=>{
      data = {
         type:"width",
         width: window.matchMedia("(min-width: 400px)").matches ? "MEDIUM" : "SMALL",
      }
      this.handleMedia(e,data)
    });

  }

  handleMedia(e,data){
    switch(data.type){
      case "width":
        this.props.changeWidth(data.width)
        break;
      default:
        console.log("INVAILD MEADIA TYPE");
        break;
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(this.props.displayMode){
      document.body.classList.add("Background-Day-Mode");
      document.body.classList.remove("Background-Night-Mode");
    }else{
      document.body.classList.add("Background-Night-Mode");
      document.body.classList.remove("Background-Day-Mode");
    }
  }

  render () {
    return (
      <div>
        <Transition
          native
          initial={null}
          items={this.props.showBubble}
          from={{opacity:0}}
          enter={{opacity:1,y:"50vh"}}
          leave={{opacity:0,y:"15vh"}}
          trail={600}
          config={config.slow}
        >
          {(styles,show) => show ? (
            <animated.div style={styles}>
              <StartBubbleComp
                showBubble={this.props.showBubble}
                startApp={this.props.startApp}
              />
            </animated.div>
          ):(
            <div>
            <animated.div style={{
              opacity: styles.opacity.to({ range: [0.0, 1.0], output: [0, 1]}),
              y: styles.opacity.to({ range: [0.0, 1], output: [85, 50]}).to((y) => `${y}vh`)
            }}>
              <MCContainer/>
          </animated.div>
          <animated.div style={{
            opacity: styles.opacity.to({ range: [0.0, 1.0], output: [0, 1]}),
          }}>
            <BBContainer/>
          </animated.div>
          </div>
          )}
        </Transition>
        
      </div>
    );
  }

}

export default App;
