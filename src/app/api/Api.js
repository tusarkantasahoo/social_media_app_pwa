import axios from "axios";
import UrlConfig from "../../UrlConfig.json";
import { getBaseUrl } from "../../utils/Constant.js";
export function imageFileUpload(payload) {
  console.log("===", payload);
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/social/saveFiles/",
    headers: {
      //  'Content-Type': 'multipart/form-data'
    },
    data: payload,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function createPostData(payload) {
  console.log("===", payload);
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/social/createPost/",
    headers: {
      //  'Content-Type': 'multipart/form-data'
    },
    data: payload,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function getPostsList() {
  console.log("===");
  var config = {
    method: "get",
    url: getBaseUrl().baseUrl + "api/social/all/",
    headers: {
      // 'Content-Type': 'multipart/form-data'
    },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function getFileContentById(id) {
  console.log("===");
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/social/getFileById/",
    headers: {
      // 'Content-Type': 'multipart/form-data'
    },

    data: { id: id },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function deletePostById(item) {
  console.log("===");
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/social/delete/",
    headers: {
      // 'Content-Type': 'multipart/form-data'
    },

    data: item,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function createSurvey(payload) {
  console.log("===");
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/survey/create/",
    headers: {
       'Content-Type': 'Application/json'
    },

    data: payload,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function getSurveyList() {
  console.log("===");
  var config = {
    method: "get",
    url: getBaseUrl().baseUrl + "api/survey/all/",
    headers: {
       'Content-Type': 'Application/json'
    },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function getSurveyById(id) {
  console.log("===");
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/survey/getSurveyById/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: {id:id},
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}


export function getSurveyCratedByUser(data) {
  console.log("===");
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/survey/getSurveyCreatedByUser/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function createCommentForPost(data) {
  console.log("===");
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/social/addComment/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function getCollegeListByselection(data) {
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/academics/filterbyTypeStateCity/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function getCollegeById(data) {
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/academics/findCollegeById/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}


export function getSearchBoxData(data) {
  console.log("Calling get search")
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/academics/searchByAutoFiltr/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function addLikeForPost(data) {
  console.log("Calling get search")
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/social/addLike",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function addResearchComment(data) {
  console.log("Calling get search")
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/survey/researchAnswer/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function giveQuizAnswer(data) {
  console.log("Calling get search")
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/survey/quizAnswer/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function givePollAnswer(data) {
  console.log("Calling get search")
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/survey/pollAnswer/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function getTopColleges(data) {
  console.log("Calling get search")
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/academics/gettopcolleges/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

export function getCollegePosts(data) {
  console.log("Calling get search")
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/Academicspost/getcollegebyid/",
    headers: {
      'Content-Type': 'Application/json'
   },

   data: data,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}






