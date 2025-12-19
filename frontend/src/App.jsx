import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  const greet = "good morniiiiing";
  const visits = 30;
  const wikiLink = "http://www.wikipedia.com";

  return (
    <>
      <Navbar />
      
      <div className='text-[#e3c637]'>{ greet }</div>
      <div className='text-[#e53c4a] text-sm font-mono'>There are { visits } people who visited this.</div>

      <a href={ wikiLink }>Wiki!</a>
    </>
  )
}

export default App
