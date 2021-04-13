import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import { StayPrimaryLandscape } from "@material-ui/icons";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid'
import Slider from "@material-ui/core/Slider";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
    justifyContent: "center",
    align: "center",
    margin: "10px",
    padding: "10px"
    //borderStyle: "solid",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

const Personal = ({ bachelorInfo }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(bachelorInfo.Commitment);
    const [textFilter, setTextFilter] = useState("");
    const submitInfo= React.useCallback(
        
        function (event) {
            event.preventDefault();

            // * define async function for setting data and saving it to the state
            async function _setBachelor() {
                
                console.log('editor: ', textFilter);
                const submissionTime = new Date();
                const uploadObject = bachelorInfo;
                bachelorInfo.Commitment = value;
                bachelorInfo.mgmGrand = textFilter;
                bachelorInfo.LastSubmit = submissionTime;
                console.log('uploadObject: ', uploadObject);

                const stageTwo = JSON.stringify(uploadObject);
                console.log('stageTwo ', stageTwo);
                // //for local dev
                // const baseUrl = 'localhost:3000'
                // const res = await fetch(`http://${baseUrl}/api/bachelor`, {
                //     method: 'post',
                //     body: stageTwo
                // });

                //for production
                //for production
                const baseUrl = process.env.VERCEL_URL;
                const res = await fetch(`https://myarias.vercel.app/api/bachelor`, {
                    method: 'post',
                    body: stageTwo
                });

                console.log('res: ', res);
            }
            alert("SUBMITTED! BUCKLED UP!");
            // * call async function
            _setBachelor();
        },
    );

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleInputText = React.useCallback(
        (event) => {
            setTextFilter(event.target.value);
        },
        [setTextFilter]
    );
    return (
        <Card className={classes.root} >
        <CardContent>
            If any of the travel info is wrong, you can correct it at the bottom of the page.
          <Typography variant="h3" color="textPrimary" gutterBottom>
            {bachelorInfo.Name}
          </Typography>
          <Typography className={classes.title}>
           Arrival: {bachelorInfo.Arrival}
          </Typography>
          <Typography className={classes.title}>
            Departure: {bachelorInfo.Departure}
          </Typography>
          <Typography className={classes.title}>
            Flight Number: {bachelorInfo.Flight_Number}
          </Typography>
          <Typography className={classes.title}>
            Room Number: {bachelorInfo.Room_Number}
          </Typography>
          <Typography className={classes.title}>
            Vaccinated: {bachelorInfo.Vaccinated}
          </Typography>
          <Typography className={classes.title}>
            Balance Due: {bachelorInfo.Balance_Due}
          </Typography>
          <br />
          <div>
                        <Typography variant='h4'>
                        Commitment Level
                        </Typography>
                        0-10 scale
                        <br />
                        <Grid container spacing={2}>
                            <Grid item>
                                Can't Come
                            </Grid>
                            <Grid item xs>
                                <Slider value={value} onChange={handleChange}  defaultValue={5}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={0}
                                max={10}/>
                            </Grid>
                            <Grid item>
                                Can't Wait
                            </Grid>
                        </Grid>
                        <br />
                    </div>
                    <br />
                    <CardActions>
                    <div>
                    <Button variant="contained" color="primary"
                        onClick={submitInfo}
                    >
                        Submit
                    </Button>
                    </div>
                </CardActions>
        </CardContent>    
      </Card>
      
    );
};

export default Personal;