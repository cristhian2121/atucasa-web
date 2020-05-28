import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
