import React, {Fragment, useEffect, useState} from "react";
import {useHistory, withRouter} from "react-router-dom";
import Header from "../../layouts/Header";
import HeaderIcons from "./HeaderIcons";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ModalCart from "../common/ModalCart";
import Slide from "@mui/material/Slide";
import HomeService from "../../Services/HomeService";

const Products=(props)=>{

    const [status, setStatus] = useState("All");
    const [posts, setPosts] = useState([]);
    const [showNextButton, setShowNextButton] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");

    const handleClickOpen =async (e) => {
        setId(e)
        setOpen(true);
    };

    const handleClose = () => {
        setId("")
        setOpen(false);
    };


    useEffect(()=>{
        console.log(status)
        fetchDetails();
        setEmail(props.location.state.email)
        setPassword(props.location.state.password)
        setStatus(props.location.state.status)
    }, []);

    const fetchDetails = async()=>{
        const response = await HomeService.fetchItems(status);

        if (response.status === 200){
            setPosts(response.data);
        }
    }

    const handleNextButton = (event, value) => {
        setItemsToShow((prevItemsToShow) => prevItemsToShow + 10);
    };

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <section className="py-5 overflow-hidden">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="products-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Box sx={{ flexGrow: 1 }} >
                                        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                                            {posts.slice(0, itemsToShow).map(({_id,image,name,unit_of_volume,unit_price,volume}, index) =>(
                                                <Grid item xs={4} lg={2.4} md={2.4}  key={index} >
                                                    <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(_id)}>
                                                        <div className="product-item">

                                                            <figure>
                                                                <a title="Product Title">
                                                                    <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} alt='thumb bananas' className="tab-image"/>
                                                                </a>
                                                            </figure>
                                                            <h3>{name}</h3>
                                                            <span className="qty">{volume+" "+unit_of_volume}</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                            <span className="price">{"Rs "+unit_price+".00"}</span>
                                                            <div className="d-flex align-items-center justify-content-between">

                                                                <a className="btn-wishlist">
                                                                    <svg width="24" height="24">
                                                                        <use xlinkHref="#plus"></use>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </div>
                                <div className="swiper-buttons paginate">
                                    {itemsToShow < posts.length && (<Button variant="contained" size="medium" onClick={handleNextButton} disabled={!showNextButton} style={{backgroundColor:'black'}}>
                                        load more
                                    </Button>)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {open ? <ModalCart open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} id={id} Transition={Transition} email={email} password={password} /> : null}
            </section>
        </Fragment>
    )
}

export default withRouter(Products);