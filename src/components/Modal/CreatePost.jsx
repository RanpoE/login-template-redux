import React from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import CreateForm from '../pages/CreatePost';
import SnackbarComponent from '../Snackbar';

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

const CreatePost = ({ modalState, handleClose }) => {
    const [openAlert, setOpenAlert] = React.useState(false)

    const handleOpenSnack = () => setOpenAlert(true)
    const handleCloseSnack = () => setOpenAlert(false)

    return (
        <>
            <Modal open={modalState} onClose={handleClose}>
                <Box sx={style}>
                    <CreateForm toggleSnack={handleOpenSnack} />
                </Box>
            </Modal>
            <SnackbarComponent open={openAlert} handleCloseSnack={handleCloseSnack} />
        </>
    )
}

export default CreatePost