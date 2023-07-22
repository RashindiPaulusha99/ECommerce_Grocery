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
import HomeService from "../../Services/HomeService";

const NewlyArrivedBrands=()=>{

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetchDetails();
    }, []);

    const fetchDetails = async()=>{
        const response = await HomeService.fetchBrand();

        if (response.status === 200){
            setPosts(response.data);
        }
    }


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

                        <div className="section-header d-flex justify-content-between mb-5">

                            <h2 className="section-title">Newly Arrived Brands</h2>

                            <div className="d-flex align-items-center">
                                <a href="#g" className="btn-link text-decoration-none">View All Categories →</a>
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
                                    {posts.map(({_id, brand,category,image}, index) =>(
                                        <div className="swiper-slide me-3 ms-2">
                                            <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} className="img-fluid rounded" alt="Card title"/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body py-0">
                                                            <p className="text-muted mb-0 fw-bolder">{brand}</p>
                                                            <h5 className="card-title">{"best "+category+" you wish to get"}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewlyArrivedBrands;