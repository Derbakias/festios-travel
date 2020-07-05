import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from '../src/components/Navbar';
import Subscribe from '../src/components/Subscribe';
import Footer from '../src/components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Festivals from './pages/Festivals';
import Destinations from './pages/Destinations';
import Accomondation from './pages/Accomondation';

export class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <Navbar />
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={{ enter: 300, exit:300 }} classNames={'fade'}>
                <Switch >
                  <Route exact path='/' component={Home} />
                  <Route exact path='/history' component={History} />
                  <Route exact path='/festivals' component={Festivals} />
                  <Route exact path='/destinations' component={Destinations} />
                  <Route exact path='/accomondation' component={Accomondation} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <br/>
          <br/>
          {/* <Subscribe />
          <Footer /> */}
        </Router>
      </main>
    )
  }
}

export default App
