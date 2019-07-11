import React, { Component } from "react";
import "./uploadImage.css";
import { CameraAlt, Close } from "@material-ui/icons";
import { Dialog, IconButton } from "@material-ui/core";
import Photo from "./Photo";

import uuid from "uuid";
export default class UploadImages extends Component {
  state = {
    open: false,
    files: [],
    dialog: false,
    urls: []
  };
  OpenCloseDialog = () => {
    this.setState({ dialog: !this.state.dialog });
  };
  openPopOver = () => {
    this.setState({ open: !this.state.open });
  };
  onchange = file => {
    let files = [...this.state.files];
    if (!this.props.multiple) {
      files = [];
    }
    if (file[0] !== undefined) {
      if (file[0]["type"].split("/")[0] === "image") {
        //Max File Size :
        if (this.props.maxFileSize !== undefined) {
          if (file[0].size < this.props.maxFileSize) {
            //Min File Size :
            if (this.props.minFileSize !== undefined) {
              if (file[0].size > this.props.minFileSize) {
                //Tes Max files
                if (this.props.maxFiles !== undefined) {
                  if (files.length < this.props.maxFiles) {
                    files.push(file[0]);
                    this.setState({ files });
                  } else {
                    //error maxFiles
                    this.onError({
                      type: "maxFiles",
                      message:
                        "The maximum number of files is : " +
                        this.props.maxFiles
                    });
                  }
                } else {
                  //fourth else
                  files.push(file[0]);
                  this.setState({ files });
                }
              } else {
                //error min size
                this.onError({
                  type: "minFileSize",
                  message:
                    "The minimum size of file is : " + this.props.minFileSize
                });
              }
            } else {
              //third else
              //Tes Max files
              if (this.props.maxFiles !== undefined) {
                if (files.length < this.props.maxFiles) {
                  files.push(file[0]);
                  this.setState({ files });
                } else {
                  //error maxFiles
                  this.onError({
                    type: "maxFiles",
                    message:
                      "The maximum number of files is : " + this.props.maxFiles
                  });
                }
              } else {
                files.push(file[0]);
                this.setState({ files });
              }
            }
          } else {
            //error max size
            this.onError({
              type: "maxFileSize",
              message: "The maximum size of file is : " + this.props.maxFileSize
            });
          }
        } else {
          //second else
          if (this.props.minFileSize !== undefined) {
            if (file[0].size > this.props.minFileSize) {
              //Tes Max files
              if (this.props.maxFiles !== undefined) {
                if (files.length < this.props.maxFiles) {
                  files.push(file[0]);
                  this.setState({ files });
                } else {
                  //error maxFiles
                  this.onError({
                    type: "maxFiles",
                    message:
                      "The maximum number of files is : " + this.props.maxFiles
                  });
                }
              } else {
                //fourth else
                files.push(file[0]);
                this.setState({ files });
              }
            } else {
              //error min size
              this.onError({
                type: "minFileSize",
                message:
                  "The minimum size of file is : " + this.props.minFileSize
              });
            }
          } else {
            //Tes Max files
            if (this.props.maxFiles !== undefined) {
              if (files.length < this.props.maxFiles) {
                files.push(file[0]);
                this.setState({ files });
              } else {
                //error maxFiles
                this.onError({
                  type: "maxFiles",
                  message:
                    "The maximum number of files is : " + this.props.maxFiles
                });
              }
            } else {
              files.push(file[0]);
              this.setState({ files });
            }
          }
        }
        
      }
      
    }
    setTimeout(this.ConverToDataUrl,22);
  };
  ConverToDataUrl = () => {
    const files = [...this.state.files];
    let urls = [];
    files.map((file, index) => {
      console.log(file);
      const ReaderObj = new FileReader();
      ReaderObj.onloadend = () => {
        urls.push({
          url: ReaderObj.result,
          name: file.name,
          index: index
        });
        this.setState({ urls });
      };
      if (file) {
        ReaderObj.readAsDataURL(file);
      }
    });
   
  };
  capture = imgSrc => {
    const file = this.dataURLtoFile(imgSrc, uuid() + ".png");
    let files = [...this.state.files];
    if (!this.props.multiple) {
      files = [];
    }
    files.push(file);
    this.setState({ files });
    setTimeout(this.ConverToDataUrl,22);
  };

  removeImages = name => {
    const filesTemp = [...this.state.files];
    const urlsTemp = [...this.state.urls];

    const files = filesTemp.filter(file=>{
      return file.name !== name;
    });
    
   
    this.setState({ files });
   
    const urls = urlsTemp.filter(url=>{
      return url.name !== name;
    });
    this.setState({ urls });
  };
  dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };
  render() {
    return (
      <div className="container-upload-image">
        <Dialog open={this.state.dialog}>
          <IconButton
            color="secondary"
            style={{
              position: "fixed",
              left: 10,
              top: 10,
              zIndex: 100
            }}
            onClick={this.OpenCloseDialog}
          >
            <Close fontSize="large" />
          </IconButton>

          <Photo
            capture={this.capture}
            //width={1920}

            // height={1440}
          />
        </Dialog>

        <div className="btn-upload-upload-image" onClick={this.openPopOver}>
          <CameraAlt />
          <div
            className="popOver-upload-image"
            style={{ display: this.state.open ? "flex" : "none" }}
          >
            <div
              className="btn-choose-upload-image"
              onClick={this.OpenCloseDialog}
            >
              <CameraAlt />
            </div>
            <div className="btn-choose-upload-image">
              <label htmlFor={this.props.id}>
                Upload Image From your coputer
              </label>
              <input
                type="file"
                onChange={ref => this.onchange(ref.target.files)}
                style={{ display: "none" }}
                id={this.props.id}
              />
            </div>
          </div>
        </div>

        <div className="images-containe-upload-image">
          {this.state.urls.map(url => {
            return (
              <div className="image-upload-image" key={uuid()}>
                <img src={url.url} />
                <span className="image-name-upload-image">{url.name}</span>
                <span className={"image-close-upload-image"} onClick={()=>this.removeImages(url.name)}>
                  <Close fontSize="small" />
                </span>
              </div>
            );
          })}

          {/*<div className="image-upload-image">
            <img src="https://www.online-image-editor.com/help/images/exmpl_start.jpg" />
            <span className="image-name-upload-image">
              lorem lorem lorem lorem lorem
            </span>
            <span className={"image-close-upload-image"}>
              <Close fontSize="small" />
            </span>
          </div> */}
        </div>
      </div>
    );
  }
}
