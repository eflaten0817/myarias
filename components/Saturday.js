import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    // maxWidth: 300,
    justifyContent: 'center',
    align: 'center',
    margin: '10px',
    padding: '10px',
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

const Saturday = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Saturday" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary="Recover and hang out by the pool" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DirectionsWalkIcon />
            </ListItemIcon>
            <ListItemText primary="Old Vegas" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            <ListItemText primary="Dinner" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <MusicVideoIcon />
            </ListItemIcon>
            <ListItemText primary="Blue Man Group" />
          </ListItem>
        </List>
      </Collapse>
    </List>

  );
};

export default Saturday;
