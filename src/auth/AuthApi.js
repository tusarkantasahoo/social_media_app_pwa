import axios from "axios";
import UrlConfig from "../UrlConfig.json";
import {getBaseUrl} from "../utils/Constant.js";
export function Login(loginData) {
var config = {
  method: 'post',
  url: getBaseUrl().baseUrl + UrlConfig.user_login,
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
    url:  getBaseUrl().baseUrl + UrlConfig.user_signup,
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
      url:  getBaseUrl().baseUrl + UrlConfig.user_relogin,
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
        url:  getBaseUrl().baseUrl + UrlConfig.generate_link_for_PW_update,
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
          url:  getBaseUrl().baseUrl + UrlConfig.update_PW_in_DB,
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

        export  function signinUserFromSocialSites(postData) {

          var config = {
            method: 'post',
            url:  getBaseUrl().baseUrl + UrlConfig.signin_fron_social_sites,
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
      
    
  