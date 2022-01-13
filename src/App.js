import React, {useState} from 'react';
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
  let numberState = useState(props.initNumber);
  /**
   * 위 구문 자체가 state를 초기화 하는 것
   * useState 파라미터로 props.initNumber를 넣으면 상위 컴포넌트에서 넘어온 값으로 초기화 하겠다는 것이고
   * 다른 숫자를 넣으면 그걸로 초기화 됨
   */
  let number =  numberState[0];
  let setNumber = numberState[1];
  /**
   * useState로 가져온 리스트에서 두번째 요소가 setState이다
   * 바로 변수로 선언해서 .bind(this) 없이 컴포넌트 내부에서 사용 가능!
   */

  //let dateState = useState(new Date().toString());
  // let date = dateState[0];
  // let setDate = dateState[1];
  let [date, setDate] = useState(new Date().toString());
  /**
   * 이렇게도 쓸 수 있음(javascript 문법임)
   */

  return (
    <div className="container">
      <h2>function style component</h2>
        <p>Number : {number}</p>
        <p>date : {date}</p>
        <input type="button" value="random" onClick={function(){
          setNumber(Math.round(Math.random()*1000));
        }.bind(this)}
        />
        <input type="button" value="date" onClick={function(){
          setDate(new Date().toString());
        }.bind(this)}
        />
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString()
  }
  render(){
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>date : {this.state.date}</p>
        <input type="button" value="random" onClick={function(){
          this.setState({number: Math.round(Math.random()*100000)})
        }.bind(this)}
        />
        <input type="button" value="date" onClick={function(){
          this.setState({date: new Date().toString()})
        }.bind(this)}
        />
      </div>
    );
  }
}

export default App;