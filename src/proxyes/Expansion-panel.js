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
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const ExpansionPanelProxy = (props) => {
  const [selected, useSelected] = useState();
  const classes = useStyles();

  const handleClick = (event, id) => {
    console.log(`click to panel ${id}`);
    useSelected(id);
    props.handleCategory(id);
  };

  const itemSelected = (id, text = false) => {
    if (selected == id) {
      console.log("Yeah");
      if (text)return { fontWeight: 'bold' }
      return {
        border: "0.8px outset",
        borderColor: "rgb(38,99,165,0.1)",
        boxShadow: "1px 1px 2px",
        // background: 'rgb(38,99,165,0.07)'
      };
    }
  };

  return (
    <div className={classes.root}>
      {props.items.map((item) => (
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
            <Typography className={classes.heading} style={itemSelected(item.id, true)}>
              <img
                className="kh_img"
                src={item.url_image || item.image}
                alt={item.name}
              />
              {item.name}
            </Typography>
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
