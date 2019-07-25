import React, { Component } from "react";
import _Input from "./components/Input";
import { Grid } from "@material-ui/core";

import { Email, PermIdentity, Lock, FileCopy } from "@material-ui/icons";

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const username = {
  id: "username_id",
  label: "Username",
  type: "varchar",
  value: "",
  length: 50
};
const password = {
  id: "password_id",
  label: "Password",
  type: "password",
  value: "",
  length: 50,
  error: "Hello error"
};
const email = {
  id: "email_id",
  label: "Email",
  type: "email",
  value: "",
  length: 50
};
const file = {
  id: "file_id",
  label: "upload my image",
  type: "files"
};
const image = {
  id: "image_id",
  label: "upload my image",
  type: "images"
};
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoieWFnb3ViaSIsImEiOiJjanllZHlleGEwNW05M2NtbWhmYjR2N2xoIn0.ImhC9ZoDnRhcjD6LGsd03g"
});
const route = [
  [-122.48369693756104, 37.83381888486939],
  [-122.48348236083984, 37.83317489144141],
  [-122.48339653015138, 37.83270036637107],
  [-122.48356819152832, 37.832056363179625],
  [-122.48404026031496, 37.83114119107971],
  [-122.48404026031496, 37.83049717427869],
  [-122.48348236083984, 37.829920943955045],
  [-122.48356819152832, 37.82954808664175],
  [-122.48507022857666, 37.82944639795659],
  [-122.48610019683838, 37.82880236636284],
  [-122.48695850372314, 37.82931081282506],
  [-122.48700141906738, 37.83080223556934],
  [-122.48751640319824, 37.83168351665737],
  [-122.48803138732912, 37.832158048267786],
  [-122.48888969421387, 37.83297152392784],
  [-122.48987674713133, 37.83263257682617],
  [-122.49043464660643, 37.832937629287755],
  [-122.49125003814696, 37.832429207817725],
  [-122.49163627624512, 37.832564787218985],
  [-122.49223709106445, 37.83337825839438],
  [-122.49378204345702, 37.83368330777276]
];
class App extends Component {
  state = {
    images : [],
  }
  onChange = (event,id,images) => {
   console.log(event.target.files,images);

  };

  render() {
    return (
      <Grid spacing={16} container>
        <_Input
          id={username.id}
          length={username.length}
          value={username.value}
          type={username.type}
          onchange={this.onChange}
          label={username.label}
          icon={<PermIdentity />}
          error={username.error}
        />

        <_Input
          id={email.id}
          length={email.length}
          value={email.value}
          type={email.type}
          onchange={this.onchange}
          label={email.label}
          icon={<Email />}
          error={email.error}
        />

        <_Input
          id={password.id}
          length={password.length}
          value={password.value}
          type={password.type}
          onchange={this.onchange}
          label={password.label}
          icon={<Lock />}
          error={password.error}
        />
        <_Input
          id={file.id}
          type={file.type}
          onchange={this.onChange}
          label={file.label}
          icon={<FileCopy />}
          length={50}
          oldFiles={['1.jpg','2.jpg','3.jpg']}
          error={file.error}
        />
        <_Input
        icon={<Email />}
          id={image.id}
          type={image.type}
          onchange={(event,id ,images)=>this.onChange(event,id,images)}
          label={image.label}
         path='./'
         oldImages={['1.jpg','2.jpg','3.jpg']}
          error={image.error}
          length={50}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <input type="file" accept="image/*" capture="camera" />
        <Map
          style="mapbox://styles/yagoubi/cjyei6h3z41io1coc0ypd9hi2"
          center={[-122.486052, 37.830348]}
          zoom={[15]}
          containerStyle={{
            height: "400px",
            width: "400px"
          }}
        >
          <Layer
            type="line"
            paint={{
              "line-color": "red",
              "line-width": 4
            }}
          >
            <Feature coordinates={route} />
          </Layer>

          {route.map((point, index) => {
            return (
              <Layer
                type="circle"
                key={`marker${index}`}
                onClick={d => {
                  console.log("ggg");
                }}
              >
                <Feature coordinates={point} />
              </Layer>
            );
          })}
        </Map>
        
      </Grid>
    );
  }
}

export default App;
