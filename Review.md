# Review Questions

## What is Node.js?
Node.js is a runtime environment used to execute JavaScript applications outside of the browser. It also makes it much easier for code to be shared between the client and the server.
## What is Express?
Express is a framework that adds extra functionality (middleware and routing support) to Node.js
## Mention two parts of Express that you learned about this week.
Using middleware and routing endpoints.
## What is Middleware?
Middleware are functions that get executed in the order they are introduced into the server code. Middleware can be built-in, third party,or custom depending on what is needed. An example of built-in middleware would be "server.use(express.json())", which we used to add support for parsing JSON content out of the request body.
## What is a Resource?
 A Resource is part of the REST architectural style. It is the key abstraction of information.
## What can the API return to help clients know if a request was successful?
A request should be followed up with a response, which is the data sent to the client. That response could be a successful status code or an error.
## How can we partition our application into sub-applications?
One effective method for this is to break apart your application into single URLs per resource, and executing different code base on the method used. Applications can also be broken into sub-applications based on their CRUD method.
## What is express.json() and why do we need it?
express.json() adds support for parsing JSON content outside of the request body.