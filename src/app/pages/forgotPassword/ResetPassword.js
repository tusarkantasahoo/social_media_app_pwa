import React, { Component } from "react";
import { finalUpdatePasswordInDb } from "../../../auth/AuthApi.js";
export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.match.params.token,
      password: "",
    };
    this._onClickFinalUpdateUpdate = this._onClickFinalUpdateUpdate.bind(this);
  }

  async _onClickFinalUpdateUpdate() {
      var postJson = {
          token:this.state.token,
          password:this.state.password
      }

      console.log(postJson);
    var resetPWResponse = await finalUpdatePasswordInDb(postJson);
    if (resetPWResponse.status === 200) {
        console.log('respo',resetPWResponse);
        alert(resetPWResponse.data.message);
        window.close();
    }
  }
  render() {
    console.log("props", this.props.match.params);
    return (
      <>
        <div className="container-fluid">
          Enter new password
          <div>
            <input
              className="signin-inputfield-password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          Confirm password
          <div>
            <input
              className="signin-inputfield-password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <button
            style={{
              backgroundColor: "blue",
              width: "500px",
              marginLeft: "30px",
            }}
            //  type="submit"
            //  value="Submit"
            onClick={() => this._onClickFinalUpdateUpdate()}
          >
            <p className="submit-button-text">Submit</p>
          </button>
        </div>
      </>
    );
  }
}
