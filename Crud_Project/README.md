1- Install mongoose,node,express and dotenv(dotenv is JavaScript applications to manage environment variables)
1.1- dotenv can be used to create .env file for its configuration ==> require("dotenv").config(); in app.js
2- After this we can add constants to .env file and create app.js and server.js. Try to write very less code in app.js.
3- Connect to db. Create separate folder named config and create db.js and the write code to connnect to db in it. After this call it in app.js.
4- Create models(file can be named as user.model.js or userModel.js) or schema.
5- controllers folder --> include callbacks of different routes(app.get()) in it.
6- Similarly Don't write routes in app.js as there could be 100+ routes in a project so instead form a different folder for routes.
7- In routes we have different format than app.get, we use router.get. and than in app.js we use app.use (not app.get) it generally acts as a middleware.
8- Include --> app.use(express.json()); app.use(express.urlencoded({ extended: true })); in app.js to tell express to accept json and urlencoded data.

9-CORS ERROR --> Cross origin request site --> (suppose our frontend and db are hosted in two diffrent cloud. Then in order to access any one, cors error occures which is correct as due to security reasons(two different domains requesting data from each other) browser raise this issue)(for this project not required but can face in future)

10- SOLUTION OF CORS ERROR --> install cors package and include it in app.js.

QUESTIONS ==>
1- Difference between module.exports and export default? --> 27th july class
