import { useContext } from 'react';
import { UserContext } from './Context';

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
      </header>
    </div>
  );
}

export default App;
