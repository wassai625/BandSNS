import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/Signup';

function App() {
  return (
    <div className="App">
      <App />
    </div>
  );
}
class Root extends Component {
  render() {
    return <h1>rootです</h1>;
  }
}
class PageA extends Component {
  render() {
    return <h2>PageA</h2>;
  }
}
class PageB extends Component {
  render() {
    return <h2>PageB</h2>;
  }
}

export default class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <h1>ルーティング先を選択</h1>
        <Route exact path='/' component={Root} />
        <Route path='/pageA' component={PageA} />
        <Route path='/PageB' component={PageB} />
      </BrowserRouter>
    );
  }
}