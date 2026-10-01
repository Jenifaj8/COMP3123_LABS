/* 
Purpose:
- Serve multiple paths from an Express server using routes
- Serve a static html file
- Extract GET params (compare with GET query)
*/

const express = require("express")
const app = express()

const SERVER_PORT = process.env.PORT || 3000

// ------------------------ Set up the middleware for Express --------------------
// Serve static files 
// The URL of the webpage can be accessed through localhost:3000/static
app.use("/static", express.static("public"))

// Serve JSON
app.use(express.json())

// Read URL params or queries
// extended: true property in JSON object passed as arg to urlencoded 
// lets us use qs library
app.use(express.urlencoded({extended: true}))

// -------------------------------------------------------------------------------

app.get("/", (request, response) => {
    response.send("<h1>Welcome to the root of the server - using Get method</h1>")
})

app.get("/hello", (request, response) => {
    response.status(200).send("<h1>Welcome to the /hello path on the server</h1>")
})

app.get("/college", (request, response) => {
    const college = {
        name: "George Brown Polytechnic",
        location: "Toronto",
        established: 1967
    }
    response.json(college)
})

app.get("/students", (request, response) => {
    // Validate that the GET url is correct
    if (!request.query.name || !request.query.age) {
        return response.status(400).json({
            error: "Missing query parameters"
        })
    }
    console.log(request.query)
    const name = request.query.name
    const age = request.query.age

    response.json({
        student_name: name,
        student_age: age 
    })

})

app.get("/students/:name/:age", (request, response) => {
    console.log(request.params)

    // if name is null or if age is null --> error
    if(!request.params.name || !request.params.age){
        return response.status(400).json({error: "You must pass in name and age"})
    }
    const name = request.params.name
    const age = request.params.age

    response.json({
        student_name: name,
        student_age: age
    })
})

// -------------- Try using the POST, PUT, DELETE methods
app.post("/students", (request, response) => {
    const student = request.body
    console.log(student)

    const { name, age } = student  //Destructuring

    if(!student.name || !student.age){ // Verification of POST body data
        return response.status(400).json({ error: "Missing either name or age in the body"})
    }
    response.json({
        student_name: name,
        student_age: age
    })
})

// --------------

app.listen(SERVER_PORT, () => {
    console.log("Server is running on Http://localhost: " + SERVER_PORT)
})