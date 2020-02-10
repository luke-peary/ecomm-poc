import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import styled from "styled-components";
import Box from "./Box";

const ProductFilter = () => {
  const [state, setState] = React.useState({
    red: true,
    blue: false,
    green: false
  });
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { red, blue, green } = state;
  const error = [red, blue, green].filter(v => v).length !== 2;

  return (
    <List
      component="div"
      aria-labelledby="Product Filter"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Product Filter
        </ListSubheader>
      }
    >
      <ListItem button>blah</ListItem>
      <ListItem button>Blah</ListItem>
      <ListItem button onClick={handleClick}>
        Colour
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={red}
                  onChange={handleChange("red")}
                  value="red"
                />
              }
              label="Red"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={blue}
                  onChange={handleChange("blue")}
                  value="blue"
                />
              }
              label="Blue"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={green}
                  onChange={handleChange("green")}
                  value="green"
                />
              }
              label="Green"
            />
          </FormGroup>
          <Divider />
        </FormControl>
      </Collapse>
    </List>
  );
};

export default ProductFilter;
