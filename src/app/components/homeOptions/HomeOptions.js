import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import home from "../../../assets/images/phase2Img/home.png"
import history from '../../pages/history/History.js';
import college from "../../../assets/images/menu.png";




export default class HomeOptions extends Component {
  state = { isActive: false };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

  }

  handleToggle = () => {
  this.setState({ isActive: !this.state.isActive });
  };


  render() {
    const isActive = this.state.isActive;
     return (
      <>
        <div className="side_bar_wrap" id="side_bar_wrap">
          <div className="pr">
            <img src={college} className="menuBar" id="menuBar" onClick={this.handleToggle}/>
          </div>
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
