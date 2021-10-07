import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import home from "../../../assets/images/phase2Img/home.png"
import history from '../../pages/history/History.js';
export default class HomeOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

  }


  render() {
    return (
      <>
        <div  style={{ backgroundColor:"white",textAlign: "left", marginTop:"1em",padding:"",boxShadow: "1px 1px 1px  #dbd8d7",width:"18%",marginLeft:"10%" }}>
          {this.props.props.optionArray.map((item, index) => {
            return (
              <>
                {this.props.props.currentOption.code === item.code ? (
                  <div className="sidebar_menu"  >
                  <img src={item.icon} style={{height:"2em",width:"2em"}}></img>
                    <p
                      style={{
                        fontSize: "27px",
                        color: "#1da1f2",
                        fontWeight: "500",
                        marginLeft:"1em",
                      
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                ) : (
                  <div className="sidebar_menu" style={{display:"flex",marginTop:"1em"}}>
                  <img src={item.icon} style={{height:"2em",width:"2em"}}></img>
                    <Link style={{textDecoration: "none",color:"black"}}
                      to={"/" + item.code}
                    >
                      <p
                        style={{
                          fontSize: "27px",
                          fontWeight: "500",
                          marginLeft:"1em",
                        }}
                        // onClick={() => {
                          //  this.props.setPage(item);
                          // console.log("set page");
                          // this.props.updateOptionOnClick(item);
                          //  history.push("/"+item.code)
                        // }}
                      >
                        {item.name}
                      </p>
                    </Link>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </>
    );
  }
}
