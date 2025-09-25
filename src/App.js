// import React ,{useEffect, useState}from 'react'

// // import Three from './components/three'
// // import Two from './components/two'
// //import One from './components/one'
// const App=()=>{
//   return ()
//    // <>
//     //* <h1>This is my number {counter}</h1>
//     //<button onClick={minusClick}>MINUS</button>
//     //<button onClick={plusClick}>ADD</button> */}
//      //* <button onClick={showOne}>showOne</button>
//     //<One />
//     //<Two />
//     //<Three/> 
//     //</> */}
//   //)
// }
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './project/Home'
import Profile from './project/Profile'
import About from './project/About'
function App(){
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
    <Route path="/Profile" element={<Profile />} />
  <Route path="/user/:userid" element={<Profile/>}/>
          
        </Routes>
        </div>
    </Router>
  );
}
export default App;