import React, { useState, useEffect } from "react";
import Head from "next/head";
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BachelorItem from '../components/BachelorItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

//for test input control
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

//for api calls
import fetch from "isomorphic-unfetch";
import qs from "qs";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: 'primary',
      
      
    },
    logIn: {
        margin: "10px",
        padding: "10px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      align: "center",

    },
    title: {
      flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        align: "center",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    listTitle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    listSection: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
}));

const BachelorItems = ({ bachelorCollection }) =>
    bachelorCollection.map((bachelorInfo, index) => <BachelorItem key={index} bachelorInfo={bachelorInfo} />);

const BachelorHome = ({ data }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [results, setResults] = useState(data);


    //for production
    //const baseUrl = process.env.VERCEL_URL;

    //for local dev
    const baseUrl = 'localhost:3000'

    const [bachelorCollection, setBachelorCollection] = useState(data || []);
    const [passwordFilter, setPasswordFilter] = useState("");

    const updateBachelor = React.useCallback(
        
        function (event) {
            event.preventDefault();

            // * define async function for getting data and saving it to the state
            async function _getBachelor() {
                // * get query string for the current filter state
                // * qs.stringify returns a properly formatted query string for the request
                const query = qs.stringify({
                    passwordFilter,
                });

                // //for local dev
                // const baseUrl = 'localhost:3000'
                // const response = await fetch(`http://${baseUrl}/api/bachelor?${query}`);

                // for production
                const baseUrl = process.env.VERCEL_URL;
                const response = await fetch(`https://myarias.vercel.app/api/bachelor?${query}`);

                const data = await response.json();

                // * save data in state
                setBachelorCollection(data);
            }

            // * call async function
            _getBachelor();
        },
        // * dependencies of the function above
        [passwordFilter]
    );

    const handleChangePassword = React.useCallback(
        (event) => {
            setPasswordFilter(event.target.value);
        },
        [setPasswordFilter]
    );
    
    return (
        <div>
            <Head>
                <title>BachelorHome</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <div className={classes.root}>
                <AppBar className={classes.root} position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Las Vegas: July 23 - 25
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        <div>
            <Grid container direction="row" justify="center" alignItems="center">  
            <Card className={classes.logIn}>
                <FormControl className={classes.formControl}>
                    <TextField id="standard-basic" label="Enter Password" onChange={handleChangePassword}/>
                </FormControl>
                    <br></br>
                    <Button variant="contained" color="primary"
                        onClick={updateBachelor}
                    >
                        Log In
                    </Button> 
                    </Card>
            </Grid>
            </div>  
            <div className="flex text-center">
                <div className="w-full m-4">
                    <Grid container align="center" justify="center" spacing={2}>
                        <BachelorItems bachelorCollection={bachelorCollection} />
                    </Grid>
                </div>
            </div>
            
        </div>
    );
};

export default BachelorHome;