# Input Generator

You give this component a list of  variable as props ```<_Input  id={input.id}  type={input.type}  /> ```  and she display a textField depend on the type.

### instalation : 

 - npm i @material-ui/core
 - npm i @date-io/date-fns date-fns@next
 - npm i material-ui-pickers
 - npm i react-select
 - npm i @material-ui/icons
###  Variables content : 

| Key | Value | description |
| ------ | ------ |  ------ |
| id | string ```unique``` | required in all object ```id != null```
| label | string  | not required
| type | enum : [int,   decimale,  varchar, text, date, dateTime, time, set, select-multi, select,enum,password,color] | required in all object ```type != null```
| size | array : [int,int] | required in int and decimale type |
| helperText | string | not required |
| variant | enum : [standard,filled,outlined] | not required |
| error | string | not required |
| required | enum : [true,false] | not required |
| length | int | not required |
| value | depend to the type : <br> int => int <br> decimale => decimale <br> varchar => varchar <br> text => text <br> date=>date <br> time=>time <br> dateTime=>dateTime <br> enum => string <br> set =>empty  array [] <br>  select-multi =>empty array [] <br> select => string <br> color => string |required in all object ```value != null``` |


### Exmple : 
```sh 
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

 ```
 

