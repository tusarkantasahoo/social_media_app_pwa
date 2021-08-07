import React, { Component } from "react";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        noOfOptions:2, 
        postText:props.postText,

    };
  }
  render() {
      console.log("Quix created");
    return (
      <>
      quz
        <div style={{ width: "90%", marginLeft: "5%" }}>
              <input
                value={this.props.state.postText}
                onChange={(e) => {
                  this.setState({ postText: e.target.value });
                }}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "3em",
                  border: "0.5px solid #1da1f2",
                  outline: "0",
                }}
                placeholder="Survey Name"
              ></input>
            </div>
        <div
              style={{
                width: "90%",
                marginLeft: "5%",
                marginTop: "10px",
                textAlign: "left",
                padding: "10px",
                borderWidth: "thin",
                border: "0.5px solid #bab3a0",
                borderRadius: "10px",
              }}
            >
              <p>Options for Polls</p>
              <input
                style={{
                  width: "80%",
                  height: "3em",
                  border: "0.5px solid ",
                  outline: "0",
                }}
                placeholder="Choice 1"
              ></input>
              <input
                style={{
                  width: "80%",
                  height: "3em",
                  border: "0.5px solid ",
                  outline: "0",
                  marginTop: "1em",
                }}
                placeholder="Choice 2"
              ></input>
              {this.state.noOfOptions > 2 ? (
                <>
                  {this.state.noOfOptions === 3 ? (
                    <input
                      style={{
                        width: "80%",
                        height: "3em",
                        border: "0.5px solid ",
                        outline: "0",
                        marginTop: "1em",
                      }}
                      placeholder="Choice 3"
                    ></input>
                  ) : (
                    <>
                      <input
                        style={{
                          width: "80%",
                          height: "3em",
                          border: "0.5px solid ",
                          outline: "0",
                          marginTop: "1em",
                        }}
                        placeholder="Choice 3"
                      ></input>
                      <input
                        style={{
                          width: "80%",
                          height: "3em",
                          border: "0.5px solid ",
                          outline: "0",
                          marginTop: "1em",
                        }}
                        placeholder="Choice 4"
                      ></input>
                    </>
                  )}
                </>
              ) : null}
              {this.state.noOfOptions < 4 ? (
                <p
                  style={{
                    fontSize: "22px",
                    marginTop: "1em",
                    cursor: "pointer",
                    color: "#1da1f2",
                  }}
                  onClick={() =>
                    this.setState({ noOfOptions: this.state.noOfOptions + 1 })
                  }
                >
                  Add more +
                </p>
              ) : null}
            </div>
            <div style={{ marginTop: "1em" }}>
              <button
                styl  e={{
                  border: "1px solid",
                  backgroundColor: "#1da1f2",
                  fontSize: "18px",
                  color: "white",
                  width: "50%",
                }}
              >
                Post Survey
              </button>
            </div>
      </>
    )}
}   
            
          