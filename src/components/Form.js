import React, { Component } from "react";

import {
  TextField,
  Snackbar,
  FormGroup,
  Checkbox,
  Grid,
  Card
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Error, RestaurantMenuSharp } from "@material-ui/icons/";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
  DateTimePicker
} from "material-ui-pickers";
import Select from "react-select";

import DateFnsUtils from "@date-io/date-fns";
import frLocale from "date-fns/locale/fr";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";

const styles = {
  error: {
    background: "#d32f2f",
    color: "white"
  },
  snackMessage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

class Form extends Component {
  state = {
    data: this.props.data
  };

  handleDateChange = (date, name) => {
    const dformat = [
      date.getFullYear(),
      date.getMonth() + 1 >= 10
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1),
      date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
    ].join("-");
    const data = [...this.state.data];
    data.map(item => {
      if (item.id === name) {
        item["value"] = dformat;
      }
    });
    this.setState({
      data
    });
    this.sendData();
  };
  handleDateTimeChange = (date, name) => {
    const dformat =
      [
        date.getFullYear(),
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1),
        date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
      ].join("-") +
      "T" +
      [
        date.getHours() >= 10 ? date.getHours() : "0" + date.getHours(),
        date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes(),
        date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds()
      ].join(":");
    const data = [...this.state.data];
    data.map(item => {
      if (item.id === name) {
        item["value"] = dformat;
        console.log(item["value"]);
      }
    });
    this.setState({
      data
    });
    this.sendData();
  };

  CalculMaxLength = array => {
    let max = 0;
    array.map(item => {
      if (item.label.length >= max) {
        max = item.label.length;
      }
    });
    return max;
  };
  handleTimeChange = (date, name) => {
    const dformat =
      "2014-08-18T" +
      [
        date.getHours() >= 10 ? date.getHours() : "0" + date.getHours(),
        date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()
      ].join(":");
    const data = [...this.state.data];
    data.map(item => {
      if (item.id === name) {
        item["value"] = dformat;
        console.log(item["value"]);
      }
    });
    this.setState({
      data
    });
    this.sendData();
  };

  handleChange = name => event => {
    const data = [...this.state.data];
    data.map(item => {
      if (item.id === name) {
        item.value = event.target.value;
      }
    });
    this.setState({
      data
    });
  };
  handleSelectMultiChange = (selectedOption, name) => {
    const data = [...this.state.data];
    data.map(item => {
      if (item.id === name) {
        item.value = selectedOption;
      }
    });
    this.setState({
      data
    });
  };

  handleCheckBoxChange = (event, name, key) => {
    const data = [...this.state.data];
    data.map(item => {
      if (item.id === name) {
        item.possibles.map(possible => {
          if (possible.key == key) {
            possible["checked"] = event.target.checked;
          }
        });
      }
    });
    this.setState({
      data
    });
  };

  CalculSize = length => {
    if (length < 6) {
      return [6, 3, 2, 2, 2];
    } else if (length < 20) {
      return [6, 6, 3, 3, 3];
    } else if (length < 50) {
      return [12, 9, 6, 6, 6];
    } else if (length < 70) {
      return [12, 12, 9, 9, 9];
    } else {
      return [12, 12, 12, 12, 12];
    }
  };
  CreateObject = () => {
    return (
      <Grid alignItems="flex-end" container spacing={16}>
        {this.props.data.map((item, index) => this.Input(item, index))}
      </Grid>
    );
  };

  Input = (item, index) => {
    const { classes } = this.props;
    switch (item.type) {
      case "int":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(item.size[0]);

          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <TextField
                  required={this.state.data[index]["required"]}
                  onChange={this.handleChange(item.id)}
                  id={item.id}
                  label={this.state.data[index]["label"]}
                  type="number"
                  fullWidth
                  helperText={
                    this.state.data[index]["helperText"] !== ""
                      ? this.state.data[index]["helperText"]
                      : null
                  }
                  error={this.state.data[index]["error"] !== ""}
                  value={this.state.data[index]["value"]}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                />
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;

      case "decimale":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(
            item.size[0] + item.size[1] + 1
          );

          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <TextField
                  required={this.state.data[index]["required"]}
                  onChange={this.handleChange(item.id)}
                  id={item.id}
                  label={this.state.data[index]["label"]}
                  type="number"
                  fullWidth
                  error={this.state.data[index]["error"] !== ""}
                  value={this.state.data[index]["value"]}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                  inputProps={{ step: 1 / Math.pow(10, item.size[1]) }}
                  helperText={
                    this.state.data[index]["helperText"] !== ""
                      ? this.state.data[index]["helperText"]
                      : null
                  }
                />
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;

      case "varchar":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(item.length);
          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <TextField
                  required={this.state.data[index]["required"]}
                  onChange={this.handleChange(item.id)}
                  id={item.id}
                  label={this.state.data[index]["label"]}
                  type="text"
                  fullWidth
                  error={this.state.data[index]["error"] !== ""}
                  value={this.state.data[index]["value"]}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                  helperText={
                    this.state.data[index]["helperText"] !== ""
                      ? this.state.data[index]["helperText"]
                      : null
                  }
                />
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;
      case "text":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(item.length / 4);
          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <TextField
                  onChange={this.handleChange(item.id)}
                  id={item.id}
                  label={this.state.data[index]["label"]}
                  required={this.state.data[index]["required"]}
                  type="text"
                  multiline
                  placeholder={this.state.data[index]["label"]}
                  rows={4}
                  fullWidth
                  error={this.state.data[index]["error"] != ""}
                  value={this.state.data[index]["value"]}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                  helperText={
                    this.state.data[index]["helperText"] !== ""
                      ? this.state.data[index]["helperText"]
                      : null
                  }
                />
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;

      case "date":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(5);
          const data = [...this.state.data];

          const date = new Date();
          const dformat = [
            date.getFullYear(),
            date.getMonth() + 1 >= 10
              ? date.getMonth() + 1
              : "0" + (date.getMonth() + 1),
            date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
          ].join("-");

          data[index]["value"] = dformat;

          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                  <DatePicker
                    label={this.state.data[index]["label"]}
                    required={this.state.data[index]["required"]}
                    fullWidth
                    value={this.state.data[index]["value"]}
                    onChange={date => this.handleDateChange(date, item.id)}
                    variant={this.state.data[index]["variant"]}
                    margin="normal"
                    error={this.state.data[index]["error"] !== ""}
                    helperText={
                      this.state.data[index]["helperText"] !== ""
                        ? this.state.data[index]["helperText"]
                        : null
                    }
                  />
                </MuiPickersUtilsProvider>
                <Snackbar
                  open={this.state.data[index].error != ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;

      case "dateTime":
        {
          const data = [...this.state.data];

          const date = new Date();
          const dformat =
            [
              date.getFullYear(),
              date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : "0" + (date.getMonth() + 1),
              date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
            ].join("-") +
            "T" +
            [
              date.getHours() >= 10 ? date.getHours() : "0" + date.getHours(),
              date.getMinutes() >= 10
                ? date.getMinutes()
                : "0" + date.getMinutes(),
              date.getSeconds() >= 10
                ? date.getSeconds()
                : "0" + date.getSeconds()
            ].join(":");

          data[index]["value"] = dformat;

          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(5);
          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                  <DateTimePicker
                    label={this.state.data[index]["label"]}
                    required={this.state.data[index]["required"]}
                    fullWidth
                    error={this.state.data[index]["error"] !== ""}
                    value={this.state.data[index]["value"]}
                    onChange={date => this.handleDateTimeChange(date, item.id)}
                    variant={this.state.data[index]["variant"]}
                    margin="normal"
                    helperText={
                      this.state.data[index]["helperText"] !== ""
                        ? this.state.data[index]["helperText"]
                        : null
                    }
                  />
                </MuiPickersUtilsProvider>
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;

      case "time":
        {
          const data = [...this.state.data];

          const date = new Date();
          const dformat =
            "2014-08-18T" +
            [
              date.getHours() >= 10 ? date.getHours() : "0" + date.getHours(),
              date.getMinutes() >= 10
                ? date.getMinutes()
                : "0" + date.getMinutes()
            ].join(":");

          data[index]["value"] = dformat;

          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(5);
          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                  <TimePicker
                    label={this.state.data[index]["label"]}
                    required={this.state.data[index]["required"]}
                    error={this.state.data[index]["error"] !== ""}
                    fullWidth
                    value={this.state.data[index]["value"]}
                    onChange={date => this.handleTimeChange(date, item.id)}
                    variant={this.state.data[index]["variant"]}
                    margin="normal"
                    helperText={
                      this.state.data[index]["helperText"] !== ""
                        ? this.state.data[index]["helperText"]
                        : null
                    }
                  />
                </MuiPickersUtilsProvider>
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;

      case "enum":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(
            this.CalculMaxLength(item.possibles)
          );
          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <FormControl
                  required={this.state.data[index]["required"]}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                >
                  <FormLabel>{item.label}</FormLabel>
                  <RadioGroup
                    value={this.state.data[index]["value"]}
                    onChange={this.handleChange(item.id)}
                  >
                    {this.state.data[index]["possibles"].map(val => {
                      return (
                        <FormControlLabel
                          key={val.key}
                          value={val.value}
                          control={<Radio />}
                          label={val.label}
                        />
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;

      case "set":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(
            this.CalculMaxLength(item.possibles)
          );
          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <FormControl
                  required={this.state.data[index]["required"]}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                >
                  <FormLabel>{item.label}</FormLabel>

                  <FormGroup>
                    {this.state.data[index]["possibles"].map(val => {
                      return (
                        <FormControlLabel
                          key={val.key}
                          control={
                            <Checkbox
                              checked={val.checked}
                              onChange={event =>
                                this.handleCheckBoxChange(
                                  event,
                                  item.id,
                                  val.key
                                )
                              }
                              value={val.value}
                            />
                          }
                          label={val.label}
                        />
                      );
                    })}
                  </FormGroup>
                </FormControl>
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;

      case "select-multi":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(
            this.CalculMaxLength(item.possibles)
          );
          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <Select
                  isSearchable
                  placeholder={this.state.data[index]["label"]}
                  required={this.state.data[index]["required"]}
                  error={this.state.data[index]["error"] !== ""}
                  fullWidth
                  onChange={selectedOption =>
                    this.handleSelectMultiChange(selectedOption, item.id)
                  }
                  options={item.possibles}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                  helperText={
                    this.state.data[index]["helperText"] !== ""
                      ? this.state.data[index]["helperText"]
                      : null
                  }
                  isMulti
                />
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;
      case "select":
        {
          let xs,
            sm,
            md,
            lg,
            xl = 12;
          [xs, sm, md, lg, xl] = this.CalculSize(
            this.CalculMaxLength(item.possibles)
          );
          return (
            <Grid key={item.id} item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <div>
                <Select
                  isSearchable
                  placeholder={this.state.data[index]["label"]}
                  required={this.state.data[index]["required"]}
                  error={this.state.data[index]["error"] !== ""}
                  fullWidth
                  onChange={selectedOption =>
                    this.handleSelectMultiChange(selectedOption, item.id)
                  }
                  options={item.possibles}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                  helperText={
                    this.state.data[index]["helperText"] !== ""
                      ? this.state.data[index]["helperText"]
                      : null
                  }
                />
                <Snackbar
                  open={this.state.data[index].error !== ""}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  ContentProps={{
                    classes: {
                      root: classes.error
                    }
                  }}
                  variant="error"
                  message={
                    <span className={classes.snackMessage}>
                      <Error style={{ marginRight: 15 }} />
                      {this.state.data[index]["error"]}
                    </span>
                  }
                />
              </div>
            </Grid>
          );
        }

        break;
      default:
        break;
    }
  };

  sendData = () => {
    this.props.sendData(
      this.state.data.map(item => {
        return {
          id: item.id,
          value: item.value
        };
      })
    );
  };
  render() {
    const obj = this.CreateObject();
    return (
      <Card style={{ margin: 4, padding: 4, paddingBottom: 100 }}>
        <form onChange={this.sendData}>{obj}</form>
      </Card>
    );
  }
}

export default withStyles(styles)(Form);
