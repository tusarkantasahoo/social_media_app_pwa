import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import home from "../../../assets/images/phase2Img/home.png";
import history from "../../pages/history/History.js";
import college from "../../../assets/images/menu.png";

export default class HomeOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isActive: false,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () => {
    console.log("hek");
    this.setState({ isActive: !this.state.isActive });
  };
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    console.log("State", this.state);
    return (
      <>
        {this.state.width > 990 || this.props.props.isNavActive===true ? (
          <div className="side_bar_wrap" id="side_bar_wrap">
            {this.props.props.optionArray.map((item, index) => {
              return (
                <>
                  {this.props.props.currentOption.code === item.code ? (
                    <div className="sidebar_menu">
                      <img src={item.icon}></img>
                      <p>{item.name}</p>
                    </div>
                  ) : (
                    <div
                      className="sidebar_menu"
                      style={{ display: "flex", marginTop: "1em" }}
                    >
                      <img src={item.icon}></img>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
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
        ) : null}
      </>
    );
  }
}
