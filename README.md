# Simple RESTful API

A basic RESTful API built with Node.js and Express to manage users. Demonstrates CRUD operations, middleware, validation, and in-memory data storage.



## Features
- GET /users – Fetch all users  
- GET /users/:id – Fetch a user by ID  
- POST /user – Add a new user  
- PUT /user/:id – Update user details  
- DELETE /user/:id – Delete a user  

- Middleware: Logs requests, validates required fields (`firstName`, `lastName`, `hobby`)  
- Error handling: Proper HTTP status codes (200, 201, 400, 404)  


## Installation
    git clone https://github.com/Yuvraj-Jangir/SimpleRESTfulAPI.git
    cd SimpleRESTfulAPI
    npm install
    node index.js


## 
