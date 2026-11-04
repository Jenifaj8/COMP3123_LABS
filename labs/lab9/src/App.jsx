/*
This is going to be our first and top level componenet. Written with functional
component syntax and will be injected into the top level of the React Vite application.

*/

import College from "./components/College"
import Student from "./components/Student"

const title = "React using Vite"
const titleStyle = { color: "green" }
const courses = ["JavaScript", "React", "Node.js"]

function App() { // Functional component will automatically inherit from the base functional component from React.
    return (
        <section>
            <h1 style={titleStyle}>{title}</h1>

            <ul>
                {
                courses.map((course) => 
                    <li key={course}>{course}</li>
                )
                }

            </ul>
            
            <College name="GBP" city="Toronto"></College>

            <Student firstName="Jenifa" lastName="Joseph"></Student>
        </section>
    )

}
export default App