import React, { Component } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import { format } from "url";
import { InputAdornment, Grid } from "@material-ui/core";
const data = [
  {
    id: "a",
    variant: "outlined",
    label: "numbre of classes",
    type: "int",
    value: 14,
    size: [3, 0],
    error: "",

    rows: null,
    required: true,
    helperText: "hello helper text"
  },
  {
    id: "b",
    variant: "filled",
    label: "decimale number",
    type: "decimale",
    value: 14.7,
    size: [10, 5],
    error: "",

    rows: null,
    required: true,
    helperText: "hello helper text"
  },
  {
    id: "c",
    label: "Varchar Input",
    type: "varchar",
    value:
      "Render a Select element while passing the Input hello helper text hello helper text",

    length: 50,

    variant: "filled",
    error: "",
    required: true,
    helperText: "hello helper text"
  }
  ,
  {
    id: "w",
    label: "Password Input",
    type: "password",
    value:"password1234",

    length: 30,

    variant: "filled",
    error: "",
    required: true,
    helperText: "hello helper text"
  }
  ,
  {
    id: "d",
    label: "text",
    type: "text",
    value: "Render a Select element while passing the Input",

    length: 255,
    error: "",
    variant: "standard",
    required: true,
    helperText: "Ht;e; fjjf jdjr fkkfrdje kekf kkfnnd"
  },
  {
    id: "e",
    label: "date picker",
    type: "date",
    value :  "2018-01-11",
    error: "",
    variant: "outlined",
    required: true,
    helperText: "Date date date dteddhb "
  },
  {
    id: "f",
    label: "date picker",
    type: "dateTime",
    value: "2019-01-01T00:01:08",

    error: "",
    variant: "outlined",
    required: true,
    helperText: "Date date date dteddhb "
  },
  {
    id: "g",
    label: "time picker",
    type: "time",
    value: "23:05",
    error: "",
    variant: "outlined",
    required: true,
    helperText: "Date date date dteddhb "
  },

  {
    id: "h",
    label: "enum radio button",
    type: "enum",
    value: "radoi1_value",
    possibles: [
      {  label: "radio111111111111", value: "radoi1_value" },
      {  label: "radio2", value: "radoi2_value" },
      {  label: "radio3", value: "radoi3_value" }
    ],

    error: "",
    variant: "outlined",
    required: true,
  },
  , {
    id: "x",
    label: "Select set1 set2 set3 ...",
    type: "color",
    value: "#F0F",
   length : 255,
    error: "",
    variant: "outlined",
    required: true,
    helperText: "Set set set "
  },
  {
    id: "i",
    label: "Set Checkbox button",
    type: "set",
    value: [],
    possibles: [
      { label: "set1", value: "set1_value"},
      {  label: "set2", value: "set2_value" }
    ],
    error: "",
    variant: "outlined",
    required: true,
    helperText: "Set set set "
  },
  {
    id: "j",
    label: "Select multiple",
    type: "select-multi",
    value: [],
    possibles: [
      { label: "set1", value: "set1_value" },
      { label: "set2", value: "set2_value" }
    ],
    error: "",
    variant: "outlined",
    required: true,
    helperText: "Set set set "
  },

  {
    id: "k",
    label: "Select set1 set2 set3 ...",
    type: "select",
    value: "",
    possibles: [
      { label: "set1", value: "set1_value" },
      { label: "set2", value: "set2_value" }
    ],
    error: "",
    variant: "outlined",
    required: true,
    helperText: "Set set set "
  }

  , {
    id: "z",
    label: "Select set1 set2 set3 ...",
    type: "color",
    value: "#F0F",
   
    error: "",
    variant: "outlined",
    required: true,
    helperText: "Set set set "
  }
];

class App extends Component {
  getData = data => {
    console.log(data);
  };
  onchange  = (event ,id,value) =>{
    console.log(value);
  }
  render() {
    const form = data.map(input => (
      <Input
      
        possibles={input.possibles}
        helperText={input.helperText}
        icon={input.icon}
        id={input.id}
        key={input.id}
        length={input.length}
        value={input.value}
        size={input.size}
        type={input.type}
        error={input.error}
        onchange={this.onchange}
        label={input.label}
        required={true}
        suffixe={<InputAdornment position="end">Kg</InputAdornment>}
      />
    ));
    return <div className="App"><Grid spacing={16} container>{form}</Grid></div>;
  }
}

export default App;
