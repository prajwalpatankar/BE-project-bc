import React from 'react';
import TextField from '@mui/material/TextField';
import { DropzoneArea } from 'material-ui-dropzone'
import { useState } from 'react';
import './../../App.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function DropCsv() {


    const pathName = "Home > Create New Project";


    const [files, setFiles] = useState();
    const [open, setOpen] = useState(false);

    const handleFileChange = (file) => {
        console.log(file)
        setFiles(file);
        console.log(files)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <h4 className='path-name'>{pathName}</h4>
            <div className='name-of-file'>
                <TextField id="standard-basic" label="Name of the file" variant="standard" />
            </div>

            <br />
            <br />
            <div className="drop-file-area">
                <DropzoneArea
                    dropzoneText='Drag and drop a file here'
                    onChange={(files) => handleFileChange(files)}
                />
            </div>
            <br />
            <div className='drop-csv-buttons'>

                <input
                    type="file"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                />
                <label htmlFor="raised-button-file">
                    <Button style={{ width: "350px" }} variant="outlined" component="span" >
                        Upload from Local Machine
                    </Button> &nbsp;&nbsp;&nbsp;
                </label>
                <Button style={{ width: "350px" }} variant="outlined" onClick={handleClickOpen}>Link a Web URL</Button> <br /><br /><br />
                <Button variant="contained">Continue</Button>
            </div>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter Web Link</DialogTitle>
                <DialogContent style={{ width: "500px" }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="weblink"
                        type="text"
                        fullWidth
                        variant="standard"
                        placeholder='httpl://kaggle.com'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Done</Button>
                </DialogActions>
            </Dialog>



        </div >
    )
}


export default DropCsv;