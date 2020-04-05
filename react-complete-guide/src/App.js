import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import MyFirstComponent from './Components/MyFirstComponent'
import MySecondCompoment from './Components/MySecondComponent'
import Counter from './Components/CounterComponents/Counter'
import PracticeComponent from './Components/PracticeComponents/PracticeComponent'
import './Components/PracticeComponents/PracticeCounter.css'

class App extends Component {
    state = {
        persons:[
            {name:"Amit_state", age:43},
            {name:"Shreyas_state", age:10},
            {name:"Sourav_state",age:12}
        ]
    };

    switchNameHandler =(newName)=>{
        //console.log("was clicked");
        this.setState({
            persons:[
                {name:newName, age:143},
                {name:"Shreyas_state_state", age:110},
                {name:"Sourav_state_state",age:112}
            ]
        });

    };

    changedNameHandler=(event)=>{
        this.setState({
            persons:[
                {name:"Amit", age:143},
                {name:event.target.value, age:110},
                {name:"Sourav_state_state",age:112}
            ]
        });
    }

  render() {
    return (
      <div className="App">
            <h1>Welcome to the first editing of React</h1>
          <button onClick={()=>this.switchNameHandler("anonymous function")}>Click me </button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              />
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              clicking={this.switchNameHandler.bind(this,"Line_bind")}
              changed={this.changedNameHandler}
          >
              Hey I am children props
          </Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
          />
          <MyFirstComponent/>
          <MySecondCompoment/>
          <Counter by={1}/>
          <MyFirstComponent/>
          <MySecondCompoment/>
          <PracticeComponent by={2}/>
          <MyFirstComponent/>
          <MySecondCompoment/>
          <Counter by={10}/>

      </div>

    );
  }


}

export default App;
