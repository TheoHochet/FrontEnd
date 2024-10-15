//Load HTTP module
const http = require("http");
const axios = require("axios");
const hostname = "127.0.0.1";
const port = 3000;

// Define the URL of your Strapi API endpoint
// const url = 'http://localhost:1337/api/restaurants'; // Adjust this URL based on your Strapi setup

/*
// Make a GET request to the Strapi API
axios.get(url, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ec13806587161d9b00d0c7b599a8dcb62c3c12f023168c63fa6dd310a1f04315f738bb93f899c43f43d713092fccb857d87c7198a0755f9bb51d9d3569aaa2fa368fab3afa99644ce5817bf7519b646c2cb42e338a12b89a02cce65da5c1b9af74dfac27d06e8369f8edfb4062a6c42d5be0886eef183e634e1b7f8705dff712` 
        }
})
.then(response => {
    // Debugging the response structure (already seen the response, so this can be removed if not needed)
    console.log('Response Data:', JSON.stringify(response.data, null, 2));

    // Access the 'data' array from the response
    const articles = response.data.data || []; // Safeguard in case 'data' is undefined

    // Filter articles where 'Name' field (case-insensitive) matches 'MCOD'
    const filteredArticles = articles.filter(article =>
        article.Name.toLowerCase() === 'mcdo'.toLowerCase()
    );

    console.log('Filtered Articles:', filteredArticles);
})
.catch(error => {
    console.error('Error occurred:', error);
});
*/

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  // Fetch and filter articles
  const url = 'http://localhost:1337/api/restaurants'; // Adjust the URL based on your Strapi setup

  axios.get(url, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ec13806587161d9b00d0c7b599a8dcb62c3c12f023168c63fa6dd310a1f04315f738bb93f899c43f43d713092fccb857d87c7198a0755f9bb51d9d3569aaa2fa368fab3afa99644ce5817bf7519b646c2cb42e338a12b89a02cce65da5c1b9af74dfac27d06e8369f8edfb4062a6c42d5be0886eef183e634e1b7f8705dff712` 
    }
  })
  .then(response => {
    // Access the 'data' array from the response
    const restaurants = response.data.data || [];

    // Filter articles where 'Name' matches 'MCOD' (case-insensitive)
    const filteredArticles = restaurants.filter(restaurant =>
        restaurant.Name.toLowerCase() === 'mcdo'.toLowerCase()
    );

    // Send the filtered articles as the response
    res.end(JSON.stringify(filteredArticles, null, 2)); // Pretty print JSON with indentation
  })
  .catch(error => {
    // If there's an error, return an error message with status code 500
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to fetch data" }));
  });
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});