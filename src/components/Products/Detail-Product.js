import React, { useState } from "react";

import { ModalProxy } from "../../proxyes";
import { ElementDetail } from "../Commons/Detail-Element";

const ContentInfo = ({ product }) => {
  return (
    <div className="content__product">
      <p>
        descripción: <span>{product.description}</span>
      </p>
      <p>
        Descuento: <span>{product.discount_porcentual}</span>
      </p>
      <p>
        Presentación: <span>{product.presentation}</span>
      </p>
      <p>
        Precio: <span>{product.price}</span>
      </p>
      <p>
        Aliado: <span>{product.store}</span>
      </p>
      <p>
        Unidades: <span>{product.units}</span>
      </p>
    </div>
  );
};

export const DetailProduct = ({ openModal, handleCloseModal_, product }) => {
  console.log("product: ", product);
  const handleCloseModal = (state) => handleCloseModal_(state);

  return (
    <>
      <ModalProxy
        openModal={openModal}
        closeModal_={handleCloseModal}
        Container={
          <ElementDetail
            title={product.name}
            image={product.url_image}
            Content={<ContentInfo product={product} />}
          />
        }
      />
    </>
  );
};

// import React, { useEffect, useState } from "react";

// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";

// import { ElementDetail } from "../Commons";

// export const DetailProduct = ({ openModal, closeModal_ }) => {
//   // const [open, setOpen] = useState(false);
//   useEffect(() => {
//     console.log("Input", openModal);
//     // setOpen(openModal);
//   });

//   const handleClose = () => {
//     console.log("CLOSE");
//     closeModal_(false);
//     // setOpen(false);
//   };

//   const useStyles = makeStyles((theme) => ({
//     modal: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     paper: {
//       backgroundColor: theme.palette.background.paper,
//       border: "2px solid #000",
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//   }));

//   const classes = useStyles();

//   return (
//     <>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={openModal}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={openModal}>
//           <div className={classes.paper}>
//             <ElementDetail />
//           </div>
//         </Fade>
//       </Modal>
//     </>
//   );
// };
