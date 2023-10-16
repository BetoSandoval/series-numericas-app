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
        height: 250
    };

  return (
    <div>
      <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-around flex-col items-center h-full">
            <Typography id="modal-modal-description" sx={{ fontSize: 20 }}>
              El resultado es: <b>{result}</b>
            </Typography>
            <Button
              onClick={handleClick}
              color="primary"
              variant="contained"
              size="medium"
            >
              Cerrar
            </Button>

          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ResultComponent;
