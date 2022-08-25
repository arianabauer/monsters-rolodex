//added to convert to a component
import { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

//removed to convert to a class: function App() {
class App extends Component {
  //added to convert to class
  constructor(){
    //run super with the constructor
    super();
    

    //we are adding a list of key, value pairs and setting the value for the keys
    //we can use objects in the value as below, all we are doing here is initizializing the state
    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  //lifecycle methods, this will run whenever a component is mounted
  //mounting happens the first time the component is rendered to the DOM and only happens once in its lifetime
  //if you want an API request, put it in a component mount
  //every .then returns a promise that is resolved
  //promises handle async events

  componentDidMount(){
    console.log('componentdidmount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState( () => {
        return {monsters:users}
      },
      () =>{
        console.log(this.state);
      }
      ) )
  }

/*
-what will be rendered to the application
-the onclick of the button is using a shallow merge and give you a new object
-shallow merge can override any object with any object, so a best practice is to keep them all the same
 a better practice is to use a function 
-this callback is an async call so the state is not getting updated due to how react batches state calls
*/
/*
render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName} who works at {this.state.company}!
          </p>
          <button
            onClick={() =>{
              this.setState( {name:{firstName: 'Test', lastName: 'person'} } );
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  } 
}
*/


/*
-lets use a function now so we can make sure the state is updated on the button we are passing two arugments. the first is a function that returns an object to shallow merge to set state
-we are passing in the first functio the state and props 
-the second argument is going to make it reredner and only run AFTER state changes have been applied
-this is the best pratice to write this
-you can skip the callback if you dont need it
*/
/*
render(){

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name.firstName} {this.state.name.lastName} who works at {this.state.company}!
        </p>
        <button
          onClick={ () => {
             this.setState((state,props) => {
              return{
                name:{firstName: 'Test', lastName: 'person'},
              };
             },
             () => {
              console.log(this.state);
             });

             
          }}
        >
          Change Name
        </button>
      </header>
    </div>
  );
} 
*/


/*
this component represents the entire app

the map method allows you to iterate through every element in the array and gives you back a new array
you leverage a function to force javascript to invoke the function on every element in an array

A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)
*/
//this renders the initial state THEN it runs the lifecycle method.
render(){
  console.log('render')
  return (
    <div className="App">
      {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
             <h1 key={monster.id}>{ monster.name}</h1>
            </div>
        );
      })}
    </div>
    
  );
} 

}

export default App;
