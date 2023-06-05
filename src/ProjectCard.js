import React from 'react'
import snake from './Assets/Snake.gif'
import python from './Assets/images.png'
import logo from './logo.svg'
export default function ProjectCard() {

  return (
    <>
    <main>
       <h1>
        Projects
       </h1>
      <ul>
        Snake Game
        <li>
          <img width = '150px' height= '150px' src={snake} alt="loading..." />
        </li>
      </ul>
         <ul>
        Terminal Emulator
        <li>
          <img width = '150px' height= '150px' src={python} alt="loading..." />
        </li>
      </ul>
            <ul>
        AirChat
        <li>
          <img width = '150px' height= '150px' src={logo} alt="loading..." />
        </li>
      </ul>
       
      </main>
    </>
  )
}