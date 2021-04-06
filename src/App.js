import React from 'react';

// class App extends React.Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       name: 'Riya',
//       smokes: true
//     }

//   }

//   componentWillMount() {

//   }

//   componentDidMount() {

//   }

//   shouldComponentUpdate(prevProps, nextProps) {
//     if(prevProps === nextProps) return false;
//     return false;
//   }

//   componentWillUnmount() {

//   }

//   clickHandler = () => {
//     this.setState({
//       smokes: !this.state.smokes
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Hello my name is {this.state.name} and I {this.state.smokes ? 'do' : 'dont'} smoke</h2>
//         <button onClick={this.clickHandler}>Click Me</button>
//       </div>
//     );
//   }

// }

const App = (props) => {
  const [state, setState] = React.useState({
    name: 'Riya',
    smokes: true
  });

  React.useEffect(()=>{
    // component did mount
    return ()=> {
      // component will unmount
    }
  }, []);

  const clickHandler = () => {
    setState({
      ...state,
      smokes: !state.smokes
    })
  }

  return(
      <div>
        <h2>Hello my name is {state.name} and I {state.smokes ? 'do' : 'dont'} smoke</h2>
        <button onClick={clickHandler}>Click Me</button>
      </div>
  );
}

export default App;