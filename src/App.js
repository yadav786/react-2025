import { useContext } from 'react';
import { UserContext } from './Context';
import Jira from './Jira';
import './assets/css/app.scss';

function App() {
  const val = useContext(UserContext);
  console.log(val);
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
      <Jira />
    </div>
  );
}

export default App;
