// Props, short for properties, is an empty javascript object that is constructed and passed to every React component by default. To pass props down to our child components, we simply need to add one or more html attributes to our component. Each attribute will become a key in the props object and each value given to that attribute will become the value of that key.



// /src/App.js

// import './App.css';
// import Header from './components/Header';
// function App() {
//   return (
//     <div className="App">
//       // passing in 2 attributes to the Header component through the default props object which will look like this:
//       // {
//       //    "firstName":"Bill",
//       //    "lastName":"Justice"
//       // }
//       <Header firstName={ "Bill" } lastName={ "Justice" } />
//     </div>
//   );
// }
// export default App;



// In our functional components we use an arrow function that accepts an argument, that must be called props. We can access the values being passed down via props.keyName. So, we could write the component like this:

// /src/components/Header.js

// // Here we create the Header Component that will receive props and we know we want to have a users
// //     first and last name
// import React from 'react';

// const Header = (props) => {
//     // We can assume props looks like an object literal with 2 keys and values because of what was passed in
//     // {
//     //    "firstName":"Bill",
//     //    "lastName":"Justice"
//     // }
//     return (
//         <div>
//             <h1>
//                 My name is {props.firstName} {props.lastName}
//             </h1>
//         </div>
//     );
// }
// export default Header;



// We could also simplify access to the values by destructuring our props into local variables this way:
    // const: {firstName, lastName} = props;

// This syntax allows us to create local variables instead of having to use dot notation.  The names inside of the curly brackets MUST match the key names found in the props object. 


// The following is modified to allow you to see destructuring in the same example as above:


// Here we create the Header Component that will receive props and we know we want to have a users
//     first and last name
import React from 'react';
    
const Header = (props) => {
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    // destructuring props in to 2 local variables that MUST match the key names found in the props object
    const { firstName, lastName } = props; 
    return (
        <div>
            <h1>
    		// Destructuring allows us to use them like simple variables
                My name is { firstName } { lastName }
            </h1>
        </div>
    );
}
export default Header;



                        // Flow of Data

// Because the data flow in React flows downward, we use props all the time to pass data down from component to component. 

// We are not limited in the number of attributes we can pass down through our props object. We can pass down anything we want, including functions, using props.

// A Note on Curly Braces: In JSX, we use curly braces to denote a Javascript expression. Typically, you can only send down Strings in props. However, with curly braces, we can send Javascript expressions (assuming they are valid). This includes numbers, strings, functions, objects, etc. Let's look at valid ways to pass down props:

{/* <SomeComponent someProp="test" someOtherProp={ 67 } /> // Valid. We can send normal strings, numbers need curly braces
<SomeComponent someProp={ "test" } someOtherProp={ 67 } /> // Valid. A String is still a Javascript expression
<SomeComponent someProp="test" someOtherProp=67 /> // Invalid. Numbers need curly braces */}


// When in doubt, use curly braces.