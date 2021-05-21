import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AirlineSeatIndividualSuiteIcon
  from '@material-ui/icons/AirlineSeatIndividualSuite';

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

const RoomList = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Room One" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="King - Sam" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Room Two" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="King - Diego" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="King - Eric" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Room Three" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Matt E" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Sean" />

          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Room Four" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Bryce" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Ryan" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Room Five" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Gus" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Matthew O" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Room Six" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Evan" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Erik" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - David" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Room Seven" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Courtney" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Mitchell" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary="Queen - Nathan" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Couches" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AirlineSeatIndividualSuiteIcon/>
            </ListItemIcon>
            <ListItemText primary=" Carl" />
          </ListItem>
        </List>
      </Collapse>
    </List>

  );
};

export default RoomList;
