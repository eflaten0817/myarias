import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import Slider from "@material-ui/core/Slider";
import fetch from "isomorphic-unfetch";
import FormControl from '@material-ui/core/FormControl';


import Personal from '../components/Personal';
import Wednesday from '../components/Wednesday';
import Thursday from '../components/Thursday';
import Friday from '../components/Friday';
import Saturday from '../components/Saturday';
import Sunday from '../components/Sunday';
import RoomList from '../components/RoomList';
import List from '@material-ui/core/List';

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
    background: 'primary'
  },
  pos: {
    marginBottom: 12,
  },
});

const BachelorItem = ({ bachelorInfo }) => {
    const classes = useStyles();

    const [textFilter, setTextFilter] = useState("");
    const [flightNumberFilter, setFlightNumberFilter] = useState("");
    const [departureFilter, setDepartureFilter] = useState("");
    const [drinkFilter, setDrinkFilter] = useState("");
    const [foodFilter, setFoodFilter] = useState("");
    const [beerFilter, setBeerFilter] = useState("");
    const [liquorFilter, setLiquorFilter] = useState("");
    const [allergiesFilter, setAllergiesFilter] = useState("");
    const [vaccinatedFilter, setVaccinatedFilter] = useState("");


    const submitInfo= React.useCallback(
        
        function (event) {
            event.preventDefault();

            // * define async function for setting data and saving it to the state
            async function _setBachelor() {
                
                console.log('editor: ', textFilter);
                const submissionTime = new Date();
                const uploadObject = bachelorInfo;
                bachelorInfo.Arrival = textFilter;
                bachelorInfo.Departure = departureFilter;
                bachelorInfo.Drink = drinkFilter;
                bachelorInfo.Food = foodFilter;
                bachelorInfo.Beer = beerFilter;
                bachelorInfo.Liquor = liquorFilter;
                bachelorInfo.Allergies = allergiesFilter;
                bachelorInfo.LastSubmit = submissionTime;
                bachelorInfo.Vaccinated = vaccinatedFilter;

                console.log('uploadObject: ', uploadObject);

                const stageTwo = JSON.stringify(uploadObject);
                console.log('stageTwo ', stageTwo);
                //for local dev
                //const baseUrl = 'localhost:3000'
                // const res = await fetch(`http://${baseUrl}/api/bachelor`, {
                //     method: 'post',
                //     body: stageTwo
                // });

                //for production
                const baseUrl = process.env.VERCEL_URL;
                const res = await fetch(`https://myarias.vercel.app/api/bachelor`, {
                    method: 'post',
                    body: stageTwo
                });
                alert("SUBMITTED! BUCKLED UP!");
                console.log('res: ', res);
            }

            // * call async function
            _setBachelor();
        },
    );
    const handleInputText = React.useCallback(
        (event) => {
            setTextFilter(event.target.value);
        },
        [setTextFilter]
    );
    const handleInputFlightNumber = React.useCallback(
        (event) => {
            setFlightNumberFilter(event.target.value);
        },
        [setFlightNumberFilter]
    );
    const handleInputDeparture = React.useCallback(
        (event) => {
            setDepartureFilter(event.target.value);
        },
        [setDepartureFilter]
    );
    const handleInputDrink = React.useCallback(
        (event) => {
            setDrinkFilter(event.target.value);
        },
        [setDrinkFilter]
    );
    const handleInputFood = React.useCallback(
        (event) => {
            setFoodFilter(event.target.value);
        },
        [setFoodFilter]
    );
    const handleInputBeer = React.useCallback(
        (event) => {
            setBeerFilter(event.target.value);
        },
        [setBeerFilter]
    );
    const handleInputLiquor = React.useCallback(
        (event) => {
            setLiquorFilter(event.target.value);
        },
        [setLiquorFilter]
    );
    const handleInputAllergies = React.useCallback(
        (event) => {
            setAllergiesFilter(event.target.value);
        },
        [setAllergiesFilter]
    );
    const handleInputVaccinated = React.useCallback(
        (event) => {
            setVaccinatedFilter(event.target.value);
        },
        [setVaccinatedFilter]
    );
    return (
        <Container>
            <div>
                <Personal bachelorInfo={bachelorInfo}></Personal>
                
            </div>
            <Card className={classes.root}>
            <Typography variant='h3'>
                        Food and Drink
                    </Typography>
                <FormControl className={classes.formControl}>
                    Enter your favorites.
                    <TextField id="standard-basic" label="Beer" onChange={handleInputBeer}/>
                    <div>
                            <TextField id="standard-basic" label="Late Night Food" onChange={handleInputFood}/>
                            <FormHelperText>i.e. Hot Pockets</FormHelperText>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Liquor" onChange={handleInputLiquor}/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Non-Alcoholic Drink" onChange={handleInputDrink}/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Restrictions/Allergies" onChange={handleInputAllergies}/>
                        </div>
                </FormControl>
                    <br></br>
                    <CardActions>
                    <div>
                    <Button variant="contained" color="primary"
                        onClick={submitInfo}
                    >
                        Submit
                    </Button>
                    </div>
                </CardActions>
            </Card>
            <Card className={classes.root} >
                <CardContent>
                <Typography variant='h3'>
                        Itinerary 
                    </Typography>
                    Tentative and loose.
                    <br />
                    More specifics filled in as the date gets closer.
                    <List >
                        <Wednesday />
                        <Thursday />
                        <Friday />
                        <Saturday />
                        <Sunday />
                    </List>   
                </CardContent>
                
            </Card>
            <Card className={classes.root} >
                <RoomList />
            </Card>
            <Card className={classes.root} >
                <CardContent>
                    <Typography variant='h3'>
                        Travel
                    </Typography>
                    If you know it already.
                    <List>
                        <div>
                            <TextField id="standard-basic" label="Arrival" onChange={handleInputText}/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Departure" onChange={handleInputDeparture}/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Flight Number" onChange={handleInputFlightNumber}/>
                        </div>
                    </List>
                    <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Vaccinated</InputLabel>
                                    <Select
                                        native
                                        onChange={handleInputVaccinated}
                                        inputProps={{
                                        name: 'vaccinated',
                                        id: 'vaccinated-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Select>
                                    <FormHelperText>*2nd dose by July 9th</FormHelperText>
                            </FormControl>
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
            
        </Container>
    );
};

export default BachelorItem;