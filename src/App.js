// import logo from './logo.svg';
// import './App.css';
// import HomeComponent from './Home';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <HomeComponent title="first one">
         
//           <div>
//             sample children
//           </div>
//         </HomeComponent>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <HomeComponent title='second one'>inner code second </HomeComponent>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react'
import Table from './Table';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(5);
  // react hooks: useState();
  // let num=0
  const handleIncrement = () => setCount(prev=>prev+1);
  const handleDecrement = () => setCount(prev=>prev-1);
  const handleCount = () => setCount2(12);
  useEffect(() => {
    
    console.log("component rendered")

    return () => {
      console.log("component disconnected")
    }
  }, [count2]) // on rendering the component runs the useeffect

  return (
    <div>
      <button onClick={ handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {/* <button onClick={handleCount}>-</button> */}
      
      <h1>
        {count}
        <br />
        {count2}
      </h1>
      <Table/>
    </div>
  )
}

export default App
