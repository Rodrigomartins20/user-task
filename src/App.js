import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <nav id="sidebar-menu">
      <button class="button" id="wharever">
        <a 
          href="https://rodrigomartins20.github.io/user-task/" 
          class="App-link">
          MAIN PAGE
        </a>
       </button>
      </nav>   
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
    </div>
  );
}

export default App;
