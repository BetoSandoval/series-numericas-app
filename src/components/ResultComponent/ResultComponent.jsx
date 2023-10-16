/* eslint-disable react/prop-types */
import { Box, Typography, Modal, Button } from "@mui/material";

const ResultComponent = ({ result, showModal, handleClick }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

  return (
    <div>
      <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            El resultado es:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            El resultado es {result}
          </Typography>
          <Button
            onClick={handleClick}
            color="primary"
            variant="contained"
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ResultComponent;
