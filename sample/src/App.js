import React,{Component} from 'react';


class App extends Component{
  render(){
    return(
      <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() =>{console.log("I am clicked.")}} />
      </React.Fragment>
    )
  }
}

const Cat = ()=>{
  return <div>meow!</div>
}

export default App;
