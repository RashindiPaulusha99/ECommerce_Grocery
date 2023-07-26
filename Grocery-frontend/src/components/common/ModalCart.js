import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";
import homeService from "../../Services/HomeService";
import { useState } from "react";
import Chip from '@mui/material/Chip';
import '../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Button } from "@mui/material";

const ModalCart=(props)=>{

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
    const [countCart, setCountCart] = useState(1);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    useEffect(()=>{
        console.log(props.id);
        setImage(props.id.image.data.data)
        setBrand(props.id.brand)
        setCategory(props.id.category)
        setName(props.id.name)
        setDescription(props.id.description)
        setQtyOnHand(props.id.qty_on_hand)
        setVolume(props.id.volume)
        setUnitOfVolume(props.id.unit_of_volume)
        setUnitPrice(props.id.unit_price)
        setDiscount(props.id.discount)
        
    },[])

    
    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const handleMinus=(_id)=>{
        setCountCart((prevCount) => (prevCount - 1));
    }

    const handlePlus=(_id)=>{
        setCountCart((prevCount) => (prevCount + 1));
    }

    return(

        <Dialog
        fullWidth
        maxWidth={'lg'}
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2,paddingBottom:5 }}>
            
            {props.handleClose ? (
                <IconButton
                aria-label="close"
                onClick={props.handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    marginBottom:10,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon />
                </IconButton>
        ) : null}
        </DialogTitle>
        <DialogContent sx={{height:'100vh'}}>
          <DialogContentText id="alert-dialog-slide-description">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                <div style={{width:'100%',height:'90%',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',borderRadius:10}}>
                    <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image)} alt='product' style={{width:'100%',height:'100%',padding:20}}/>
                </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <h2 style={{color:'darkslategray'}}>{name}</h2>
                    <h5>{volume+" "+unitOfVolume}</h5>
                    <h3 style={{display:'inline', fontWeight:'bolder',color:'black'}}>{"Rs: "+unitPrice+".00"}</h3>
                    {discount !== 0 ? <h5 className="block rounded font-bold uppercase" style={{width:'fit-content',padding:7,fontWeight:600,color:'mediumaquamarine',background:'mintcream',display:'inline',marginLeft:14}}>{discount+"% OFF"}</h5> : null}
                    
                    <div className="input-group product-qty">
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number" datatype="minus" data-field="" onClick={() => handleMinus()}>
                                                                            <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" id="quantity" name="quantity" className="form-control input-number" value={countCart} min="1" max="100"/>
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="" onClick={() => handlePlus()}>
                                                                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                                        </button>
                                                                    </span>
                                                                </div>
                    <h6 style={{display:'inline-flex',}}>
                        <LocalOfferOutlinedIcon style={{transform: 'scaleX(-1)',marginRight:5}}/>
                        Tags : 
                    </h6>
                    <Chip label="Local" style={{display:'inline-flex',}}/>
                    <Chip label={category} color="success" variant="outlined" style={{display:'inline-flex',}}/>
                    <Chip label={brand} color="success" variant="outlined" style={{display:'inline-flex',}}/>
                </Grid>
            </Grid>
        </Box>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>

    )
}

export default ModalCart;