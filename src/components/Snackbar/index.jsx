import React from 'react'


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarComponent = ({ open, handleCloseSnack, message }) => {
    const formatMessage = message?.toUpperCase()
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert severity={message ? 'error' : 'success'} sx={{ width: '100%' }}>
                {message ? formatMessage : 'Success'}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarComponent