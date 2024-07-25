import React from 'react';
import './App.css';
import Quotes from './Components/Quotes';
import bg from './assets/video.mp4';

function App() {
  return (
    <div id='mainPage' className='w-screen'>
      <video src={bg} autoPlay loop muted></video>
      <Quotes />
    </div>
  );
}

export default App;
