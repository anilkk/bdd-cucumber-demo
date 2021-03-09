import React from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import "./styles.css";

const bulbLightImage = {
  yellow: 'https://res.cloudinary.com/anilkumark/image/upload/v1615237104/bdd/yellow-bulb-light-on_cogey1.png',
  red: 'https://res.cloudinary.com/anilkumark/image/upload/v1615237103/bdd/red-bulb-light-on_ha2bup.png',
  orange: 'https://res.cloudinary.com/anilkumark/image/upload/v1615237103/bdd/orange-bulb-light-on_vcjvmx.png'
};

const homeWithLightImage = {
  yellow: 'https://res.cloudinary.com/anilkumark/image/upload/v1615237835/bdd/light-on-yellow_vctyzi.png',
  red: 'https://res.cloudinary.com/anilkumark/image/upload/v1615237834/bdd/light-on-red_vidznn.png',
  orange: 'https://res.cloudinary.com/anilkumark/image/upload/v1615237837/bdd/light-on-orange_ad1huy.png'
};

const bulbLightOff =
  "https://res.cloudinary.com/anilkumark/image/upload/v1594198626/bdd/bulb-light-off_romzun.png";
const sunAndCLoudUrl =
  "https://res.cloudinary.com/anilkumark/image/upload/v1594198627/bdd/sun-and-sky_xlgedq.png";
const moonAndStarUrl =
  "https://res.cloudinary.com/anilkumark/image/upload/v1594198626/bdd/moon-and-star_rqivr9.png";
const homeWithoutLightUrl =
  "https://res.cloudinary.com/anilkumark/image/upload/v1615305440/bdd/light-off-new_qwwf2u.png";

const BddDemo = function() {
  const [myLight, setMyLight] = React.useState(false);
  const [bulbLightOn, setBulbLightOn] = React.useState(bulbLightImage.yellow);
  const [homeWithLightUrl, setHomeWithLightUrl] = React.useState(homeWithLightImage.yellow);
  const [myTime, setMyTime] = React.useState(true);
  const [lampLight, setLampLight] = React.useState('yellow');

  const handleLampLightChange = (event) => {
    setLampLight(event.target.value);
    setBulbLightOn(bulbLightImage[event.target.value]);
    setHomeWithLightUrl(homeWithLightImage[event.target.value]);
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={3}
      className={myTime ? "day" : "night"}
    >
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Grid item>
              <h1 className="banner-header">BDD Demo</h1>
            </Grid>
            <Grid item container direction="column" alignItems="flex-end">
              <h3>
                Change Context (GIVEN):{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={myTime}
                    test-data={myTime ? "day" : "night"}
                    onChange={event => {
                      setMyTime(event.target.checked);
                    }}
                  />
                  <span className="slider round" />
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
                      test-data={myLight ? "light-on" : "light-off"}
                      onChange={event => {
                        setMyLight(event.target.checked);
                      }}
                    />
                    <span className="slider round" />
                  </label>
                </h3>
              </Grid>
              <Grid item>
                <img
                  src={myLight ? bulbLightOn : bulbLightOff}
                  alt={myLight ? "Bulb light on" : "Bulb light off"}
                />
                <p className="font-sty-italic">Maria can perform this action</p>
                <h3> Choose lamp light color</h3>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="gender" name="gender1" value={lampLight} onChange={handleLampLightChange}>
                    <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
                    <FormControlLabel value="red" control={<Radio />} label="Red" />
                    <FormControlLabel value="orange" control={<Radio />} label="Orange" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={8}>
            <img
              style={{ maxWidth: "500px" }}
              src={myLight ? homeWithLightUrl : homeWithoutLightUrl}
              alt="home"
            />
            <Grid container justify="center">
              <h2>
                <Alert
                  variant="filled"
                  icon={false}
                  severity={myTime || myLight ? "success" : "error"}
                  test-data={myTime || myLight ? "success" : "error"}
                >
                  <AlertTitle>Outcome (THEN):</AlertTitle>
                  Maria {myTime || myLight ? "can" : "can't"}{" "}
                  <strong>read the book</strong>{" "}
                </Alert>
              </h2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Gherkins = () => (
  <Grid container direction="row" alignItems="center" spacing={3}>
    <Grid item xs={12}>
      <h1> </h1>
      <div>
        By{' '}
        <a href="https://twitter.com/anilbms75" target="_blank" rel="noopener noreferrer">
          @anilbms75
        </a>
        , for more details about the project refer on{' '}
        <a href="https://github.com/anilkk/bdd-cucumber-demo" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        .
      </div>
    </Grid>
  </Grid>
);
export default function App() {
  return (
    <div className="App">
      <BddDemo />
      <Gherkins />
    </div>
  );
}
