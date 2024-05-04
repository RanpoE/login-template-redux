import React from 'react'


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarComponent = ({ open, handleCloseSnack, message }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert severity="success" sx={{ width: '100%' }}>
                {message ? message : 'Success'}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarComponent