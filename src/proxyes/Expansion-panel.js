import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const ExpansionPanelProxy = ({ items }) => {
  const [selected, useSelected] = useState();
  const classes = useStyles();

  const handleClick = (event, id) => {
    console.log(`click to panel ${id}`);
    useSelected(id);
  };

  const itemSelected = (id) => {
    if (selected == id) {
      console.log('Yeah');
      return {
        border: "1px outset",
        boxShadow: "1px 1px 2px",
        background: 'rgb(226, 224, 115 )'
      };
    }
  };

  return (
    <div className={classes.root}>
      {items.map((item) => (
        <ExpansionPanel
          key={item.id}
          style={itemSelected(item.id)}
          onChange={(e) => handleClick(e, item.id)}
          disabled={item.disabled}
          // defaultExpanded={false}
          expanded={false}
          // style={{marginBottom: '2px'}}
        >
          <ExpansionPanelSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{item.name}</Typography>
          </ExpansionPanelSummary>
          {/* <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails> */}
        </ExpansionPanel>
      ))}
    </div>
  );
};
