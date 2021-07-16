import axios from "axios";

export function Login(loginData) {
var config = {
  method: 'post',
  url: 'http://localhost:5000/api/auth/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : loginData
};

return new Promise((resolve, reject) => {
  axios(config)
  .then(function (response) {
    console.log("response",response);
    resolve(response);
  })
  .catch(function (error) {
    console.log("error:",error);
  });
})
}

export  function Signup(signupData) {
  var config = {
    method: 'post',
    url: 'http://localhost:5000/api/user/store',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : signupData
  };
  
  return new Promise((resolve, reject) => {
    axios(config)
    .then(function (response) {
      console.log("response",response);
      resolve(response);
    })
    .catch(function (error) {
      console.log("error:",error);
    });
  })
  }

  export  function userReloginCheckToken(token) {
    console.log("inside api",token)
    var data = "";
    var config = {
      method: 'post',
      url: 'http://localhost:5000/api/auth/relogin',
      headers: { 
        'Authorization': `Bearer ${token}`, 
      },
      data : data
    };
    
    return new Promise((resolve, reject) => {
      axios(config)
      .then(function (response) {
        console.log("response",response);
        resolve(response);
      })
      .catch(function (error) {
        console.log("error:",error);
      });
    })
    }

    export  function generateLinkForPasswordUpdate(postData) {

      var config = {
        method: 'post',
        url: 'http://localhost:5000/api/auth/resetPasswordMail',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : postData
      };
      
      return new Promise((resolve, reject) => {
        axios(config)
        .then(function (response) {
          console.log("response",response);
          resolve(response);
        })
        .catch(function (error) {
          console.log("error:",error);
        });
      })
      }

      export  function finalUpdatePasswordInDb(postData) {

        var config = {
          method: 'post',
          url: 'http://localhost:5000/api/auth/updatePassword',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : postData
        };
        
        return new Promise((resolve, reject) => {
          axios(config)
          .then(function (response) {
            console.log("response",response);
            resolve(response);
          })
          .catch(function (error) {
            console.log("error:",error);
          });
        })
        }
    
  