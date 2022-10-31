                    // Composing Pages Using JSX

// JSX (JavaScript XML) is an extension to JavaScript that allows us to write code that closely resembles HTML without having to make it a string. This is the preferred way to use React.

// function App() {
//     return (
//         <h1>Hello World</h1>
//     );
// }


// Notice how above we make a react component called App and it returns what appears to be an HTML <h1> tag. Whatever content we wish to make visible on the page, we can write it using a syntax we are already familiar with.

// We are able to use any HTML tags that we are already familiar with, try out some like:
    // table
    // ul
    // form
    // input
    // img


                    // Some rules to keep in mind

// We aren't free to put in just anything we want to however.


                    // JSX Expressions must have one Parent Element

// Consider the example code...

// function App() {
//     return (
//         <h1>Hello World</h1>
//         <p>This is a paragraph</p>        
//     );
// }


// When we are working with JSX, we need to ensure that our code being returned exists inside of one JSX element. The above example will fail to compile with the error message...

    // ./src/App.js  
    // Line 6:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?


// Another error you may find is shown in your VSCode editor stating: JSX expressions must have one parent element

// We can either place the above elements inside of a single tag like <div> or if we don't want to introduce additional elements into the DOM, we are able to make use of a JSX "fragment" as the error message above alludes to.

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <p>This is a paragraph</p>        
        </>
    );
}


                    // JSX versions of certain HTML attributes

// Consider the following snippet.
    // <h1 class="my-class">This is HTML</h1>

// If we were to try to use this in JSX, we might come up with something like...
function App() {
    return (
        <>
            <h1 class="my-class">This is JSX</h1>
        </>
    );
}


// In ES6 we have a class keyword that refers to object oriented programming and now this attribute referring to styling. This is more than a little ambiguous, and when we're working with JSX, we will get an error in our console telling us...

// Warning: Invalid DOM property `class`. Did you mean `className`?    
//     in h1 (at App.js:5)    
//     in App (at src/index.js:6)


// When using the HTML class attribute, we will need to instead use the className attribute in JSX.
function App() {
    return (
        <>
            <h1 className="my-class">This is JSX</h1>
        </>
    );
}

// Consider the example where we might have a form in HTML.
    // <form action="/process" method="post">    
    // <div class="form-group">        
    //     <label for="email">Email:</label>        
    //     <input type="text" id="email" name="username" class="form-control" />    
    // <div>
    // </form>


// If we were to rewrite this into JSX, how should React know to handle the for on line 3 as the HTML version of for and not as a JavaScript for?
// function App() {
//     return (
//         <form action="/process" method="post">                
//             <div className="form-group">                    
//                 <label htmlFor="email">Email:</label>                    
//                 <input type="text" id="email" name="username" className="form-control" />                
//             <div>            
//         </form>        
//     );
// }


// To avoid this confusion in React, where we would normally use the HTML for attribute, we will need to instead use the htmlFor attribute in JSX.

// For more on these differences, please read the excellent official documentation.
    // https://reactjs.org/docs/dom-elements.html
