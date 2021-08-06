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

export function deletePostById(id) {
  console.log("===");
  var config = {
    method: "post",
    url: getBaseUrl().baseUrl + "api/social/delete/",
    headers: {
      // 'Content-Type': 'multipart/form-data'
    },

    data: { postId: id },
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
