import axios from "axios"; 

export  function imageFileUpload(payload){
    console.log("===",payload)
    var config = {
        method: 'post',
        url: 'http://localhost:4000/writeVid/',
        headers: { 
            // 'Content-Type': 'multipart/form-data'
          },
          data : payload,
      };
    
    return new Promise((resolve, reject) =>{
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      
})
      
      
}

export  function getVideo(){
  console.log("===",)
  var config = {
      method: 'post',
      url: 'http://localhost:4000/read',
      headers: { 
          // 'Content-Type': 'multipart/form-data'
        },
    };
  
  return new Promise((resolve, reject) =>{
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    
})
    
    
}
