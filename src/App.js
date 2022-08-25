//added to convert to a component
//import { Component } from 'react';
import { useState, useEffect } from 'react';
//import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-component';
import './App.css';





const App = () => {
  const [searchField, setSearchField] = useState(''); //use state gives us an array [value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //this is a hook, we are passing no dependencies causing it to only happen once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);
  
  useEffect(() => {
      const newFilteredMonsters = monsters.filter( (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

      setFilteredMonsters(newFilteredMonsters);
    },[monsters,searchField] )


  //search change handler
  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
}


  // const filteredMonsters = monsters.filter( 
  //   (monster) => {
  //     return monster.name.toLocaleLowerCase().includes(searchField);
  // } );

    return(
      <div className="App">
        <h1 className='app-title'>{ title }</h1>

        <SearchBox  onChangeHandler = {onSearchChange} 
        placeholder="Search Monsters"
          className="monsters-search-box"
        />
        <br />
        <SearchBox  onChangeHandler = {onTitleChange} 
        placeholder="set title"
          className="title-search-box"
        />

        <CardList monsters={filteredMonsters} />

      </div>
)
}




// //removed to convert to a class: function App() {
// class App extends Component {
//   //added to convert to class
//   constructor(){
//     //run super with the constructor
//     super();

//     //we are adding a list of key, value pairs and setting the value for the keys
//     //we can use objects in the value as below, all we are doing here is initizializing the state
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
    
//   }

//   //lifecycle methods, this will run whenever a component is mounted
//   //mounting happens the first time the component is rendered to the DOM and only happens once in its lifetime
//   //if you want an API request, put it in a component mount
//   //every .then returns a promise that is resolved
//   //promises handle async events
//   componentDidMount(){

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState( () => {
//         return {monsters:users}
//       }
//       ) )
//   }


// onSearchChange = (event) => { 
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(
//     () => {
//       return {searchField};
//     }
//   );
// }



// /*
// this component represents the entire app

// the map method allows you to iterate through every element in the array and gives you back a new array
// you leverage a function to force javascript to invoke the function on every element in an array

// A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)
// */
// //this renders the initial state THEN it runs the lifecycle method.
// render(){


//   const { monsters, searchField } = this.state;
//   const { onSearchChange } = this;

//   const filterMonsters = monsters.filter( 
//     (monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//   } );


//   return (
//     <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>

//       <SearchBox  onChangeHandler = {onSearchChange} 
//       placeholder="Search Monsters"
//         className="monsters-search-box"
//       />
//       <CardList monsters={filterMonsters} />

//     </div>
    
//   );
// } 

// }

export default App;
