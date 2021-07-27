import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from 'assets/imgs/logo.svg';

function Tab({name, path}) {
  return (
    <Link className="tab" to={path} > {name} </Link>
  )
}

function Header({name, children}) {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <img src={logo} alt="logo" />
          <h2>Suhyunified React</h2>
        </div>

        <div className="header-tabs">
          <Tab name="Home" path="/"></Tab>
          <Tab name="ToDo" path="/todo"></Tab>
          <Tab name="Basic"></Tab>
        </div>
      </header>
    </>
  )
}

export default Header