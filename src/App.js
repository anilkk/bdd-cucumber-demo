import React from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import "./styles.css";

const bulbLightOn =
  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b55/060a/006b8e70c722b42723d29228d9321e3e";
const bulbLightOff =
  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/79de/6460848b8c2e11c8340911803fb7c8fb";
const sunAndCLoudUrl =
  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6633/90f1/1d2d41a10dc07ee4cad3e9988a24f10e";
const moonAndStarUrl =
  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e73/5a4c/03f3716dbf829d9f173283674258196e";
const homeWithLightUrl =
  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/646b/60ba/9bd59b5d1072b939bc58f6408bb5c4c6";
const homeWithoutLightUrl =
  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bf4/347c/88d5c0c68d76f3b8026386981eb1a0a3";

const ToggleButtonSizes = function() {
  const [myLight, setMyLight] = React.useState(false);
  const [myTime, setMyTime] = React.useState(true);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={3}
      className={myTime ? "day" : "night"}
    >
      <Grid sm={12} />
      <Grid item sm={4}>
        <Grid item>
          <h1 className="banner-header">BDD Demo</h1>
        </Grid>
        <Grid item>
          <h3>
            Change Context (GIVEN){" "}
            <label className="timeSwitch">
              <input
                type="checkbox"
                checked={myTime}
                onChange={event => {
                  setMyTime(event.target.checked);
                }}
              />
              <span class="slider round" />
            </label>{" "}
            {/* Day */}
          </h3>
          <img
            src={myTime ? sunAndCLoudUrl : moonAndStarUrl}
            alt={myTime ? "Sun and cloud" : "moon and star"}
          />
          <p className="font-sty-italic">
            Maria reading the news papper in the {myTime} with light{" "}
            {myLight ? "on" : "off"}
          </p>
          <hr />
        </Grid>
        <Grid item container direction="column" alignItems="flex-end">
          <Grid item>
            <h3>
              Trigger Action (WHEN):{" "}
              <label className="switch">
                <input
                  type="checkbox"
                  checked={myLight}
                  onChange={event => {
                    setMyLight(event.target.checked);
                  }}
                />
                <span class="slider round" />
              </label>
            </h3>
          </Grid>
          <Grid item>
            <img
              src={myLight ? bulbLightOn : bulbLightOff}
              alt={myLight ? "Bulb light on" : "Bulb light off"}
            />
            <p className="font-sty-italic">Maria can perform this action</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={8}>
        <img
          style={{ "max-width": "100%" }}
          src={myLight ? homeWithLightUrl : homeWithoutLightUrl}
          alt="home"
        />
        <Grid container justify="center">
          <h2>
            <Alert
              variant="filled"
              icon={false}
              severity={myTime || myLight ? "success" : "error"}
              test-data={myTime || myLight ? "success" : "fail"}
            >
              <AlertTitle>Outcome (THEN):</AlertTitle>
              Maria {myTime || myLight ? "can" : "can't"}{" "}
              <strong>read the book</strong>{" "}
            </Alert>
          </h2>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function App() {
  return (
    <div className="App">
      <ToggleButtonSizes />
    </div>
  );
}
