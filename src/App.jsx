import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './Info.jsx'
import About from './About.jsx'
import Interests from './Interests.jsx'
import Links from './Links.jsx'
import './About.css'
import './Info.css'
import './Interests.css'
import './Links.css'
import './index.css'


export default function App(){
  return (
    <div className='about'>
      <Info/>
      <About/>
      <Interests/>
      <Links/>
    </div>
  )
}