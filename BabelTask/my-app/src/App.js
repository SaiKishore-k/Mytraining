import React from 'react';
import image from './assets/Images/img.png'
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
 //import './assets/styles/style.css';
import './assets/styles/style.sass';
 //import './assets/styles/style.scss'
const App = () => {
  return (
    <>
    <h1>webpack babel Task</h1>
    <Component1/>
    <Component2/>
    <Component3/>
    <img src={image}/>
    </>

  )
}

export default App