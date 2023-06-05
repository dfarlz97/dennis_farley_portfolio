import React from 'react'
import ProjectCard from './ProjectCard'
export default function Home() {

  return (
    <>
    <main>
        <header>

      <h1 className='welcome'>
        Welcome to my Portfolio!
      </h1>
      <h2>
        About me
      </h2>
      <p>Hello, my name is Dennis Farley and I am a full stack software developer living in New York City. </p>

      <ProjectCard> </ProjectCard>

        </header>
     
      </main>
    </>
  )
}