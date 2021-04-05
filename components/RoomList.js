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
import { FlashOffRounded } from "@material-ui/icons";
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';

const useStyles = makeStyles({
  root: {
    //minWidth: 275,
    //maxWidth: 300,
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
                        <ListItemText primary="King" />
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
                        <ListItemText primary="King" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AirlineSeatIndividualSuiteIcon/>
                      </ListItemIcon>
                        <ListItemText primary="King" />
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
                        <ListItemText primary="Queen" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AirlineSeatIndividualSuiteIcon/>
                      </ListItemIcon>
                        <ListItemText primary="Queen" />
                        
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
                        <ListItemText primary="Queen" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AirlineSeatIndividualSuiteIcon/>
                      </ListItemIcon>
                        <ListItemText primary="Queen" />
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
                        <ListItemText primary="Queen" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AirlineSeatIndividualSuiteIcon/>
                      </ListItemIcon>
                        <ListItemText primary="Queen" />
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
                        <ListItemText primary="Queen" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AirlineSeatIndividualSuiteIcon/>
                      </ListItemIcon>
                        <ListItemText primary="Queen" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AirlineSeatIndividualSuiteIcon/>
                      </ListItemIcon>
                        <ListItemText primary="Queen" />
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
                        <ListItemText primary="Queen" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AirlineSeatIndividualSuiteIcon/>
                      </ListItemIcon>
                        <ListItemText primary="Queen" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <AirlineSeatIndividualSuiteIcon/>
                      </ListItemIcon>
                        <ListItemText primary="Queen" />
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
                        <ListItemText primary="" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
      
    );
};

export default RoomList;