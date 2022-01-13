import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello world!</h1>
      <FuncComp initNumber={2}/>
      <ClassComp initNumber={2}/>
    </div>
  );
}

let funcStyle = 'color:blue';
let funcId = 0;
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

  //param : 함수
  useEffect(function(){
    console.log('%cfunc => useEffect cycle>(componentDidMount & componentDidUpdate) '+ (++funcId), funcStyle);
    document.title = `${funcId}`;
    //side effect : 컴포넌트 렌더링과 상관없는 다른 요소에 대한 조작. 이걸 하기 위한 함수가 useEffect
  });

  console.log('%cfunc => render '+ (++funcId), funcStyle);
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

let classStyle = 'color:red';
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString()
  }

/*  componentWillMount(){ //현재는 사용을 지양하도록 권고
    console.log('%cclass => componentWillMount', classStyle);
  }

  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }

  shouldComponentUpdate(){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('%cclass => componentWillUpdate', classStyle);
  }

  componentDidUpdate(nextProps, nextState){
    console.log('%cclass => componentDidUpdate', classStyle);
  }
*/

  render(){
    //console.log('%cclass => render', classStyle);
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