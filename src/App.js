import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <FuncComp initNumber={2}/>
      <ClassComp initNumber={2}/>
    </div>
  );
}

function FuncComp(props){
  return (
    <div className="container">
      <h2>function style component</h2>
        <p>Number : {props.initNumber}</p>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber
  }
  render(){
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={function(){
          this.setState({number: Math.round(Math.random()*100000)})
        }.bind(this)}
        />
      </div>
    );
  }
}

export default App;