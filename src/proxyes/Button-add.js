import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export const ButtonAdd = ({ text, clickEvent }) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: "#d0006f",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      "&:hover": {
        backgroundColor: "#C5036B",
        boxShadow: "0 4px 5px 4px rgba(255, 105, 135, .3)",
      },
    },
  }));

  let classes = useStyles();

  const handleClick = (e) => {
    clickEvent(e);
  };

  return (
    <Button
      classes={{
        root: classes.button,
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export const ButtonPluss = () => {
  const useStyles = makeStyles((theme) => ({
    button: {},
  }));

  let classes = useStyles();

  const handleClick = () => {};

  return (
    <Button
      classes={{
        root: classes.button,
      }}
      size="small"
      onClick={handleClick}
    >
      <KeyboardArrowUpIcon />
    </Button>
  );
};

export const ButtonLess = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
    },
  }));

  let classes = useStyles();

  const handleClick = () => {};

  return (
    <Button
      size="small"
      classes={{
        root: classes.button,
      }}
      onClick={handleClick}
    >
      <KeyboardArrowDownIcon />
    </Button>
  );
};
