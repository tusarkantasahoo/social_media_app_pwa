import React, { Component } from "react";
import  {generateLinkForPasswordUpdate} from "../../../auth/AuthApi.js";
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this._onClickSendEmailForVerification = this._onClickSendEmailForVerification.bind(this);
  }


  async _onClickSendEmailForVerification(){
      var postJson = {
          email:this.state.email
      }
    var passwordresetresponse = await generateLinkForPasswordUpdate(postJson);

    if(passwordresetresponse.status === 200){
        alert(passwordresetresponse.data.message);
    }
  }

  render() {
    return (
      <>
        Please enter Email to reset password
        <div>
          <input
            style={{ width: "500px", marginTop: "30px", marginLeft: "30px" }}
            type="text"
            name="name"
            placeholder="Email, username or Phone No"
            onChange={(e) => {
              this.setState({ email: e.target.value });
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
              onClick={()=>this._onClickSendEmailForVerification()}
        >
          <p className="submit-button-text">Submit</p>
        </button>
      </>
    );
  }
}
