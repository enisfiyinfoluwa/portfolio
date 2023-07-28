import Header from './components/Header';
import logo from './assets/logo.svg'; 
import Profile from './pages/Profile';
import Projects from './pages/Projects'
import Project from './pages/ProjectDetail'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

const userName = "enisfiyinfoluwa"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo = {logo} />
        <Routes>
          <Route 
            path = '/'
            element = {<Profile userName= {userName} />}/>
          <Route 
            path = '/projects' 
            element = {<Projects userName= {userName}/>}
          />
          <Route
            path= '/projects/:name'
            element= {<Project userName= {userName}/>}
          />

        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
};

export default App;
