import React, { Component } from "react";
export default class HomeOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
                    <p style={{ fontSize: "1.2rem", color: "#1da1f2", cursor: "pointer", fontWeight: "bold" }}>{item.name}</p>
                  </div>
                ) : (
                  <div className="sidebar_menu">
                    <p onClick={() => this.props.updateOptionOnClick(item)} style={{ fontSize: "1.2rem", cursor: "pointer", fontWeight: "bold" }}>{item.name}</p>
                  </div>
                )}
              </>
            )
          })}
        </div>
      </>
    );
  }
}
