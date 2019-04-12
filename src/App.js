import React, { Component } from 'react';
import Form from './components/Form'


const data = [
  {
    id :   "a",
    variant : "outlined",
    label : "numbre of classes",
    type : "int",
    value : 14,
    size : [3,0],
    error :  "",
    
    rows : null,
    required : true,
    helperText : "hello helper text",
    
  },{
    id :  "b",
    variant : "filled",
    label : "decimale number",
    type : "decimale",
    value : 14.7,
    size : [10,5],
    error :  "",
   
    rows : null,
    required : true,
    helperText : "hello helper text",
    
  },{
    id :  "c",
    label : "Varchar Input",
    type : "varchar",
    value : "Render a Select element while passing the Input hello helper text hello helper text",
    
   length : 50,
   
    variant : "filled",
    error :  "",
    required : true,
    helperText : "hello helper text",
   
  }
  ,{
    id :  "d",
    label : "text",
    type : "text",
    value : "Render a Select element while passing the Input",
    
    length : 255,
    error :  "",
    variant : "standard",
    required : true,
    helperText : "Ht;e; fjjf jdjr fkkfrdje kekf kkfnnd",
    
  }
  ,{
    id :  "e",
    label : "date picker",
    type : "date",
    value : "",
   
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Date date date dteddhb ",
    
  }
  ,{
    id :  "f",
    label : "date picker",
    type : "dateTime",
    value : "",
   
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Date date date dteddhb ",
   
  }
  ,{
    id :  "g",
    label : "time picker",
    type : "time",
    value : "Render a Select element while passing the Input",
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Date date date dteddhb "
  }

  ,{
    id :  "h",
    label : "enum radio button",
    type : "enum",
    value :"radoi1_value",
    possibles : [{key :  "a",label : "radio111111111111", value : "radoi1_value"},{key :  "b",label : "radio2", value : "radoi2_value"}
  ,{key :  "c",label : "radio3", value : "radoi3_value"}],
   
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "enum enum enum ",
    
  }
  ,{
    id :  "i",
    label : "Set Checkbox button",
    type : "set",
   value : [],
   possibles : [{key :  "a",label : "set1", value : "set1_value", checked : false},
   {key :  "b",label : "set2", value : "set2_value",checked : true}],
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Set set set ",
   
  }
  ,{
    id :  "j",
    label : "Select multiple",
    type : "select-multi",
   value : [],
   possibles : [{label : "set1", value : "set1_value"},
   {label : "set2", value : "set2_value"}],
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Set set set ",
    
  }

  ,{
    id :  "k",
    label : "Select set1 set2 set3 ...",
    type : "select",
   value : "",
   possibles : [{label : "set1", value : "set1_value"},
   {label : "set2", value : "set2_value"}],
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Set set set "
  }
]

  

class App extends Component {

  getData = (data) =>{
    console.log(data);
  }
  render() {
    return (
      <div className="App">
       <Form data={data}  sendData={this.getData} />
      </div>
    );
  }
}

export default App;
