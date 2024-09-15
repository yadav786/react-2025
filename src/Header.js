import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/jira">JIRA</Link>
          </li>
          <li>
            <Link to="/hoc">HOC</Link>
          </li>
        </ul>
      </nav>
    );
  }
 
  export default Header