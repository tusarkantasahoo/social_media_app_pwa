import axios from "axios"; 

export  function imageFileUpload(payload){
    console.log("===",payload)
    var config = {
        method: 'post',
        url: 'http://localhost:5000/api/social/saveFiles/',
        headers: { 
            //  'Content-Type': 'multipart/form-data'
          },
          data : payload,
      };
    
    return new Promise((resolve, reject) =>{
        axios(config)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          console.log(error);
        });
      
})
      
      
}

export  function createPostData(payload){
  console.log("===",payload)
  var config = {
      method: 'post',
      url: 'http://localhost:5000/api/social/createPost/',
      headers: { 
          //  'Content-Type': 'multipart/form-data'
        },
        data : payload,
    };
  
  return new Promise((resolve, reject) =>{
      axios(config)
      .then(function (response) {
        resolve(response)
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

export  function getPostsList(){
  console.log("===",)
  var config = {
      method: 'get',
      url: 'http://localhost:5000/api/social/all/',
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

export  function getFileContentById(id){
  console.log("===",)
  var config = {
      method: 'post',
      url: 'http://localhost:5000/api/social/getFileById/',
      headers: { 
          // 'Content-Type': 'multipart/form-data'
        },

        data : {id:id}
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


