import React from "react";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Alert from "@material-ui/lab/Alert";
import "./styles.css";

const outcomes = {
  daylighton: {
    url:
      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0b0/892a/67b9a888d92879384fa9282a8e7fd4c3",
    context: "day with light on",
    state: "can read the news paper"
  },
  daylightoff: {
    url:
      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d4/56ef/24154f97bf9478debe59aaf92dd1e052",
    context: "day with light off",
    state: "can read the news paper"
  },
  nightlighton: {
    url:
      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4238/e3a4/ac35fda338f0116c0f5779b6c3af068a",
    context: "night with light on",
    state: "can read the news paper"
  },
  nightlightoff: {
    url:
      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dacc/8201/0044f49c389a2243f91d97eb907e995a",
    context: "night with light off",
    state: "can't read the news paper"
  }
};
const ToggleButtonSizes = function() {
  const [time, setTime] = React.useState("day");
  const [light, setLight] = React.useState("off");

  const handleChangeTime = (event, newTime) => {
    setTime(newTime || "day");
  };

  const handleChangeLight = (event, newLight) => {
    setLight(newLight || "off");
  };

  const children = [
    <ToggleButton key={1} value="day" test-data="day">
      Day <WbSunnyIcon />
    </ToggleButton>,
    <ToggleButton key={2} value="night" test-data="night">
      Night
      <Brightness3Icon />
    </ToggleButton>
  ];

  const lightChildren = [
    <ToggleButton key={1} value="on" test-data="light-on">
      On <WbIncandescentIcon />
    </ToggleButton>,
    <ToggleButton key={2} value="off" test-data="light-off">
      off
      <EmojiObjectsTwoToneIcon />
    </ToggleButton>
  ];

  return (
    <Grid container direction="row" alignItems="center" spacing={3}>
      <Grid xs={12}>
        <h1>BDD Cucumber demo</h1>
        <hr />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Grid>
          <h3>Outcome</h3>
          <h3>
            {!(time === "night" && light === "off") && (
              <Alert variant="filled" severity="success" test-data="success">
                John {outcomes[time + "light" + light].state}
              </Alert>
            )}
            {time === "night" && light === "off" && (
              <Alert variant="filled" severity="error" test-data="fail">
                John {outcomes[time + "light" + light].state}
              </Alert>
            )}
          </h3>
        </Grid>
        <Grid item>
          <h3>Context</h3>
          <ToggleButtonGroup
            size="small"
            value={time}
            exclusive
            onChange={handleChangeTime}
          >
            {children}
          </ToggleButtonGroup>
          <p>
            John reading the news papper in the{" "}
            {outcomes[time + "light" + light].context}
          </p>
          <hr />
        </Grid>
        <Grid item>
          <h3>Action</h3>
          <ToggleButtonGroup
            size="small"
            value={light}
            exclusive
            onChange={handleChangeLight}
          >
            {lightChildren}
          </ToggleButtonGroup>
          <p>John can perform this action</p>
          <hr />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        <img
          style={{ "max-width": "100%" }}
          src={outcomes[time + "light" + light].url}
          alt={outcomes[time + "light" + light].context}
        />
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
