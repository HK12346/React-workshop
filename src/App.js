import React ,{useEffect, useState}from 'react'
import Three from './components/three'
import Two from './components/two'
import One from './components/one'
const App=()=>{
  return (
    <>
    {/* <h1>This is my number {counter}</h1>
    <button onClick={minusClick}>MINUS</button>
    <button onClick={plusClick}>ADD</button> */}
    <button onClick={showOne}>showOne</button>
    <One />
    <Two />
    <Three/>
    </>
  )
}
