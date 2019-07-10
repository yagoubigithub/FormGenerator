import React, { Component } from "react";
import "./uploadImage.css";
import { CameraAlt, Close } from "@material-ui/icons";
import { Popover } from "@material-ui/core";
export default class UploadImages extends Component {
   
  render() {
    return (
       
      <div className="container-upload-image">
        <div className="btn-upload-upload-image" >
          <CameraAlt />
          <div className="popOver-upload-image">
           Hello popOver
       </div>
        </div>
      
        <div className="images-containe-upload-image">
          <div className="image-upload-image">
            <img src="https://www.online-image-editor.com/help/images/exmpl_start.jpg" />
            <span className="image-name-upload-image">
              lorem lorem 
            </span>
            <span className={"image-close-upload-image"}>
              <Close fontSize="small" />
            </span>
          </div>

          <div className="image-upload-image">
            <img src="https://www.online-image-editor.com/help/images/exmpl_start.jpg" />
            <span className="image-name-upload-image">
              lorem lorem lorem lorem lorem
            </span>
            <span className={"image-close-upload-image"}>
              <Close fontSize="small" />
            </span>
          </div>

        </div>
      </div>
    );
  }
}
