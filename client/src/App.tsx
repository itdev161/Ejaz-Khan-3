import React from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Like} from 'react-router-dom';
import Register from './components/Register/Register';
import login from './components/Login/Login';

class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GoodThings</h1>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
            <Link to="/register">Register</Link>
            </li>
            <li>
              <link to="/login">Login</link>
            </li>
          </ul>
        </header>
        <main>
          <Route exact path="/">
        {this.state.data}
        </Route>
      <switch>
        <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component= {Login}/>
          </switch>
      </main>
      </div>

    );
  }
}

export default App;
