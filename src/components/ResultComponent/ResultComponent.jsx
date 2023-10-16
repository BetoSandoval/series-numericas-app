/* eslint-disable react/prop-types */
import { Box, Typography, Modal, Button } from "@mui/material";

const ResultComponent = ({ result, showModal, handleClick }) => {

  return (
    <div>
      <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            El resultado es:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            El resultado es {result}
          </Typography>
          <Button
            onClick={handleClick}
            color="primary"
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ResultComponent;
