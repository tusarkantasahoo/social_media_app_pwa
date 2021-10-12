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
        <div className="side_bar_wrap">
          {this.props.props.optionArray.map((item, index) => {
            return (
              <>
                {this.props.props.currentOption.code === item.code ? (
                  <div className="sidebar_menu"  >
                  <img src={item.icon}></img>
                    <p>{item.name}</p>
                  </div>
                ) : (
                  <div className="sidebar_menu" style={{display:"flex",marginTop:"1em"}}>
                  <img src={item.icon}></img>
                    <Link style={{textDecoration: "none",color:"black"}}
                      to={"/" + item.code}
                    >
                      <p>{item.name}</p>
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
