import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import banana from "../../assets/images/thumb-bananas.png";
import biscuits from "../../assets/images/thumb-biscuits.png";
import cucumber from "../../assets/images/thumb-cucumber.png";
import milk from "../../assets/images/thumb-milk.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomeService from "../../Services/HomeService";
import Slide from '@mui/material/Slide';
import ModalCart from "../common/ModalCart";

const AllProducts=()=>{

    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [showPreviousButton, setShowPreviousButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
    const [fullPage, setFullPage] = useState(9);
    const [countCart, setCountCart] = useState(1);

    const history = useHistory();

    const handleCart=(e)=>{
        {/*history.push({
            pathname:'/cart'
        });*/}
    }

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
        <section className="py-5">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12">

                        <div className="bootstrap-tabs product-tabs">
                            <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                                <h3>All Products</h3>
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-link text-uppercase fs-6 nav" id="nav-all-tab"
                                           data-bs-toggle="tab" data-bs-target="#nav-all" type="button" onClick={fetchDetails}>All</a>
                                        <a className="nav-link text-uppercase fs-6 nav" id="nav-fruits-tab"
                                           data-bs-toggle="tab" data-bs-target="#nav-fruits" type="button">Fruits &
                                            Veges</a>
                                        <a className="nav-link text-uppercase fs-6 nav" id="nav-juices-tab"
                                           data-bs-toggle="tab" data-bs-target="#nav-juices" type="button">Beverages</a>
                                        <a className="nav-link text-uppercase fs-6 nav" id="nav-juices-tab"
                                           data-bs-toggle="tab" data-bs-target="#nav-juices" type="button">Sweets & Snacks</a>
                                    </div>
                                </nav>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-all" role="tabpanel"
                                     aria-labelledby="nav-all-tab">

                                    <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

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
                                    <div className="swiper-buttons paginate">
                                        <button className="swiper-prev products-carousel-prev btn" disabled={!showPreviousButton} onClick={handlePreviousButton}>❮</button>
                                        <button className="swiper-next products-carousel-next btn" disabled={!showNextButton}  onClick={handleNextButton}>❯</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {open ? <ModalCart open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} id={id} Transition={Transition} /> : null}
        </section>
    )
}

export default AllProducts;