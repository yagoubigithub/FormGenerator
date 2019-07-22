import React, { Component } from "react";

import {
  TextField,
  FormGroup,
  Checkbox,
  Grid,
  InputAdornment
} from "@material-ui/core";

import UploadImages from 'yagoubi-upload-images';
import UploadImageV3 from './UploadImageV3';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import UploadFile from "./UploadFile";
import ColorPicker from "material-ui-color-picker";

import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
  DateTimePicker
} from "material-ui-pickers";
import Select from "react-select";

import DateFnsUtils from "@date-io/date-fns";
import frLocale from "date-fns/locale/fr";
import UploadImagesV2 from "./UploadImageV2";

class _Input extends Component {
  state = {};

  CalculSize = length => {
    if (length < 6) {
      return [6, 3, 2, 2, 2, 2];
    } else if (length < 20) {
      return [6, 6, 3, 3, 3, 3];
    } else if (length < 50) {
      return [12, 9, 6, 6, 6, 6];
    } else if (length < 70) {
      return [12, 12, 9, 9, 9, 9];
    } else {
      return [12, 12, 12, 12, 12, 12];
    }
  };
  Input = () => {
    let {
      id,
      type,
      label,
      value,
      length,
      possibles,
      size,
      variant,
      suffixe,
      icon,

      helperText,
      error,
      required,
      onchange
    } = this.props;

    this.setState({ [id]: value !== undefined ? value : null });
    length = length ? length : 15;
    label = label === undefined ? " " : label;
    let [xs, sm, md, lg, xl] =
      size != undefined
        ? this.CalculSize(size[0] + size[1] + 1)
        : this.CalculSize(length);

    icon = icon !== undefined ? icon : null;

    switch (type) {
      case "int":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <TextField
                required={required !== undefined ? required : false}
                onChange={
                  onchange !== undefined
                    ? e => onchange(e, id, e.target.value)
                    : null
                }
                id={id}
                label={label ? label : null}
                type="number"
                fullWidth
                helperText={helperText !== "" ? helperText : null}
                error={error !== "" && error !== undefined}
                defaultValue={value !== 0 || value !== undefined ? value : 0}
                variant={variant ? variant : "outlined"}
                margin="normal"
                InputProps={{
                  endAdornment: suffixe !== undefined ? suffixe : null
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  )
                }}
              />
            </Grid>
          );
        }

        break;

      case "decimale":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <TextField
                required={required !== undefined ? required : false}
                onChange={
                  onchange !== undefined
                    ? e => onchange(e, id, e.target.value)
                    : null
                }
                id={id}
                label={label ? label : null}
                type="number"
                fullWidth
                helperText={helperText !== "" ? helperText : null}
                error={error !== "" && error !== undefined}
                defaultValue={value !== 0 || value !== undefined ? value : 0}
                variant={variant ? variant : "outlined"}
                margin="normal"
                InputProps={{
                  endAdornment: suffixe !== undefined ? suffixe : null
                }}
                inputProps={{
                  step: size !== undefined ? 1 / Math.pow(10, size[1]) : 1
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  )
                }}
              />
            </Grid>
          );
        }
        break;
      case "varchar":
      case "text":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <TextField
                required={required !== undefined ? required : false}
                onChange={
                  onchange !== undefined
                    ? e => onchange(e, id, e.target.value)
                    : null
                }
                id={id}
                label={label ? label : null}
                type="text"
                multiline={type === "text"}
                rows={type === "text" ? 4 : null}
                fullWidth
                helperText={helperText !== "" ? helperText : null}
                error={error !== "" && error !== undefined}
                defaultValue={value !== "" || value !== undefined ? value : ""}
                variant={variant ? variant : "standard"}
                margin="normal"
                InputProps={{
                  endAdornment: suffixe !== undefined ? suffixe : null
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  )
                }}
              />
            </Grid>
          );
        }
        break;
      case "password":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <TextField
                required={required !== undefined ? required : false}
                onChange={
                  onchange !== undefined
                    ? e => onchange(e, id, e.target.value)
                    : null
                }
                id={id}
                label={label ? label : null}
                type="password"
                multiline={type === "text"}
                rows={type === "text" ? 4 : null}
                fullWidth
                helperText={helperText !== "" ? helperText : null}
                error={error !== "" && error !== undefined}
                defaultValue={value !== "" || value !== undefined ? value : ""}
                variant={variant ? variant : "standard"}
                margin="normal"
                InputProps={{
                  endAdornment: suffixe !== undefined ? suffixe : null
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  )
                }}
              />
            </Grid>
          );
        }
        break;
      case "email":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <TextField
                required={required !== undefined ? required : false}
                onChange={
                  onchange !== undefined
                    ? e => onchange(e, id, e.target.value)
                    : null
                }
                id={id}
                label={label ? label : null}
                type="email"
                fullWidth
                helperText={helperText !== "" ? helperText : null}
                error={error !== "" && error !== undefined}
                defaultValue={value !== "" || value !== undefined ? value : ""}
                variant={variant ? variant : "standard"}
                margin="normal"
                InputProps={{
                  endAdornment: suffixe !== undefined ? suffixe : null
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  )
                }}
              />
            </Grid>
          );
        }
        break;
      case "files":
      case "file":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <UploadFile
                id={id}
                label={label ? label : null}
                onChange={
                  onchange !== undefined
                    ? (files, e) => onchange(e, id, files)
                    : null
                }
                multiple={type === "files"}
                error={error !== "" && error !== undefined}
              />
            </Grid>
          );
        }
        break;

        case "image":
          case "images":
            {
              return (
                <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                  <UploadImageV3
                    id={id}
                    placeholder={label ? label : null}
                    onChange={
                      onchange !== undefined
                        ? (files, e) => onchange(e, id, files)
                        : null
                    }
                    multiple={type === "images"}
                    error={error !== "" && error !== undefined}
                  />
                </Grid>
              );
            }
            break;

      case "date":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                <DatePicker
                  required={required !== undefined ? required : false}
                  onChange={
                    onchange !== undefined
                      ? date => {
                          const dformat = [
                            date.getFullYear(),
                            date.getMonth() + 1 >= 10
                              ? date.getMonth() + 1
                              : "0" + (date.getMonth() + 1),
                            date.getDate() >= 10
                              ? date.getDate()
                              : "0" + date.getDate()
                          ].join("-");
                          onchange(null, id, dformat);
                        }
                      : null
                  }
                  id={id}
                  label={label ? label : null}
                  fullWidth
                  helperText={helperText !== "" ? helperText : null}
                  error={error !== "" && error !== undefined}
                  value={value !== "" || value !== undefined ? value : null}
                  variant={variant ? variant : "standard"}
                  margin="normal"
                  InputProps={{
                    endAdornment: suffixe !== undefined ? suffixe : null
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{icon}</InputAdornment>
                    )
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          );
        }
        break;
      case "dateTime":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                <DateTimePicker
                  required={required !== undefined ? required : false}
                  onChange={
                    onchange !== undefined
                      ? date => {
                          const dformat =
                            [
                              date.getFullYear(),
                              date.getMonth() + 1 >= 10
                                ? date.getMonth() + 1
                                : "0" + (date.getMonth() + 1),
                              date.getDate() >= 10
                                ? date.getDate()
                                : "0" + date.getDate()
                            ].join("-") +
                            "T" +
                            [
                              date.getHours() >= 10
                                ? date.getHours()
                                : "0" + date.getHours(),
                              date.getMinutes() >= 10
                                ? date.getMinutes()
                                : "0" + date.getMinutes(),
                              date.getSeconds() >= 10
                                ? date.getSeconds()
                                : "0" + date.getSeconds()
                            ].join(":");
                          onchange(null, id, dformat);
                        }
                      : null
                  }
                  id={id}
                  label={label ? label : null}
                  fullWidth
                  helperText={helperText !== "" ? helperText : null}
                  error={error !== "" && error !== undefined}
                  value={value !== "" || value !== undefined ? value : null}
                  variant={variant ? variant : "standard"}
                  margin="normal"
                  InputProps={{
                    endAdornment: suffixe !== undefined ? suffixe : null
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{icon}</InputAdornment>
                    )
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          );
        }
        break;

      case "time":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                <TimePicker
                  required={required !== undefined ? required : false}
                  onChange={
                    onchange !== undefined
                      ? date => {
                          const format = [
                            date.getHours() >= 10
                              ? date.getHours()
                              : "0" + date.getHours(),
                            date.getMinutes() >= 10
                              ? date.getMinutes()
                              : "0" + date.getMinutes()
                          ].join(":");

                          onchange(null, id, format);
                        }
                      : null
                  }
                  id={id}
                  label={label ? label : null}
                  fullWidth
                  helperText={helperText !== "" ? helperText : null}
                  error={error !== "" && error !== undefined}
                  value={
                    value !== "" || value !== undefined
                      ? "2019-04-01T" + value
                      : null
                  }
                  variant={variant ? variant : "standard"}
                  margin="normal"
                  InputProps={{
                    endAdornment: suffixe !== undefined ? suffixe : null
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{icon}</InputAdornment>
                    )
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          );
        }
        break;

      case "enum":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <FormControl required={required !== undefined ? required : false}>
                <FormLabel>{label ? label : null}</FormLabel>
                <RadioGroup
                  id={id}
                  defaultValue={
                    value !== "" || value !== undefined ? value : null
                  }
                  onChange={
                    onchange !== undefined
                      ? (e, _value) => {
                          onchange(e, id, _value);
                        }
                      : null
                  }
                >
                  {possibles !== undefined
                    ? possibles.map((val, index) => {
                        return (
                          <FormControlLabel
                            key={val.label + index}
                            value={val.value}
                            control={<Radio />}
                            label={val.label}
                          />
                        );
                      })
                    : null}
                </RadioGroup>
              </FormControl>
            </Grid>
          );
        }
        break;

      case "set":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <FormControl required={required !== undefined ? required : false}>
                <FormLabel>{label ? label : null}</FormLabel>
                <FormGroup id={id}>
                  {possibles !== undefined
                    ? possibles.map((val, index) => {
                        return (
                          <FormControlLabel
                            key={val.label + index}
                            control={
                              <Checkbox
                                defaultChecked={false}
                                value={val.value}
                                onChange={
                                  onchange !== undefined
                                    ? e => {
                                        const values = this.state[id];
                                        if (
                                          values.find(
                                            item => val.value === item
                                          ) !== undefined
                                        ) {
                                          values.splice(
                                            values.findIndex(
                                              item => val.value === item
                                            ),
                                            1
                                          );
                                        } else {
                                          values.push(val.value);
                                        }

                                        this.setState({ [id]: values });
                                        onchange(e, id, this.state[id]);
                                      }
                                    : null
                                }
                              />
                            }
                            label={val.label}
                          />
                        );
                      })
                    : null}
                </FormGroup>
              </FormControl>
            </Grid>
          );
        }
        break;
      case "select":
      case "select-multi":
        {
          return (
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <Select
                isSearchable
                isMulti={type === "select-multi" ? true : false}
                placeholder={label ? label : ""}
                required={required !== undefined ? required : false}
                onChange={
                  onchange !== undefined
                    ? e => {
                        onchange(null, id, e);
                      }
                    : null
                }
                id={id}
                label={label ? label : null}
                options={possibles !== undefined ? possibles : null}
                fullWidth
                helperText={helperText !== "" ? helperText : null}
                error={error !== "" && error !== undefined}
                variant={variant ? variant : "standard"}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  )
                }}
              />
            </Grid>
          );
        }
        break;

      case "color":
        {
          return (
            <Grid
              item
              xs={xs}
              sm={sm}
              md={md}
              lg={lg}
              xl={xl}
              style={{ padding: 10 }}
            >
              <ColorPicker
                required={required !== undefined ? required : false}
                onChange={
                  onchange !== undefined
                    ? color => {
                        if (color !== undefined) onchange(null, id, color);
                      }
                    : null
                }
                id={id}
                name={label ? label : null}
                defaultValue={
                  value !== "" || value !== undefined ? value : "#000"
                }
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  )
                }}
              />
            </Grid>
          );
        }
        break;
      default:
        break;
    }
  };
  _input = null;
  componentWillMount() {
    this._input = this.Input();
  }
  render() {
    return this._input;
  }
}

export default _Input;
