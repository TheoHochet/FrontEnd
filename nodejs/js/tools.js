const axios = require("axios");


function getstrapi(category, name, cat) {

    name = name.toLowerCase();

    // Fetch and filter articles
    const url = 'http://localhost:1337/api/' + category; // Adjust the URL based on your Strapi setup

    return axios.get(url, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ec13806587161d9b00d0c7b599a8dcb62c3c12f023168c63fa6dd310a1f04315f738bb93f899c43f43d713092fccb857d87c7198a0755f9bb51d9d3569aaa2fa368fab3afa99644ce5817bf7519b646c2cb42e338a12b89a02cce65da5c1b9af74dfac27d06e8369f8edfb4062a6c42d5be0886eef183e634e1b7f8705dff712` 
    }
    })
    .then(response => {
        // Access the 'data' array from the response
        const articles = response.data.data || [];

        // Filter articles where 'Name' matches 'MCDO' (case-insensitive)
        const filteredArticles = articles.filter(article =>
            article[cat].toLowerCase() === name
        );

        // Send the filtered articles as the response
        return filteredArticles; // Pretty print JSON with indentation
    })
    .catch(error => {
        // If there's an error, return an error message with status code 500
        console.log(error);
        return null;
    });

}


function getstrapiall(category, name) {

    name = name.toLowerCase();

    // Fetch and filter articles
    const url = 'http://localhost:1337/api/' + category; // Adjust the URL based on your Strapi setup

    return axios.get(url, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ec13806587161d9b00d0c7b599a8dcb62c3c12f023168c63fa6dd310a1f04315f738bb93f899c43f43d713092fccb857d87c7198a0755f9bb51d9d3569aaa2fa368fab3afa99644ce5817bf7519b646c2cb42e338a12b89a02cce65da5c1b9af74dfac27d06e8369f8edfb4062a6c42d5be0886eef183e634e1b7f8705dff712` 
    }
    })
    .then(response => {
        // Access the 'data' array from the response
        const articles = response.data.data || [];

        // Send the filtered articles as the response
        return articles; // Pretty print JSON with indentation
    })
    .catch(error => {
        // If there's an error, return an error message with status code 500
        console.log(error);
        return null;
    });

}


module.exports = {getstrapi, getstrapiall,};