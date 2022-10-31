                    // Functional Components

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.


// A React component is simply defined by a function that returns a React Element.

// When creating a Functional Component there are a couple things we have to do in order for it to be a valid component. Each component must:

    // 1.) Import the React library from 'react'
    // 2.) Have a name starting with a capital letter (ex.  SomeFunctionalComponent)
    // 3.) Returns a single parent React Element using JSX (The <div> in the following example is the parent React element)
    // 4.) Exports the component name  (export default SomeFunctionalComponent)


// SomeFunctionalComponent.js

import React from 'react';
    
const SomeFunctionalComponent = (props) => {
    return (
        <div>
            This is our first class component.
        </div>
    )
}
    
export default SomeFunctionalComponent;

// We will be using functional components extensively throughout this course so let's look at a simple implementation of a functional React component:

// PersonCard.js

// import React from 'react';
// const PersonCard = (props) => {
//     return(
//         <div>
//             <h1 style={{color:"red"}}>Instructor Bob</h1>
//             <p>Age: 32</p>
//             <p>Hair Color: purple</p>
//         </div>
//     );
// }
// export default PersonCard;


// Additional Reading:
    // function-and-class-components
        //https://reactjs.org/docs/components-and-props.html#function-and-class-components