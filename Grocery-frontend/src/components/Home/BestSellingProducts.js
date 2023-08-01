import React, {useEffect, useState} from "react";
import tomato from "../../assets/images/thumb-tomatoes.png";
import tomatokechup from "../../assets/images/thumb-tomatoketchup.png";
import banana from "../../assets/images/thumb-bananas.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import vegetables_broccoli from "../../assets/images/icon-vegetables-broccoli.png";
import Slide from "@mui/material/Slide";
import HomeService from "../../Services/HomeService";
import ModalCart from "../common/ModalCart";

const BestSellingProducts=()=>{

    const [status, setStatus] = useState('All');
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [showPreviousButton, setShowPreviousButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
    const [fullPage, setFullPage] = useState(9);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState("");

    const handleClickOpen =async (e) => {
        //const response  = await HomeService.fetchItem(e);
        setId(e)
        setOpen(true);
    };

    const handleClose = () => {
        setId("")
        setOpen(false);
    };


    useEffect(()=>{
        fetchDetails();
    }, []);

    const fetchDetails = async()=>{
        const response = await HomeService.fetchItems(status);
        console.log(response.data)

        if (response.status === 200){
            setPosts(response.data);
            setShowPreviousButton(false);
        }
    }


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handleNextButton = (event, value) => {
        setCurrentPage(currentPage+1);

        if(currentPage === currentPage){
            setShowPreviousButton(true);
        }

        if(currentPage === fullPage-1){
            setShowNextButton(false);
        }

    };

    const handlePreviousButton = (event, value) => {
        setCurrentPage(currentPage-1);

        if(currentPage === fullPage){
            setShowNextButton(true);
        }

        if(currentPage === fullPage-7){
            setShowPreviousButton(false);
        }
    };

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return(
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="section-header d-flex justify-content-between my-5">

                            <h2 className="section-title">Best selling products</h2>

                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                                <div className="swiper-buttons paginate">
                                    <button className="swiper-prev products-carousel-prev btn" disabled={!showPreviousButton} onClick={handlePreviousButton}>❮</button>
                                    <button className="swiper-next products-carousel-next btn" disabled={!showNextButton}  onClick={handleNextButton}>❯</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="products-carousel swiper">
                            <div className="swiper-wrapper">
                                <Box sx={{ flexGrow: 1 }} >
                                    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                                        {currentPosts.map(({_id,image,name,unit_of_volume,unit_price,volume}, index) =>(
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
                        </div>

                    </div>
                </div>
            </div>
            {open ? <ModalCart open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} id={id} Transition={Transition} /> : null}
        </section>
    )
}

export default BestSellingProducts;