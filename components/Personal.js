import React from "react";
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

const useStyles = makeStyles({
  root: {
    margin: "10px",
    padding: "10px",
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
  },
  pos: {
    marginBottom: 12,
  },
});

const Personal = ({ bachelorInfo }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} >
        <CardContent>
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
        </CardContent>    
      </Card>
      
    );
};

export default Personal;