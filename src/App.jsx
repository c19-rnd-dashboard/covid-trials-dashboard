import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { css } from 'emotion'

import './App.css'

import Vaccines from './routes/vaccines/Vaccines'
import Treatments from './routes/treatments/Treatments'

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Switch>
        <Route path='/vaccines' component={Vaccines} />
        <Route path='/treatments' component={Treatments} />
      </Switch>
    </div>
  )
}

export default App

// TODO (daniel): Move the next two compoents elsewhere
function Header() {
  return (
    <div className='headerBanner'>
      Coronavirus (COVID-19) Research and Development Dashboard
    </div>
  )
}

const navbar = css`
  padding: 1.5em 1em;
  background-color: rgba(255, 255, 255, 0.1);
  & a {
    color: #ddd;
    margin: 0 10px 0;
    text-decoration: none;
    &:active {
      color: #fff;
    }
  }
`

function Navbar() {
  return (
    <div className={navbar}>
      <Link to='/treatments'>Treatments</Link>
      <Link to='/vaccines'>Vaccines</Link>
    </div>
  )
}
