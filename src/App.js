import React, { Component } from "react";
import  _Input from "./components/Input";
import {  Grid } from "@material-ui/core";

import { Email,PermIdentity,Lock
} from '@material-ui/icons';

const username  = {
  id :  "username_id",
  label : "Username",
  type : "varchar",
  value : "",
  length : 50,
}
const password  = {
  id :  "password_id",
  label : "Password",
  type : "password",
  value : "",
  length : 50,
}
const email  = {
  id :  "email_id",
  label : "Email",
  type : "email",
  value : "",
  length : 50,
}
class App extends Component {
 
  onchange  = (event ,id,value) =>{
    console.log(value);
  }
  render() {
   
    return <Grid spacing={16} container>

<_Input
      id={username.id}
      length={username.length}
      value={username.value}
      type={username.type} 
      onchange={this.onchange}
      label={username.label}
     icon={<PermIdentity />}
    />

<_Input
      id={email.id}
      length={email.length}
      value={email.value}
      type={email.type} 
      onchange={this.onchange}
      label={email.label}
     icon={<Email />}
    />

<_Input
      id={password.id}
      length={password.length}
      value={password.value}
      type={password.type} 
      onchange={this.onchange}
      label={password.label}
     icon={<Lock />}
    />
    </Grid>;
  }
}

export default App;
