import React from "react";
import UploadImage from './components/UploadImage'
import './styles.css'

function App() {
  
  return (
    <main>
      <header className='header-upload-app'> 
      <img className='react-logo' src='/img/logo192.png' alt='react-log'/>
      <h1 className='title-app'>Upload Image</h1>
      </header>
    <div className="App" style={{ padding: "3rem" }}>
   
      <UploadImage/>
      </div>
      </main>
  );
}

export default App;
