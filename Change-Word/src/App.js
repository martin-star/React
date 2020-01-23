import React from 'react';
import Form from './components/form/Form'
import Word from './components/word/Word'
import './styles.css';

function App() {
  return (
    <React.Fragment>
      <main>
    <header className='app-header'>

      <h1>Change Word App</h1>
      <h2 className='word'><Word /></h2>
      <div className='figures'>
      <img src="/img/redux-0.svg" alt="MDN" style={{width:'100px'}}/>
      <img src="/img/react.svg" alt="MDN" style={{width:'100px'}}/>

      </div>
    </header>
    <div className="App">
      <p>WRITE A NEW WORD!</p>
      <Form/>
     
    </div>
    </main>
</React.Fragment>

  );
}

export default App;
