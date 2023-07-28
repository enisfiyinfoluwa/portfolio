import Header from './components/Header';
import logo from './assets/logo.svg'; 
import Profile from './pages/Profile';
import Projects from './pages/Projects'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo = {logo} />
        <Routes>
          <Route 
            path = '/'
            element = {<Profile userName= 'octocat' />}/>
          <Route 
            path = '/projects' 
            element = {<Projects userName= 'octocat'/>}
          />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
