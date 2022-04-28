import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/Signup';
import Info from './component/Info';

export default function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/info">Info</Link>
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
                  <Route exect path='/info' element={<Info/>} />
              </Routes>
          </div>
      </Router>
  );
}


function signin() {
  return <h2>SignIn</h2>;
}

function signup() {
  return <h2>SignUp</h2>;
}

function info() {
    return <h2>Info</h2>;
}