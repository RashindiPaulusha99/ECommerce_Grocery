import React, {useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import AppWidgetSummary from "./AppWidgetSummary";
import Box from "@mui/material/Box";
import {IconButton, TableCell} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import HomeService from "../../../Services/HomeService";
import {DataGrid} from "@mui/x-data-grid";
import SnackBar from "../../common/SnackBar";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeletePopUp from "../../common/DeletePopUp";

const ProductBody=()=>{

    const [tId, setTid] = useState('');
    const [rows, setRows] = useState([]);
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');

    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const handleClick = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 280 },
        { field: 'category', headerName: 'Category', width: 180 },
        { field: 'brand', headerName: 'Brand', width: 180 },
        { field: 'qty_on_hand', headerName: 'QTY', width: 150 },
        { field: 'unit_price', headerName: 'Price', width: 120 },
        {field: 'action', headerName: 'Action', width: 180,sortable: false,renderCell: (params) => (
                <TableCell>
                    <IconButton aria-label="Edit" className='me-1' style={{backgroundColor:'#e9c5e9'}} onClick={() => handleEdit(params.row.tId)}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton aria-label="DeletePopUp" className='me-1' style={{backgroundColor:'#ffcccc'}} onClick={() => handleDelete(params.row.tId)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                    <IconButton aria-label="View" style={{backgroundColor:'#c7ecee'}} onClick={() => handleView(params.row.tId)}>
                        <RemoveRedEyeIcon />
                    </IconButton>
                </TableCell>
            )}
    ];

    const handleEdit = async (tId) => {

        console.log(tId);
    };

    const handleView = async (tId) => {

        console.log(tId);
    };

    const handleDelete =(tId) => {
        setTid(tId)
        setOpen(true)
    };

    const deleteUser=async ()=>{
        setOpen(false)
        const response = await HomeService.deleteItem(tId);
        if (response.status === 200){
            handleGetUsers();
            setSeverity("success")
            setMessage("Successfully Deleted!")
            handleClick()
        }
    }

    useEffect(()=>{
        handleGetUsers()
    },[])

    const handleGetUsers=async ()=>{
        try {
            const response = await HomeService.fetchItems("All");
            const newRows = response.data.map((dataKey,index) => ({
                tId:dataKey._id,
                id: index + 1,
                name: dataKey.name,
                image: dataKey.image,
                category: dataKey.category,
                brand: dataKey.brand,
                qty_on_hand: dataKey.qty_on_hand,
                discount: dataKey.discount,
                volume: dataKey.volume,
                unit_price: "Rs."+dataKey.unit_price
            }));
            setRows(newRows);
        } catch (error) {
            // Handle error if necessary
        }
    }

    return(
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6} md={6} className='mt-5 mb-4' style={{display:'flex',justifyContent:'flex-start'}}>
                    <Typography variant="h5" gutterBottom>Items</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} className='mt-5 mb-3' style={{display:'flex',justifyContent:'flex-end'}}>
                    <Button variant="contained" startIcon={<AddIcon />}>
                        new item
                    </Button>
                </Grid>

                <Grid item xs={12} sm={12} md={12} className='mb-4'>
                    <div style={{ height: 450, width: '100%',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </Grid>

            </Grid>
            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>
            <DeletePopUp open={open} handleCloseModal={handleCloseModal} deleteUser={deleteUser}/>
        </Box>
    )
}

export default ProductBody;