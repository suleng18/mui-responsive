import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import styled from '@emotion/styled';

const StyleModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Add = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: {
            xs: 'calc(50% - 25px)',
            md: 30,
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} bgcolor="white" borderRadius={5}>
          <Typography variant="h6" textAlign="center">
            Create post
          </Typography>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;
