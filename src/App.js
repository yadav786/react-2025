import { useContext } from 'react';
import { UserContext } from './Context';
import './assets/css/app.scss';

function App() {
  const val = useContext(UserContext);
   return (
    <div className="App">
      <header className="App-header">
        <UserContext.Consumer >
          {
            value => <button>UserContext Consumer Value {value}</button>
          }
        </UserContext.Consumer>        <p>
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
