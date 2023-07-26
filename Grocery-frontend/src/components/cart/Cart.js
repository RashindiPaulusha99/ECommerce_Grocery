import React, {useEffect, useState} from "react";
import '../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HeaderIcons from "../Home/HeaderIcons";
import Header from "../../layouts/Header";
import Checkbox from '@mui/material/Checkbox';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import HomeService from "../../Services/HomeService";

const Cart = (props) => {

    const[id, setId]=useState('')
    const[image, setImage]=useState('')
    const[name, setName]=useState('')
    const[description, setDescription]=useState('')
    const[category, setCategory]=useState('')
    const[qtyOnHand, setQtyOnHand]=useState(0)
    const[brand, setBrand]=useState('')
    const[discount, setDiscount]=useState(0)
    const[volume, setVolume]=useState(0)
    const[unitOfVolume, setUnitOfVolume]=useState('')
    const[unitPrice, setUnitPrice]=useState(0)
    const [countCart, setCountCart] = useState(0);

    useEffect(()=>{
        handleCart();
    },[])

    const handleCart=async ()=>{
        const response = await HomeService.getCart();
        console.log(response)

        setImage(response.data.image.data.data)
        setId(response.data._id)
        setBrand(response.data.brand)
        setCategory(response.data.category)
        setName(response.data.name)
        setDescription(response.data.description)
        setQtyOnHand(response.data.qty_on_hand)
        setVolume(response.data.volume)
        setUnitOfVolume(response.data.unit_of_volume)
        setUnitPrice(response.data.unit_price)
        setDiscount(response.data.discount)
    }

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return(
            <div>
                <Header/>
                <HeaderIcons/>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={12} style={{marginLeft:34,marginRight:16,width: '100%', backgroundColor: 'aliceblue',}}>

                            <Grid container spacing={1}>
                                <Grid item xs={3} md={3} lg={3} style={{display:'flex',justifyContent:'flex-start'}}>
                                    <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image)} alt="item" style={{margin:20}}/>
                                </Grid>
                                <Grid item xs={3} md={3} lg={3} style={{display:'flex',justifyContent:'flex-start'}}>
                                    <p style={{margin:20}}>{name}</p>
                                    <p >{volume+" "+unitOfVolume}</p>
                                </Grid>
                                <Grid item xs={3} md={3} lg={3} style={{display:'flex',justifyContent:'flex-start'}}>
                                    <p style={{margin:20}}>{unitPrice}</p>
                                </Grid>
                                <Grid item xs={2} md={2} lg={2} style={{display:'flex',justifyContent:'flex-start'}}>
                                    <p style={{margin:20}}>{qtyOnHand}</p>
                                </Grid>
                                <Grid item xs={1} md={1} lg={1} style={{display:'flex',justifyContent:'center'}}>
                                    <IconButton edge="end" aria-label="comments" >
                                        <DeleteOutlineOutlinedIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </div>
    )
}

export default Cart;