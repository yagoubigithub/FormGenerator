import React, { Component } from "react";

import { TextField, Snackbar, FormGroup, Checkbox,Grid,Card } from "@material-ui/core";
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
      if (item.id == name) {
        item["selectedDate"] = dformat;
        console.log(item["selectedDate"]);
      }
    });
    this.setState({
      data
    });
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
      if (item.id == name) {
        item["selectedDate"] = dformat;
        console.log(item["selectedDate"]);
      }
    });
    this.setState({
      data
    });
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
      if (item.id == name) {
        item["selectedDate"] = dformat;
        console.log(item["selectedDate"]);
      }
    });
    this.setState({
      data
    });
  };

  handleChange = name => event => {
    const data = [...this.state.data];
    data.map(item => {
      if (item.id == name) {
        item.value = event.target.value;
      }
    });
    this.setState({
      data
    });
  };
  handleSelectMultiChange = (selectedOption,name) => {
    const data = [...this.state.data];
    data.map(item => {
      if (item.id == name) {
       
        item.value = selectedOption;
      }
    });
    this.setState({
      data
    });
  };
  
  handleCheckBoxChange = (event, name) => {
    const data = [...this.state.data];
    data.map(item => {
      if (item.id == name) {
        item.possibles.map(possible => {
          possible["checked"] = event.target.checked;
        });
      }
    });
    this.setState({
      data
    });
  };
 


  Input = (item, index) => {
    const { classes } = this.props;
    switch (item.type) {
      case "int":{
        let sm,md,lg,xl = 12;
        if(this.state.data[index]["inputSize"] === 'sm'){
          [sm,md,lg,xl]= [6,3,3,3]
        }
        if(this.state.data[index]["inputSize"] === 'md'){
          [sm,md,lg,xl]= [9,6,6,6]
        }
        if(this.state.data[index]["inputSize"] === 'lg'){
          [sm,md,lg,xl]= [12,9,9,9]
        }
        if(this.state.data[index]["inputSize"] === 'xl'){
          [sm,md,lg,xl]= [12,12,12,12]
        }
  
          return (
            <Grid key={item.id} item 
            xs={12}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            >
            <div >
            <TextField
                required={this.state.data[index]["required"]}
                onChange={this.handleChange(item.id)}
                id={item.id}
                label={this.state.data[index]["label"]}
                type="number"
                fullWidth
                helperText={
                  this.state.data[index]["helperText"] != ""
                    ? this.state.data[index]["helperText"]
                    : null
                }
                error={this.state.data[index]["error"] != ""}
                value={this.state.data[index]["value"]}
                variant={this.state.data[index]["variant"]}
                margin="normal"
              />
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

      case "decimale":
      {
        let sm,md,lg,xl = 12;
        if(this.state.data[index]["inputSize"] === 'sm'){
          [sm,md,lg,xl]= [6,3,3,3]
        }
        if(this.state.data[index]["inputSize"] === 'md'){
          [sm,md,lg,xl]= [9,6,6,6]
        }
        if(this.state.data[index]["inputSize"] === 'lg'){
          [sm,md,lg,xl]= [12,9,9,9]
        }
        if(this.state.data[index]["inputSize"] === 'xl'){
          [sm,md,lg,xl]= [12,12,12,12]
        }

          return (
            <Grid key={item.id} item 
            xs={12}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            >
            <div >
              <TextField
                required={this.state.data[index]["required"]}
                onChange={this.handleChange(item.id)}
                id={item.id}
                label={this.state.data[index]["label"]}
                type="number"
                fullWidth
                error={this.state.data[index]["error"] != ""}
                value={this.state.data[index]["value"]}
                variant={this.state.data[index]["variant"]}
                margin="normal"
                inputProps={{ step: 1 / Math.pow(10, item.size[1]) }}
                helperText={
                  this.state.data[index]["helperText"] != ""
                    ? this.state.data[index]["helperText"]
                    : null
                }
              />
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

      case "varchar":{
        let sm,md,lg,xl = 12;
        if(this.state.data[index]["inputSize"] === 'sm'){
          [sm,md,lg,xl]= [6,3,3,3]
        }
        if(this.state.data[index]["inputSize"] === 'md'){
          [sm,md,lg,xl]= [9,6,6,6]
        }
        if(this.state.data[index]["inputSize"] === 'lg'){
          [sm,md,lg,xl]= [12,9,9,9]
        }
        if(this.state.data[index]["inputSize"] === 'xl'){
          [sm,md,lg,xl]= [12,12,12,12]
        }
        return (
          <Grid key={item.id} item 
          xs={12}
          sm={sm}
            md={md}
            lg={lg}
            xl={xl}
          >
          <div>
            <TextField
              required={this.state.data[index]["required"]}
              onChange={this.handleChange(item.id)}
              id={item.id}
              label={this.state.data[index]["label"]}
              type="text"
              fullWidth
              error={this.state.data[index]["error"] != ""}
              value={this.state.data[index]["value"]}
              variant={this.state.data[index]["variant"]}
              margin="normal"
              helperText={
                this.state.data[index]["helperText"] != ""
                  ? this.state.data[index]["helperText"]
                  : null
              }
            />
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
      case "text":
      {
        let sm,md,lg,xl = 12;
        if(this.state.data[index]["inputSize"] === 'sm'){
          [sm,md,lg,xl]= [6,3,3,3]
        }
        if(this.state.data[index]["inputSize"] === 'md'){
          [sm,md,lg,xl]= [9,6,6,6]
        }
        if(this.state.data[index]["inputSize"] === 'lg'){
          [sm,md,lg,xl]= [12,9,9,9]
        }
        if(this.state.data[index]["inputSize"] === 'xl'){
          [sm,md,lg,xl]= [12,12,12,12]
        }
        return (
          <Grid key={item.id} item 
          xs={12}
          sm={sm}
            md={md}
            lg={lg}
            xl={xl}
          >
            <div >
              <TextField
                onChange={this.handleChange(item.id)}
                id={item.id}
                label={this.state.data[index]["label"]}
                required={this.state.data[index]["required"]}
                type="text"
                multiline
                rowsMax={this.state.data[index]["rows"][1]}
                rows={this.state.data[index]["rows"][0]}
                fullWidth
                error={this.state.data[index]["error"] != ""}
                value={this.state.data[index]["value"]}
                variant={this.state.data[index]["variant"]}
                margin="normal"
                helperText={
                  this.state.data[index]["helperText"] != ""
                    ? this.state.data[index]["helperText"]
                    : null
                }
              />
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

      case "date":
     {
      const data = [...this.state.data];

      const date = new Date();
      const dformat = [
        date.getFullYear(),
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1),
        date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
      ].join("-");

      if (data[index]["selectedDate"] == undefined)
        data[index]["selectedDate"] = dformat;
        let sm,md,lg,xl = 12;
        if(this.state.data[index]["inputSize"] === 'sm'){
          [sm,md,lg,xl]= [6,3,3,3]
        }
        if(this.state.data[index]["inputSize"] === 'md'){
          [sm,md,lg,xl]= [9,6,6,6]
        }
        if(this.state.data[index]["inputSize"] === 'lg'){
          [sm,md,lg,xl]= [12,9,9,9]
        }
        if(this.state.data[index]["inputSize"] === 'xl'){
          [sm,md,lg,xl]= [12,12,12,12]
        }
        return (
          <Grid key={item.id} item 
          xs={12}
          sm={sm}
            md={md}
            lg={lg}
            xl={xl}
          >
        <div >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              label={this.state.data[index]["label"]}
              required={this.state.data[index]["required"]}
              fullWidth
              value={this.state.data[index]["selectedDate"]}
              onChange={date => this.handleDateChange(date, item.id)}
              variant={this.state.data[index]["variant"]}
              margin="normal"
              error={this.state.data[index]["error"] != ""}
              helperText={
                this.state.data[index]["helperText"] != ""
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

          if (data[index]["selectedDate"] == undefined)
            data[index]["selectedDate"] = dformat;
            if (data[index]["selectedDate"] == undefined)
            data[index]["selectedDate"] = dformat;
            let sm,md,lg,xl = 12;
            if(this.state.data[index]["inputSize"] === 'sm'){
              [sm,md,lg,xl]= [6,3,3,3]
            }
            if(this.state.data[index]["inputSize"] === 'md'){
              [sm,md,lg,xl]= [9,6,6,6]
            }
            if(this.state.data[index]["inputSize"] === 'lg'){
              [sm,md,lg,xl]= [12,9,9,9]
            }
            if(this.state.data[index]["inputSize"] === 'xl'){
              [sm,md,lg,xl]= [12,12,12,12]
            }
            return (
              <Grid key={item.id} item 
              xs={12}
              sm={sm}
                md={md}
                lg={lg}
                xl={xl}
              >
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label={this.state.data[index]["label"]}
                  required={this.state.data[index]["required"]}
                  fullWidth
                  error={this.state.data[index]["error"] != ""}
                  value={this.state.data[index]["selectedDate"]}
                  onChange={date => this.handleDateTimeChange(date, item.id)}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                  helperText={
                    this.state.data[index]["helperText"] != ""
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

          if (data[index]["selectedDate"] == undefined)
            data[index]["selectedDate"] = dformat;

            if (data[index]["selectedDate"] == undefined)
            data[index]["selectedDate"] = dformat;
            let sm,md,lg,xl = 12;
            if(this.state.data[index]["inputSize"] === 'sm'){
              [sm,md,lg,xl]= [6,3,3,3]
            }
            if(this.state.data[index]["inputSize"] === 'md'){
              [sm,md,lg,xl]= [9,6,6,6]
            }
            if(this.state.data[index]["inputSize"] === 'lg'){
              [sm,md,lg,xl]= [12,9,9,9]
            }
            if(this.state.data[index]["inputSize"] === 'xl'){
              [sm,md,lg,xl]= [12,12,12,12]
            }
            return (
              <Grid key={item.id} item 
              xs={12}
              sm={sm}
                md={md}
                lg={lg}
                xl={xl}
              >
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  label={this.state.data[index]["label"]}
                  required={this.state.data[index]["required"]}
                  error={this.state.data[index]["error"] != ""}
                  fullWidth
                  value={this.state.data[index]["selectedDate"]}
                  onChange={date => this.handleTimeChange(date, item.id)}
                  variant={this.state.data[index]["variant"]}
                  margin="normal"
                  helperText={
                    this.state.data[index]["helperText"] != ""
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

      case "enum":
        {
          const data = [...this.state.data];

          
       

          let sm,md,lg,xl = 12;
          if(this.state.data[index]["inputSize"] === 'sm'){
            [sm,md,lg,xl]= [6,3,3,3]
          }
          if(this.state.data[index]["inputSize"] === 'md'){
            [sm,md,lg,xl]= [9,6,6,6]
          }
          if(this.state.data[index]["inputSize"] === 'lg'){
            [sm,md,lg,xl]= [12,9,9,9]
          }
          if(this.state.data[index]["inputSize"] === 'xl'){
            [sm,md,lg,xl]= [12,12,12,12]
          }
        return (
          <Grid key={item.id} item 
          xs={12}
          sm={sm}
            md={md}
            lg={lg}
            xl={xl}
          >
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

      case "set":
        {
         
          let sm,md,lg,xl = 12;
          if(this.state.data[index]["inputSize"] === 'sm'){
            [sm,md,lg,xl]= [6,3,3,3]
          }
          if(this.state.data[index]["inputSize"] === 'md'){
            [sm,md,lg,xl]= [9,6,6,6]
          }
          if(this.state.data[index]["inputSize"] === 'lg'){
            [sm,md,lg,xl]= [12,9,9,9]
          }
          if(this.state.data[index]["inputSize"] === 'xl'){
            [sm,md,lg,xl]= [12,12,12,12]
          }
        return (
          <Grid key={item.id} item 
          xs={12}
          sm={sm}
            md={md}
            lg={lg}
            xl={xl}
          >
            <div >
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
                              this.handleCheckBoxChange(event, item.id)
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

      case "select-multi":
        {
         
          let sm,md,lg,xl = 12;
          if(this.state.data[index]["inputSize"] === 'sm'){
            [sm,md,lg,xl]= [6,3,3,3]
          }
          if(this.state.data[index]["inputSize"] === 'md'){
            [sm,md,lg,xl]= [9,6,6,6]
          }
          if(this.state.data[index]["inputSize"] === 'lg'){
            [sm,md,lg,xl]= [12,9,9,9]
          }
          if(this.state.data[index]["inputSize"] === 'xl'){
            [sm,md,lg,xl]= [12,12,12,12]
          }
        return (
          <Grid key={item.id} item 
          xs={12}
          sm={sm}
            md={md}
            lg={lg}
            xl={xl}
          >
            <div>
              <Select
              isSearchable 
              placeholder={this.state.data[index]["label"]}
                required={this.state.data[index]["required"]}
                error={this.state.data[index]["error"] != ""}
                fullWidth
                onChange={(selectedOption)=>this.handleSelectMultiChange(selectedOption,item.id)}
                options={item.possibles}
                variant={this.state.data[index]["variant"]}
                margin="normal"
                helperText={
                  this.state.data[index]["helperText"] != ""
                    ? this.state.data[index]["helperText"]
                    : null
                }
               isMulti
              />
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
        case "select":
        {
          let sm,md,lg,xl = 12;
        if(this.state.data[index]["inputSize"] === 'sm'){
          [sm,md,lg,xl]= [6,3,3,3]
        }
        if(this.state.data[index]["inputSize"] === 'md'){
          [sm,md,lg,xl]= [9,6,6,6]
        }
        if(this.state.data[index]["inputSize"] === 'lg'){
          [sm,md,lg,xl]= [12,9,9,9]
        }
        if(this.state.data[index]["inputSize"] === 'xl'){
          [sm,md,lg,xl]= [12,12,12,12]
        }
          return (
            <Grid key={item.id} item 
            xs={12}
            sm={sm}
              md={md}
              lg={lg}
              xl={xl}
            >
            <div >
              <Select
              isSearchable 
              placeholder={this.state.data[index]["label"]}
                required={this.state.data[index]["required"]}
                error={this.state.data[index]["error"] != ""}
                fullWidth
                onChange={(selectedOption)=>this.handleSelectMultiChange(selectedOption,item.id)}
                options={item.possibles}
                variant={this.state.data[index]["variant"]}
                margin="normal"
                helperText={
                  this.state.data[index]["helperText"] != ""
                    ? this.state.data[index]["helperText"]
                    : null
                }
              
              />
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
      default:
        break;
    }
  };

  render() {
    return (
      <Card style={{margin : 4,padding : 4}}>
              <Grid  alignItems="flex-end" container spacing={16}>{this.state.data.map((item, index) => this.Input(item, index))}</Grid>

      </Card>
    );
  }
}

export default withStyles(styles)(Form);
