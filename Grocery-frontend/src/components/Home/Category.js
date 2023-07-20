import React, {Fragment, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import vegetables_broccoli from '../../assets/images/icon-vegetables-broccoli.png';
import bread_baguette from '../../assets/images/icon-bread-baguette.png';
import bread_herb_flour from '../../assets/images/icon-bread-herb-flour.png';
import wine_glass_bottle from '../../assets/images/icon-wine-glass-bottle.png';
import animal_products_drumsticks from '../../assets/images/icon-animal-products-drumsticks.png';
import soft_drink_bottle from '../../assets/images/icon-soft-drinks-bottle.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Category=()=>{

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
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
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
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
                        <h2 className="section-title">Category</h2>

                        <div className="d-flex align-items-center">
                            <a href="#g" className="btn-link text-decoration-none">View All Categories →</a>
                            {/*<div className="swiper-buttons">
                                <button className="swiper-next category-carousel-prev btn btn-yellow" disabled={!showPreviousButton} onClick={handlePreviousButton}>❮</button>
                                <button className="swiper-next category-carousel-next btn btn-yellow" disabled={!showNextButton}  onClick={handleNextButton}>❯</button>
                            </div>*/}
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="category-carousel swiper">
                        <div className="swiper-wrapper">
                            {/*<Box sx={{ flexGrow: 1 }} >
                                <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    {currentPosts.map((post) =>(
                                        <Grid item xs={4} lg={2} md={2}  key={post.id} >
                                            <a href="#" className="nav-link category-item swiper-slide">
                                                <img src={vegetables_broccoli} alt='icon-vegetables-broccoli'/>
                                                <h3 className="category-title">{post.title}</h3>
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>*/}

                            <Carousel responsive={responsive}>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bread_baguette} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Breads & Sweets</h3>
                                </a>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2">
                                    <img src={bread_baguette} alt='icon-bread-baguette'/>
                                    <h3 className="category-title">Breads & Sweets</h3>
                                </a>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2">
                                    <img src={soft_drink_bottle} alt='icon-soft-drinks-bottle'/>
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </a>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2">
                                    <img src={wine_glass_bottle} alt='icon_wine_glass_bottle'/>
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </a>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2">
                                    <img src={animal_products_drumsticks} alt='icon-animal-products-drumsticks'/>
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </a>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2">
                                    <img src={bread_herb_flour} alt='icon-bread-herb-flour'/>
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </a>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2">
                                    <img src={vegetables_broccoli} alt='icon-vegetables-broccoli'/>
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </a>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2">
                                    <img src={vegetables_broccoli} alt='icon-vegetables-broccoli'/>
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </a>
                                <a href="#" className="nav-link category-item swiper-slide me-3 ms-2">
                                    <img src={vegetables_broccoli} alt='icon-vegetables-broccoli'/>
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </a>
                            </Carousel>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Category;