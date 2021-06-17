import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PoolIcon from '@material-ui/icons/Pool';
import CasinoIcon from '@material-ui/icons/Casino';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import RestaurantIcon from '@material-ui/icons/Restaurant';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    align: 'center',
    margin: '10px',
    padding: '10px',
    border: 1,
    borderStyle: 'solid',
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

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Thursday" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PoolIcon />
            </ListItemIcon>
            <ListItemText primary="Hang at The Venetian" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FlightLandIcon />
            </ListItemIcon>
            <ListItemText primary="House Check In: 5pm" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>
            <ListItemText primary="Dinner at Border Grill" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CasinoIcon />
            </ListItemIcon>
            <ListItemText primary="Casino Time" />
          </ListItem>
        </List>
      </Collapse>
    </List>

  );
};

export default Thursday;
