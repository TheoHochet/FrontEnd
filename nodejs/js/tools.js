const axios = require("axios");


function getstrapi(category, name, cat) {

    name = name.toLowerCase();

    // Fetch and filter articles
    const url = 'http://localhost:1337/api/' + category; // Adjust the URL based on your Strapi setup

    return axios.get(url, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 27fcd4abb75ec0502390eafaa4dc3d2ec60edd8a19e4897d69a9c12c3b1c0a9e332e4e453fe3ba597b3ee6ad82133fd2224eb1e278bc219c5d551ccf00e967e5e781e05a9fd1133a13a977b451308b8129096e1e10fcc3106bca5b0f50e9ad823aea90d89af1bb6bf578cc3069f90a55b7b76eec4ff82a25f15e54ffc366cedd` 
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
        Authorization: `Bearer 27fcd4abb75ec0502390eafaa4dc3d2ec60edd8a19e4897d69a9c12c3b1c0a9e332e4e453fe3ba597b3ee6ad82133fd2224eb1e278bc219c5d551ccf00e967e5e781e05a9fd1133a13a977b451308b8129096e1e10fcc3106bca5b0f50e9ad823aea90d89af1bb6bf578cc3069f90a55b7b76eec4ff82a25f15e54ffc366cedd` 
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