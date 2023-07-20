import React, {useEffect, useState} from "react";
import productThumb11 from "../../assets/images/product-thumb-11.jpg";
import productThumb12 from "../../assets/images/product-thumb-12.jpg";
import productThumb13 from "../../assets/images/product-thumb-13.jpg";
import productThumb14 from "../../assets/images/product-thumb-14.jpg";
import Grid from "@mui/material/Grid";
import vegetables_broccoli from "../../assets/images/icon-vegetables-broccoli.png";
import Box from "@mui/material/Box";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const NewlyArrivedBrands=()=>{

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(4);
    const [showPreviousButton, setShowPreviousButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
    const [fullPage, setFullPage] = useState(9);

    useEffect(()=>{

        const fetchDetails = async()=>{
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );

            const responseData = await response.json();

            setPosts(responseData);
            setShowPreviousButton(false);
        }
        fetchDetails();
    }, []);

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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="section-header d-flex justify-content-between mb-5">

                            <h2 className="section-title">Newly Arrived Brands</h2>

                            <div className="d-flex align-items-center">
                                <a href="#g" className="btn-link text-decoration-none">View All Categories →</a>
                                {/*<div className="swiper-buttons">
                                    <button className="swiper-prev brand-carousel-prev btn btn-yellow" disabled={!showPreviousButton} onClick={handlePreviousButton}>❮</button>
                                    <button className="swiper-next brand-carousel-next btn btn-yellow" disabled={!showNextButton}  onClick={handleNextButton}>❯</button>
                                </div>*/}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="brand-carousel swiper">
                            <div className="swiper-wrapper">

                                {/*<Box sx={{ flexGrow: 1 }} >
                                    <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }} >
                                        {currentPosts.map((post) =>(
                                            <Grid item xs={4} lg={3} md={3}  key={post.id} >
                                                <div className="swiper-slide">
                                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                                        <div className="row g-0">
                                                            <div className="col-md-4">
                                                                <img src={productThumb11} className="img-fluid rounded" alt="Card title"/>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="card-body py-0">
                                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                                    <h5 className="card-title">{post.title}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>*/}

                                <Carousel responsive={responsive}>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={productThumb11} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0">Amber Jar</p>
                                                        <h5 className="card-title">ddsg sdhshf hh g</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={productThumb11} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0">Amber Jar</p>
                                                        <h5 className="card-title">dffgd dhtf u </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={productThumb11} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0">Amber Jar</p>
                                                        <h5 className="card-title">srgdhdh hsth h</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={productThumb11} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0">Amber Jar</p>
                                                        <h5 className="card-title">dgf fdgdfhd hgh f</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide me-3 ms-2">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={productThumb11} className="img-fluid rounded" alt="Card title"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0">Amber Jar</p>
                                                        <h5 className="card-title">dgf fdgdfhd hgh f</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>;
                                {/*<div className="swiper-slide">
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={productThumb12} className="img-fluid rounded" alt="Card title"/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={productThumb13} className="img-fluid rounded" alt="Card title"/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={productThumb14} className="img-fluid rounded" alt="Card title"/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={productThumb11} className="img-fluid rounded" alt="Card title"/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={productThumb12} className="img-fluid rounded" alt="Card title"/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewlyArrivedBrands;