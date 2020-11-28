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
    minWidth: 275,
    maxWidth: 300,
    justifyContent: "center",
    align: "center",
    margin: "10px",
    padding: "10px"
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

const AriaItem = ({ ariaInfo }) => {
    const classes = useStyles();
    return (
        /*
        <div className="block">
            <div className="p-4">
                <div className="border-solid border-4 border-gray-600">
                    Title: {ariaInfo.Title}
                    <br></br>
                    Opera: {ariaInfo.Opera}
                    <br></br>
                    Composer: {ariaInfo.Composer}
                    <br></br>
                    Voice: {ariaInfo.Fach} {ariaInfo.Voice}
                    <br></br>
                    Language: {ariaInfo.Language}
                    <br></br>
                    Style: {ariaInfo.Style}
                </div>
            </div>
        </div>
        */
       
        <Card className={classes.root} >
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2" color="textPrimary" gutterBottom>
            {ariaInfo.Title}
          </Typography>
          <Typography className={classes.title}>
            Opera: {ariaInfo.Opera}
          </Typography>
          <Typography className={classes.title}>
            Composer: {ariaInfo.Composer}
          </Typography>
          <Typography variant="body2" component="p">
            Fach: {ariaInfo.Fach}
          </Typography>
          <Typography variant="body2" component="p">
            Voice: {ariaInfo.Voice}
          </Typography>
          <Typography variant="body2" component="p">
            Language: {ariaInfo.Language}
          </Typography>
          <Typography variant="body2" component="p">
            Style: {ariaInfo.Style}
          </Typography>
        </CardContent>
        <CardActions spacing="2">
          <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab aria-label="like">
        <FavoriteIcon />
      </Fab>
        </CardActions>
    
      </Card>
      
    );
};

export default AriaItem;
