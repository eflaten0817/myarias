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
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import FlightLandIcon from '@material-ui/icons/FlightLand';
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

const Friday = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    
    const handleClick = () => {
        setOpen(!open);
        };

    return (
        <List>
        <ListItem button onClick={handleClick}>
            <ListItemText primary="Friday" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <OutdoorGrillIcon />
              </ListItemIcon>
                <ListItemText primary="Official Party Start: BBQ" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LocalBarIcon />
                </ListItemIcon>
                <ListItemText primary="High Roller (private pod with open bar)" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <EmojiTransportationIcon />
                </ListItemIcon>
                <ListItemText primary="Limo Crawl down the Strip" />
            </ListItem>
        </List>
    </Collapse>
    </List>
      
    );
};

export default Friday;