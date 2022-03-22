import React from "react";
import withHandleClick from "./withHandleClick";

class QuoteContent extends React.Component{
    render(){
        return(
            <div>
                <div className={this.props.displayMode?"Card-Day-Mode Quote-box":"Card-Night-Mode Quote-box"}>
                        {this.props.isLikedPage && (
                            <div className="Title-Div">Liked Quotes</div>
                        )}
                        <div className="Top-Bar-Div">
                            {this.props.isLikedPage && (
                                <div className="Author-Button">
                                    <i className="fas fa-pen-square" onClick={(e,data)=>{
                                        data = {
                                            buttonType:"return-to-author",
                                        }
                                        this.props.handleClick(e,data)
                                        }}></i>
                                </div>
                            )}
                            <div className="Socails-Div">
                                <a href={`https://twitter.com/intent/tweet?text="${this.props.quote}" --${this.props.author}`} target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                                <a href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,&caption=' +
                                        encodeURIComponent(this.props.author) +
                                        '&content=' +
                                        encodeURIComponent(this.props.quote) +
                                        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'} target="_blank" rel="noreferrer"><i className="fab fa-tumblr-square"></i></a>
                            </div>
                        </div>
                        <div className="Quote-Div">
                            {this.props.divOneDisplayed ? <p><i className="fas fa-quote-left Quotemark"></i>{this.props.quote}</p>:
                            <p><i className="fas fa-quote-left Quotemark"></i>{this.props.prevQuote}</p>}
                        </div>
                        <div className="Author-Div">
                            <p>-</p>{this.props.divOneDisplayed ? <p>{this.props.author}</p>:<p>{this.props.prevAuthor}</p>}
                        </div>
                        <div className="Button-Div">
                            <i onClick={(e,data)=>{
                                data = {
                                    buttonType:"prev",
                                    isLikedPage:this.props.isLikedPage,
                                }
                                this.props.handleClick(e,data)
                                }} className="fas fa-arrow-circle-left"></i>
                            <div>
                                {this.props.isLikedPage?(
                                    <i className={(this.props.isLiked&&this.props.divOneDisplayed)?"fas fa-heart heartLiked":"fas fa-heart heart"} onClick={(e,data)=>{
                                        data = {
                                            buttonType:"like",
                                            isLikedPage:this.props.isLikedPage,
                                            likedArr:this.props.likedArr,
                                            author:this.props.author,
                                        }
                                        this.props.handleClick(e,data)
                                    }}></i>
                                ):(
                                    <i className={(this.props.isLiked&&this.props.divOneDisplayed)?"fas fa-heart heartLiked":"fas fa-heart heart"} onClick={(e,data)=>{
                                        data = {
                                            buttonType:"like",
                                            isLikedPage:this.props.isLikedPage,
                                        }
                                        this.props.handleClick(e,data)
                                        }}></i>
                                )}
                            </div>
                            <i onClick={(e,data)=>{
                                data = {
                                    buttonType:"next",
                                    isLikedPage:this.props.isLikedPage,
                                }
                                this.props.handleClick(e,data)
                                }} className="fas fa-arrow-circle-right"></i>
                        </div>
                </div>
            </div>
        );
    }
}


export default withHandleClick(QuoteContent);