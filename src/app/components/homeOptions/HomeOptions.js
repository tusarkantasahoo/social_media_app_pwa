import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
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
        <div style={{ textAlign: "left", marginLeft: "10px", marginTop: "5%" }}>
          {this.props.props.optionArray.map((item, index) => {
            return (
              <>
                {this.props.props.currentOption.code === item.code ? (
                  <div className="sidebar_menu">
                    <p
                      style={{
                        fontSize: "1.2rem",
                        color: "#1da1f2",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                ) : (
                  <div className="sidebar_menu">
                    <Link style={{textDecoration: "none",color:"black"}}
                      to={"/" + item.code}
                      
                    
                    >
                      <p
                        style={{
                          fontSize: "1.2rem",
                          cursor: "pointer",
                          fontWeight: "bold",
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
