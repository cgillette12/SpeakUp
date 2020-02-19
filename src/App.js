/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import "./App.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from '../src/Home'
import Services from '../src/services'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

render(){
  const {open} = this.state;
  if(open){
    return <Services/>
  }
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route path="/service">
          <Services />
        </Route>
      </Switch>
    </HashRouter>
  );
  }
}

export default App;