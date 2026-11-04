/*
We will define a functional component (using a prototype constructor)
Props: name, city

function College(props){
    const name = props.name
    const city = props.city  // Concept of destructuring
    {name, city} = props
} 
    
*/
function College({name, city}){
    // Although this return has not explicitly been put into a render function
    // It will act that way - it will return these jsx omponents to the render function
    return (
        <article>
            The name of the college is: {name}, and city is: {city}
        </article>
    )

}
export default College