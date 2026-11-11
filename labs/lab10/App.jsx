/*
Purpose:
Define the top level component where we will later be able to inject other class and functional componenets into
*/

import { useState } from "react";
// later import your class and functional components here to inject them into App
import Student from "./Student";

function App() {
    const [showStudent, setShowStudent] = useState(true);
    
    // This return in App function component is returning from the implicit render() method
    return(
        <article>
            <h1> Week 10 - React Events and Lifecycle </h1>

            <button onClick={() => setShowStudent(!showStudent)}>
            { showStudent ? "Hide" : "Show"} Student
            </button>

            { showStudent && <Student studentId="111111111" />}
        </article>
    )
}

export default App;