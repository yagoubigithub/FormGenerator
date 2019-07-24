import React, { Component } from "react";

import "./uploadImageV3.css";

import { CameraAlt, Close, Publish } from "@material-ui/icons";
import { Dialog } from "@material-ui/core";

export default class UploadImageV3 extends Component {
  state = {
    open: false,
    images: [],
    isMobile: false,
    oldImages: [],
    openImageDialog: false,
    image: null
  };

  openImage = ({ image, type }) => {
    if (type === "new") {
      this.setState({ image });
    } else {
      const url = `${this.props.path}${image}`;
      this.setState({ image: url });
    }
    this.handleCloseImageDialog();
  };
  openPopOver = () => {
    this.setState({ open: !this.state.open });
  };
  handleCloseImageDialog = () => {
    this.setState({ openImageDialog: !this.state.openImageDialog });
  };

  componentWillMount() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // if is mobile
      this.setState({ isMobile: true });
    }
    const { id } = this.props.id;

    const id_upload_from_camera = id
      ? `${id}_upload_from_camera-${this.uid()}`
      : `${this.uid()}_upload_from_camera-${this.uid()}`;

    const id_upload_from_device = id
      ? `${id}_upload_from_device-${this.uid()}`
      : `${this.uid()}_upload_from_device-${this.uid()}`;
    this.setState({ id_upload_from_camera, id_upload_from_device });
    const oldImages = [...this.props.oldImages];
    if (oldImages !== null) this.setState({ oldImages });
  }

  clickOpenFromDevice = id => {
    if (!this.state.isMobile) document.getElementById(id).click();
  };
  onChange = event => {
    let files = event.target.files;
    let images = [...this.state.images];

    if (!this.props.multiple) {
      images = [];
    }
    Object.keys(files).map(i => {
      const image = files[i];
      //console.log(image);
      if (images.filter(img => img.name === image.name).length === 0)
        images.push(image);
      this.setState({ images });
    });

    this.setState({ open: false });
    if (this.props.onChange !== null) this.props.onChange(event, images);
  };
  uid = () => {
    const uid = `${Math.random()
      .toString(36)
      .slice(2)}-${Date.now().toString(36)}`;

    return uid;
  };

  onRest = () => {
    document.getElementById(this.state.id_upload_from_camera).value = "";
    document.getElementById(this.state.id_upload_from_device).value = "";
    const images = [];
    this.setState({ images });
    if (this.props.onRest !== null) this.props.onRest();
  };
  removeImages = name => {
    const imagesTemp = [...this.state.images];

    const images = imagesTemp.filter(image => {
      return image.name !== name;
    });

    this.setState({ images });

    if (this.props.onChange !== null) this.props.onChange(images);
  };
  onDelete = name => {
    const oldImagesTemp = [...this.state.oldImages];

    const oldImages = oldImagesTemp.filter(image => {
      return image !== name;
    });
    this.setState({ oldImages });
    if (this.props.onDelete !== null) this.props.onDelete(name);
  };

  render() {
    const { style, placeholder, path } = this.props;

    const color = this.props.color ? this.props.color : "#0074D9";
    const icon = this.props.icon ? this.props.icon : <CameraAlt />;
    return (
      <div style={style ? style : null}>
        <div className={"container-upload-image"}>
          <div
            className={"btn-upload-upload-image"}
            onClick={
              this.state.isMobile
                ? this.openPopOver
                : () =>
                    this.clickOpenFromDevice(this.state.id_upload_from_device)
            }
            style={{ backgroundColor: color }}
          >
            {icon}

            <div
              className={"popOver-upload-image"}
              style={{
                display: this.state.open ? "flex" : "none",
                backgroundColor: color
              }}
            >
              <label
                htmlFor={this.state.id_upload_from_camera}
                className={"btn-choose-upload-image"}
              >
                {icon}
              </label>

              <label
                className={"btn-choose-upload-image"}
                htmlFor={this.state.id_upload_from_device}
                id="upload_from_device_label_id"
              >
                <Publish />
              </label>

              {
                //camera input
              }
              <input
                type="file"
                style={{ display: "none" }}
                id={this.state.id_upload_from_camera}
                capture="camera"
                accept="image/*"
                onChange={event => this.onChange(event)}
                multiple={this.props.multiple}
              />

              {
                //upload from device input
              }
              <input
                type="file"
                style={{ display: "none" }}
                id={this.state.id_upload_from_device}
                accept="image/*"
                onChange={event => this.onChange(event)}
                multiple={this.props.multiple}
              />
            </div>
          </div>
          <div
            className={"images-container-upload-image"}
            style={{
              border: this.props.error
                ? "1px solid red"
                : "1px solid rgba(0,0,0,0.4)",
              borderLeft: "none"
            }}
          >
            {path !== null && this.state.oldImages !== undefined
              ? this.state.oldImages.map(image => {
                  return (
                    <div
                      className={"image-upload-image-container"}
                      key={this.uid()}
                      onClick={() =>
                        this.openImage({ image: image, type: "old" })
                      }
                    >
                      <img
                        src={`${path}${image}`}
                        className={"image-upload-image"}
                        alt={image}
                      />
                      <span className={"image-name-upload-image"}>{image}</span>
                      <span
                        className={"image-close-upload-image"}
                        onClick={(e) => {e.stopPropagation(); this.onDelete(image)}}
                      >
                        <Close />
                      </span>
                    </div>
                  );
                })
              : null}
            {this.state.images.length === 0 &&
            (this.state.oldImages !== undefined &&
              this.state.oldImages.length === 0) ? (
              <div
                className={"placeholder-upload-image"}
                style={{ color: this.props.error ? "red" : "rgba(0,0,0,0.4)" }}
              >
                {placeholder ? placeholder : null}
              </div>
            ) : (
              <span className="split-bar" />
            )}

            {this.state.images.map(image => {
              const url = URL.createObjectURL(image);
              return (
                <div
                  className={"image-upload-image-container"}
                  key={this.uid()}
                  onClick={() => this.openImage({ image: url, type: "new" })}
                >
                  <img
                    src={url}
                    className={"image-upload-image"}
                    alt={image.name}
                  />
                  <span className={"image-name-upload-image"}>
                    {image.name}
                  </span>
                  {/*<span
                    className={"image-close-upload-image"}
                    onClick={() => this.removeImages(image.name)}
                  >
                    <Close />
                  </span>*/}
                </div>
              );
            })}
          </div>
          <button
            className="reset-btn"
            onClick={this.onRest}
            style={{ backgroundColor: color }}
          >
            <Close />
          </button>
        </div>
        <Dialog
          fullWidth
          maxWidth={"xl"}
          open={this.state.openImageDialog}
          onClose={this.handleCloseImageDialog}
        >
          <img src={this.state.image} />
        </Dialog>
      </div>
    );
  }
}
