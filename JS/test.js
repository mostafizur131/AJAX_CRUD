// 01. Solved With Axios package

//const axios = require("axios"); if installed AXIOS package or link with AXIOS file

const url = "https://api.example.com/data";
const data = { name: "John", age: 30 };

axios
  .post(url, data)
  .then(function (response) {
    // Request successful, handle the response
    handleResponse1(response.data);
  })
  .catch(function (error) {
    // Request failed, handle the error
    console.error("Error:", error);
  });

function handleResponse1(responseData) {
  // Handle the response data here
  console.log("Response:", responseData);
}

// 02.Solved with JS fetch API

const configuration = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

fetch(url, configuration)
  .then((response) => response.json())
  .then(handleResponse2)
  .catch((error) => console.error(error));

function handleResponse2(responseData) {
  // Handle the response data here
  console.log("Response:", responseData);
}
