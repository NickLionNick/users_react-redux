import React, { Component } from 'react'

import HomeContainer from './container/HomeContainer';
import { BrowserRouter, Route } from "react-router-dom";
import CreateUsersContainer from "./container/CreateUsersContainer";
import EditUserContainer from "./container/EditUserContainer";





export default class App extends Component {
  
 
  
  render() {
    return (
      <div>
        <h1 className="users_header">USERS_LIST</h1>
    
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component= {CreateUsersContainer} />
          <Route path="/edit/:id" exact component= {EditUserContainer} />
        </BrowserRouter>
        
      </div>
    )
  }
}
