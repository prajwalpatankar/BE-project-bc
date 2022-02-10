import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';

function NewProjectDashboard() {


    // const [existingFiles, setexistingFiles] = useState([]);


    const pathName = "Home > Create New Project";
    const pageTitle = "Create a New File";
    const existingFiles = [
        {
            name: "Existing ABC",
            // img: "existing/pie.png"
        },
        {
            name: "Existing ABC",
            // img: "existing/pie.png"
        },
    ]




    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <h4 className='path-name'>{pathName}</h4>
            <div className='grid-contents'>
                <h5 className='page-title'>{pageTitle}</h5>



                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={1} sm={1} md={1} >
                        <Item><Link to='/dropCsv' ><AddCircleOutlineIcon /></Link></Item>
                        <p>Blank File</p>
                    </Grid>

                    {existingFiles.map((file, index) => (
                        <Grid item xs={1} sm={1} md={1} key={index} >
                            <Item>File {index} </Item>
                            {/* <Item><img src={file.img} /></Item> */}
                            <p>{file.name}</p>
                        </Grid>
                    ))}
                </Grid>
            </div>

        </div>
    )



}


export default NewProjectDashboard;