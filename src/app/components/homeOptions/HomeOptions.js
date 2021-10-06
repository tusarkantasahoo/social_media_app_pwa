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
        <div style={{ backgroundColor:"white",textAlign: "left", marginLeft: "1em", marginTop: "5%",borderRadius:"1em", boxShadow: "4px 10px 8px  #dbd8d7",padding:"1em" }}>
          {this.props.props.optionArray.map((item, index) => {
            return (
              <>
                {this.props.props.currentOption.code === item.code ? (
                  <div className="sidebar_menu" style={{display:"flex"}}>
                  <img src={item.icon} style={{height:"1.5em",width:"1.5em"}}></img>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        color: "#1da1f2",
                        cursor: "pointer",
                        fontWeight: "bold",
                        marginLeft:"1em"
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                ) : (
                  <div className="sidebar_menu" style={{display:"flex"}}>
                  <img src={item.icon} style={{height:"1.5em",width:"1.5em"}}></img>
                    <Link style={{textDecoration: "none",color:"black"}}
                      to={"/" + item.code}
                      
                    
                    >
                      <p
                        style={{
                          fontSize: "1.2rem",
                          cursor: "pointer",
                          fontWeight: "bold",
                          marginLeft:"1em"
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
