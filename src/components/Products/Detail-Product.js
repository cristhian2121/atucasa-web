import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { ElementDetail } from "../Commons";

export const DetailProduct = ({ openModal, closeModal_ }) => {
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("Input", openModal);
    // setOpen(openModal);
  });

  const handleClose = () => {
    console.log("CLOSE");
    closeModal_(false);
    // setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <ElementDetail />
          </div>
        </Fade>
      </Modal>
    </>
  );
};
