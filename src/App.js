import React from 'react'
import Feed from './pages/Feed'
import SinglePostPage from './pages/SinglePost'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Feed}/>
          <Route exact path='/:slug/:id' component={SinglePostPage}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
