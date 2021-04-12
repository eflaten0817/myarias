import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PoolIcon from '@material-ui/icons/Pool';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import CasinoIcon from '@material-ui/icons/Casino';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import RoomServiceIcon from '@material-ui/icons/RoomService';

const useStyles = makeStyles({
    root: {
      //minWidth: 275,
      //maxWidth: 300,
      justifyContent: "center",
      align: "center",
      margin: "10px",
      padding: "10px",
      border: 1,
      borderStyle: "solid",
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
  
  const Thursday = () => {
      const classes = useStyles();
  
      const [open, setOpen] = React.useState(false);
      
      const handleClick = () => {
          setOpen(!open);
          };
  
      return (
          <List >
          <ListItem button onClick={handleClick}>
              <ListItemText primary="Wednesday (desperate to get away arrival)" />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                  <ListItemIcon>
                      <RoomServiceIcon />
                  </ListItemIcon>
                  <ListItemText primary="Stay at The Venetian" />
              </ListItem>
          </List>
      </Collapse>
      </List>
        
      );
  };
  
  export default Thursday;