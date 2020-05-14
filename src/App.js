import React from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import './App.scss'

import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/projects', name: 'Projects', Component: Home },
  { path: '/about', name: 'About', Component: Home },
  { path: '/services', name: 'Services', Component: Home },
  { path: '/contact', name: 'Contact', Component: Home },
]

function App() {
  return (
    <Router>
      <div className='App'>
        <div className=''>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames='page'
                  unmountOnExit
                >
                  <div className='page'>
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </div>
    </Router>
  )
}

export default App
