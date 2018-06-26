import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import Movies from './movies/Movies';
import MovieDetail from './movie-detail/MovieDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <div className="App">

          <main>
              <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/movies' component={Movies} />
                  <Route exact path='/movie/:id' component={MovieDetail} />
              </Switch>
          </main>
        
      </div>
      </BrowserRouter>

    );

  }
}

export default App;
