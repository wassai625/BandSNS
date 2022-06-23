import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/Signup';
import Home from './component/Home';
import Search from './component/pages/sidebar/sidebarDetail/Search';

export default function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/home">Home</Link>
                      </li>
                      <li>
                          <Link to="/signin">SignIn</Link>
                      </li>
                      <li>
                          <Link to="/signup">SignUp</Link>
                      </li>
                  </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
              <Routes>
                  <Route exect path="/signin" element={<SignIn/>}  />
                  <Route exect path="/signup" element={<SignUp/>}  />
                  <Route exect path='/home' element={<Home/>} />
                  <Route exect path='/Search' element={<Search />} />
              </Routes>
          </div>
      </Router>
  );
}

