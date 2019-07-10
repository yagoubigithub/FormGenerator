import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import { AccessAlarms } from "@material-ui/icons/";
import { Close } from "@material-ui/icons";
class UploadFile extends Component {
  static propTypes = {};
  state = {
    files: []
  };
  onError = error => {
    if (this.props.onError !== undefined) this.props.onError(error);
  };
  TestAccepts = (accept, accepts) => {
    return accepts.filter(a => a === accept).length > 0;
  };
  onchange = file => {
    let files = [...this.state.files];
    if (!this.props.multiple) {
      files = [];
    }
    if (file.length > 0) {
      if (this.props.accepts !== undefined) {
        if (this.TestAccepts(file[0].type, this.props.accepts)) {
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
                        "The maximum number of files is : " +
                        this.props.maxFiles
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
                message:
                  "The maximum size of file is : " + this.props.maxFileSize
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
        } else {
          //file not accepts error
          //error maxFiles
          this.onError({
            type: "accepts",
            message: `This type : ${file[0].type} of file not accepted`
          });
        }
      } else {
        // first else
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
    if (this.props.onChange !== undefined) this.props.onChange(files);
  };
  removeFile = index => {
    const files = [...this.state.files];
    files.splice(index, 1);
    this.setState({ files });
  };

  render() {
    let {
      accepts,
      multiple,
      maxFiles,
      maxFileSize,
      minFileSize,
      label,
      color,

      icon
    } = this.props;
    label = label ? label : "upload file ..";
    color = color ? color : "#0074D9";
    icon = icon ? icon : <AccessAlarms />;

    return (
      <div className={"btn-upload-container"} style={{border : this.props.error !== undefined && this.props.error ? "1px solid red" :  0}}>
        <button
          className={"btn-upload"}
          style={{ backgroundColor: color }}
        >
          <label htmlFor="fileupload">
            <AccessAlarms className={"svg-icon"} />
            {/*<img src={PublishIcon} className={styles["svg-icon"]} /> */}
            <span>{label}</span>
          </label>
        </button>
        <input
          type="file"
          onChange={ref => this.onchange(ref.target.files)}
          style={{ display: "none" }}
          id="fileupload"
          multiple={this.props.multiple !== undefined ? multiple : false}
        />
        <div className={"files-container"}>
          {this.state.files.length > 0 ? (
            this.state.files.map((file, index) => {
              return (
                <div className={"file"} key={index}>
                  <span className={"file-name"}>{file.name}</span>
                  <span
                    className={"file-close"}
                    onClick={() => this.removeFile(index)}
                  >
                    <Close />
                  </span>
                </div>
              );
            })
          ) : (
            <label htmlFor="fileupload" className={"placeholder"}>
              {label}
            </label>
          )}
        </div>
      </div>
    );
  }
}
export default UploadFile;
