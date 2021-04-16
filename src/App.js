// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     console.log('constructor');
//     super(props);
//     this.state = {
//       name: "Suraj",
//       age: 24,
//       printA: () => console.log('hello')
//     }
//   }

//   componentDidMount() {
//     console.log('this is compoent did mount')
//   }

//   onIncrementAge = () => {
//     this.setState({
//       age: this.state.age + 1
//     }, ()=>{
//       console.log('incrementing age', this.state.age);
//     })
//   }

//   onDecrementAge = () => {
//     this.setState({
//       age: this.state.age - 1
//     }, ()=>{
//       console.log('decrementing age', this.state.age);
//     })
//   }  

//   onChangeName = () => {
//     this.setState({
//       name: 'Muhassin'
//     })
//   }

//   componentWillUnmount() {
//     console.log('This is last life cycle');
//   }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   // if(nextState.age !== this.state.age) return false;
//   //   if(nextState.name !== this.state.name) return true;
//   //   return false;
//   // }

//   render() {
//     console.log('rendering');
//     return(
//       <>
//         <p>{this.state.name} has age {this.state.age}</p>
//         <button onClick={this.onIncrementAge}>Increment Age</button>
//         <button onClick={this.onDecrementAge}>Decrement Age</button>
//         <button onClick={this.onChangeName}>Change Name</button>        
//       </>
//     );
//   }
  
// };

import React from 'react';

const App = props => {
  const [name, setName] = React.useState("Suraj");
  const [age, setAge] = React.useState(24);

  React.useEffect(()=> {
    console.log('This is component did mount');
    return ()=>{
      // unmount
      console.log('This is end of life cycle');
    }
  }, []);

  React.useEffect(()=>{
    // this happens in componentDidMount
    console.log('Age changes....');
  }, [age]);

  React.useEffect(()=>{
    console.log('Name changes ...');
  }, [name])

  const onIncrementAge = () => {
    setAge(age + 1);
  }

  const onDecrementAge = () => {
    setAge(age - 1);
  }

  return (
    <>
      <p>{name} has age {age}</p>
      <button onClick={onIncrementAge}>Increment Age</button>
      <button onClick={onDecrementAge}>Decrement Age</button>      
    </>
  );
}

export default React.memo(App);