import axios from "axios";

export default function Login(loginData) {
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

// export default function Login(loginData) {
  

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// // myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
// // myHeaders.append('Access-Control-Allow-Credentials', 'true');
// myHeaders.append('Accept', 'application/json');

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: loginData,
//    redirect: 'follow',
//   // mode:'no-cors'
// };

// fetch("https://localhost:5000/api/auth/login", requestOptions)
//   .then(response => {
//     console.log(response);
//     // response.json()})
//   })
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// var raw = JSON.stringify({"username":"8342089890","password":"tks12343435"});

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow',
// };

// fetch("http://localhost:5000/api/auth/login", requestOptions)
//   .then(response => {response.JSON()})
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => console.log('error', error));


// }
