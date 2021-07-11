import axios from "axios";


// export default function Login(loginData) {
//     console.log("Near api login")
//     var config = {
//         method: 'post',
//         url: 'https://localhost:4050/api/login',
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data : JSON.stringify(loginData)
//       };
      
//   axios(config)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }


export default function Login(loginData) {
var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
//  myHeaders.append('no-cors',true);

console.log("loginData");
var raw = JSON.stringify({"username":"ph","password":"pass"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
  mode:"no-cors"
};

fetch("http://localhost:4050/api/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
