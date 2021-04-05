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

import fetch from "isomorphic-unfetch";
import qs from "qs";
import FormControl from '@material-ui/core/FormControl';


import Personal from '../components/Personal';
import Thursday from '../components/Thursday';
import Friday from '../components/Friday';
import Saturday from '../components/Saturday';
import Sunday from '../components/Sunday';
import RoomList from '../components/RoomList';
import SimpleMenu from '../components/SimpleMenu';
import List from '@material-ui/core/List';
import { ListItem } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 600,
    justifyContent: "center",
    align: "center",
    margin: "10px",
    padding: "10px",
    border: 1,
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



    const submitInfo= React.useCallback(
        
        function (event) {
            event.preventDefault();

            // * define async function for setting data and saving it to the state
            async function _setBachelor() {
                
                console.log('editor: ', textFilter);

                const uploadObject = bachelorInfo;
                bachelorInfo.Arrival = textFilter;
                console.log('uploadObject: ', uploadObject);

                const stageTwo = JSON.stringify(uploadObject);
                console.log('stageTwo ', stageTwo);
                //for local dev
                const baseUrl = 'localhost:3000'
                const res = await fetch(`http://${baseUrl}/api/bachelor`, {
                    method: 'post',
                    body: stageTwo
                });

                //for production
                //const baseUrl = process.env.VERCEL_URL;
                //const response = await fetch(`https://myarias.vercel.app/api/daily?${query}`);

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

    return (
        <Container>
            <div>
                        <Personal bachelorInfo={bachelorInfo}></Personal>
                    </div>
            <Card className={classes.root} >
                <CardContent>
                    <List >
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
            <Card className={classes.root}>
            <Typography variant='h3'>
                        Food and Drink Favorites
                    </Typography>
                <FormControl className={classes.formControl}>
                    <TextField id="standard-basic" label="Favorite Drink" onChange={handleInputDrink}/>
                    <div>
                            <TextField id="standard-basic" label="Late Night Food" onChange={handleInputFood}/>
                            <FormHelperText>i.e. Hot Pockets</FormHelperText>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Departure" onChange={handleInputDeparture}/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Flight Number" onChange={handleInputFlightNumber}/>
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
        </Container>
    );
};

export default BachelorItem;