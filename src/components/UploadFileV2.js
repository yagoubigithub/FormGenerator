import React, { Component } from "react";


import   "./uploadFileV2.css";

import {  Publish } from "@material-ui/icons/";
import { Close } from "@material-ui/icons";
class UploadFile extends Component {

  state = {
    files: [],
    oldFiles : []
  };
  
  componentWillMount = () =>{
    if( this.props.oldFiles !== null){
      const oldFiles = [...this.props.oldFiles];
      if (oldFiles !== null) this.setState({ oldFiles });
    }
    
  }
  onRest = () => {
    document.getElementById(this.props.id).value = "";
   
    const files = [];
    this.setState({ files });
    if (this.props.onRest !== null) this.props.onRest();
  };
  onDelete = name => {
    const oldFilesTemp = [...this.state.oldFiles];

    const oldFiles = oldFilesTemp.filter(file => {
      return file !== name;
    });
    this.setState({ oldFiles });
    if (this.props.onDelete !== null) this.props.onDelete(name);
  };

  onChange = event => {
    let files_target = event.target.files;
    let files = [...this.state.files];

    if (!this.props.multiple) {
        files = [];
    }
    Object.keys(files_target).map(i => {
      const file = files_target[i];
      //console.log(image);
      if (files.filter(f => f.name === file.name).length === 0)
        files.push(file);
      this.setState({ files });
    });

    this.setState({ open: false });
    if (this.props.onChange !== null) this.props.onChange(event, files);
  };
  
  uid = () => {
    const uid = `${Math.random()
      .toString(36)
      .slice(2)}-${Date.now().toString(36)}`;

    return uid;
  };

  render() {
    let {
      label,
      color,
      id,
      path,
      icon,
      style

    } = this.props;
    label = label ? label : "upload file ..";
    color = color ? color : "#0074D9";
    icon = icon ? icon : <Publish />;

    return (
      <div style={style ? style : null}>
 <div className={"btn-upload-container"} style={{border : this.props.error !== undefined && this.props.error ? "1px solid red" :  0}}>
        <button
          className={"btn-upload"}
          style={{ backgroundColor: color }}
        >
          <label htmlFor={id}>
          <div className={"svg-icon"} >
              {icon}
          </div>
            <span>{label}</span>
          </label>
        </button>
        <input
          type="file"
          onChange={event => this.onChange(event)}
          style={{ display: "none" }}
          id={id}
          multiple={this.props.multiple}
        />

        


        <div className={"files-container"}>

        {this.state.oldFiles.map((file) => {
              return (
                <div className={"file"} key={this.uid()}>
                  <span className={"file-name"}>.{file.split('.')[file.split('.').length - 1]}</span>
                  <span
                    className={"file-close"}
                    onClick={() => this.onDelete(file)}
                  >
                    <Close />
                  </span>
                  <span className="file-name-hover">{file}</span>
                  
                  
                </div>
              );
            })}

{this.state.files.length === 0 && this.state.oldFiles.length === 0 ? (
  <label htmlFor={id} className={"placeholder"}>
              {label}
            </label>
)  :  <span className="split-bar" />}

          {  this.state.files.map((file) => {
              return (
                <div className={"file"} key={this.uid()}>
                  <span className={"file-name"}>.{file.name.split('.')[file.name.split('.').length - 1]}</span>
                  {icon}
                  <span className="file-name-hover">{file.name}</span>
                </div>
              );
            })}
        </div>
        <button className="reset-btn-upload-file"  style={{ backgroundColor: color }} onClick={this.onRest}>
          <Close />
        </button>
      </div>
      </div>
     
    );
  }
}
export default UploadFile;
