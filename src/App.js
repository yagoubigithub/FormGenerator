import React, { Component } from 'react';
import Form from './components/Form'


const data = [
  {
    id :   "a",
    variant : "outlined",
    label : "numbre of classes",
    type : "int",
    value : 14,
    size : [10,0],
    error :  "",
    length : null,
    rows : null,
    required : true,
    helperText : "hello helper text",
    inputSize :  'sm'
  },{
    id :  "b",
    variant : "filled",
    label : "decimale number",
    type : "decimale",
    value : 14.7,
    size : [10,5],
    error :  "",
    length : null,
    rows : null,
    required : true,
    helperText : "hello helper text",
    inputSize :  'sm'
  },{
    id :  "c",
    label : "Varchar Input",
    type : "varchar",
    value : "Render a Select element while passing the Input",
    size : null,
    length : 50,
    rows : null,
    variant : "filled",
    error :  "",
    required : true,
    helperText : "hello helper text",
    inputSize :  'md'
  }
  ,{
    id :  "d",
    label : "text",
    type : "text",
    value : "Render a Select element while passing the Input",
    size : null,
    length : 50,
    rows : [6,8],
    error :  "",
    variant : "standard",
    required : true,
    helperText : "Ht;e; fjjf jdjr fkkfrdje kekf kkfnnd",
    inputSize :  'md'
  }
  ,{
    id :  "e",
    label : "date picker",
    type : "date",
    value : "Render a Select element while passing the Input",
    size : null,
    length : null,
    rows : null,
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Date date date dteddhb ",
    inputSize :  'sm'
  }
  ,{
    id :  "f",
    label : "date picker",
    type : "dateTime",
    value : "Render a Select element while passing the Input",
    size : null,
    length : null,
    rows : null,
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Date date date dteddhb ",
    inputSize :  'sm'
  }
  ,{
    id :  "g",
    label : "time picker",
    type : "time",
    value : "Render a Select element while passing the Input",
    size : null,
    length : null,
    rows : null,
    error :  "",
    variant : "outlined",
    required : true,
    inputSize :  'xl',
    helperText : "Date date date dteddhb "
  }

  ,{
    id :  "h",
    label : "enum radio button",
    type : "enum",
    value :"radoi1_value",
    possibles : [{key :  "a",label : "radio1", value : "radoi1_value"},{key :  "b",label : "radio2", value : "radoi2_value"}
  ,{key :  "c",label : "radio3", value : "radoi3_value"}],
    size : null,
    length : null,
    rows : null,
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "enum enum enum ",
    inputSize :  'md'
  }
  ,{
    id :  "i",
    label : "Set Checkbox button",
    type : "set",
   value : [],
   possibles : [{key :  "a",label : "set1", value : "set1_value", checked : false},
   {key :  "b",label : "set2", value : "set2_value",hecked : true}],
    size : null,
    length : null,
    rows : null,
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Set set set ",
    inputSize :  'md'
  }
  ,{
    id :  "j",
    label : "Select multiple",
    type : "select-multi",
   value : [],
   possibles : [{label : "set1", value : "set1_value"},
   {label : "set2", value : "set2_value"}],
    size : null,
    length : null,
    rows : null,
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Set set set ",
    inputSize :  'sm'
  }

  ,{
    id :  "k",
    label : "Select set1 set2 set3 ...",
    type : "select",
   value : [],
   possibles : [{label : "set1", value : "set1_value"},
   {label : "set2", value : "set2_value"}],
    size : null,
    length : null,
    rows : null,
    error :  "",
    variant : "outlined",
    required : true,
    helperText : "Set set set ",
    inputSize :  'md'
  }
]

  

class App extends Component {
  render() {
    return (
      <div className="App">
       <Form data={data} />
      </div>
    );
  }
}

export default App;
