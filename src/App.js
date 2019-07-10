import React, { Component } from "react";
import  _Input from "./components/Input";
import {  Grid } from "@material-ui/core";

import { Email,PermIdentity,Lock,FileCopy
} from '@material-ui/icons';

const username  = {
  id :  "username_id",
  label : "Username",
  type : "varchar",
  value : "",
  length : 50
}
const password  = {
  id :  "password_id",
  label : "Password",
  type : "password",
  value : "",
  length : 50,
  error : "Hello error"
}
const email  = {
  id :  "email_id",
  label : "Email",
  type : "email",
  value : "",
  length : 50,
}
const file  = {
  id :  "file_id",
  label : "upload my image",
  type : "files",
 
  
 
  

}
const image  = {
  id :  "image_id",
  label : "upload my image",
  type : "image",
 
 error : "erro image"
  
 
  

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
     error={username.error}
    />

<_Input
      id={email.id}
      length={email.length}
      value={email.value}
      type={email.type} 
      onchange={this.onchange}
      label={email.label}
     icon={<Email />}
     error={email.error}
    />

<_Input
      id={password.id}
      length={password.length}
      value={password.value}
      type={password.type} 
      onchange={this.onchange}
      label={password.label}
     icon={<Lock />}
     error={password.error}
    />
    <_Input
      id={file.id}
      type={file.type}
      onchange={this.onchange}
      label={file.label}
     icon={<FileCopy />}
     length={50}
     accepts={file.accepts}
      maxFiles={file.maxFiles}
      maxFileSize={file.maxFileSize}
      minFileSize={file.minFileSize}
      error={file.error}
    />
     <_Input
      id={image.id}
      type={image.type}
      onchange={this.onchange}
      label={image.label}
     
    multiple={image.multiple}
      maxFiles={image.maxFiles}
      maxFileSize={image.maxFileSize}
      minFileSize={image.minFileSize}
      error={image.error}
      length={100}
    />
    </Grid>;
  }
}

export default App;
