import React from "react";
import withHandleClick from "./withHandleClick";

class LikePageComp extends React.Component{
    render(){
        const authorArr = [];
        for(const keys in this.props.likedObj){
            authorArr.push(keys)
        }
        return(
            <div className={this.props.displayMode?"Card-Day-Mode Liked-Box":"Card-Night-Mode Liked-Box"}>
                <div className="Title-Div">Authors</div>
                <div className="Liked-Author-Container">
                    {authorArr.length === 0 ? <div>You have no liked quotes</div>:null}
                    {authorArr.map(i=><div key={i} className={this.props.displayMode?"Liked-Author-Day-Mode Liked-Author-Div":"Liked-Author-Night-Mode Liked-Author-Div"} onClick={(e,data)=>{
                        data = {
                            buttonType:"liked-authors",
                            likedArr:this.props.likedObj[i],
                        };
                        this.props.handleClick(e,data)
                        }}>
                        <div>{i}: {this.props.likedObj[i].length}</div>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default withHandleClick(LikePageComp);