
import './Header.css' ;
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
        </header>
      </div>
    );
  }
  
  export default Header;