
import './Header.css' ;
import {Link as RouterLink} from 'react-router-dom';
//import logo from '../logo.svg'; 

function Header({logo}) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>My Portfolio</h1> 
          <nav>
            <RouterLink to ='/' className= 'App-link'>About Me</RouterLink>
            <RouterLink to ='/projects'  className= 'App-link'>Projects</RouterLink>
          </nav>
        </header>
      </div>
    );
  }
  
  export default Header;