import React, { Component } from "react";
import cancel from "../../../assets/images/cancel.png";
export default class SinglePostView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

render(){
    return(
        <>
           <div style={{ backgroundColor: "White" }}>
            <div className="row">
              <div className="col-10" style={{textAlign: "left",fontSize:"30px" }}>
                {this.props.props.fullScreenNewsContent.title}
              </div>
              <div className="col-2" style={{textAlign: "right",display: "flex", flexDirection: "row" }} onClick={()=>{this.props.handelNewsClose()}}>
                  <img src={cancel} style={{height:"25px",width:"25px",marginTop:"1em"}}></img>
               
              </div>

            </div>
            Description {this.props.props.fullScreenNewsContent.description}
            <div>
                <img src={this.props.props.fullScreenNewsContent.image} style={{width:"55em",height:"40em"}}></img>
            </div>
          </div>
        </>
    )
}
}