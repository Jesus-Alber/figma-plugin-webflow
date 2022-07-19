import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ErrorModal({isOpen, handleClose, redirect}) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            “Sorry, we are having an error or you may have entered the account key incorrectly. Please
                            check and try again”
                        </Typography>
                        <Typography id="transition-modal-description" sx={{mt: 2}}>
                            <a href="https://dashboard.fluentc.io/">Please go here</a>
                        </Typography>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button sx={{m: 2}} variant="outlined" onClick={() => redirect()}>
                                Enter Account Key
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
