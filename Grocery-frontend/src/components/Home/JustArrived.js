import React,{useState,useEffect} from "react";
import tomato from "../../assets/images/thumb-tomatoes.png";
import tomatokechup from "../../assets/images/thumb-tomatoketchup.png";
import banana from "../../assets/images/thumb-bananas.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const JustArrived=()=>{

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
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


    return(
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="section-header d-flex justify-content-between">

                            <h2 className="section-title">Just arrived</h2>

                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                                <div className="swiper-buttons">
                                    <button className="swiper-prev products-carousel-prev btn " disabled={!showPreviousButton} onClick={handlePreviousButton}>❮</button>
                                    <button className="swiper-next products-carousel-next btn " disabled={!showNextButton}  onClick={handleNextButton}>❯</button>
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
                                        {currentPosts.map((post) =>(
                                            <Grid item xs={4} lg={2.4} md={2.4}  key={post.id} >
                                                <div className="product-item swiper-slide">
                                                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                                    <figure>
                                                        <a href="product-single.html" title="Product Title">
                                                            <img src={tomato} alt='tomato' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>{post.title}</h3>
                                                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">$18.00</span>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number"  datatype="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                        </span>
                                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100"/>
                                                            <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="">
                                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                        </span>
                                                        </div>
                                                        <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                                                    </div>
                                                </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                {/*<div className="product-item swiper-slide">
                                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                    <figure>
                                        <a href="product-single.html" title="Product Title">
                                            <img src={tomatokechup} alt='tomato kechup'  className="tab-image"/>
                                        </a>
                                    </figure>
                                    <h3>Sunstar Fresh Melon Juice</h3>
                                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                    <span className="price">$18.00</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number"  datatype="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                        </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100"/>
                                            <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="">
                                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                        </span>
                                        </div>
                                        <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                                    </div>
                                </div>

                                <div className="product-item swiper-slide">
                                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                    <figure>
                                        <a href="product-single.html" title="Product Title">
                                            <img src={banana} alt='banana'  className="tab-image"/>
                                        </a>
                                    </figure>
                                    <h3>Sunstar Fresh Melon Juice</h3>
                                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                    <span className="price">$18.00</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number"  datatype="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                        </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100"/>
                                            <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="">
                                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                        </span>
                                        </div>
                                        <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                                    </div>
                                </div>

                                <div className="product-item swiper-slide">
                                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                    <figure>
                                        <a href="product-single.html" title="Product Title">
                                            <img src={tomato} alt='tomato' className="tab-image"/>
                                        </a>
                                    </figure>
                                    <h3>Sunstar Fresh Melon Juice</h3>
                                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                    <span className="price">$18.00</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number"  datatype="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                        </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100"/>
                                            <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="">
                                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                        </span>
                                        </div>
                                        <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                                    </div>
                                </div>

                                <div className="product-item swiper-slide">
                                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                    <figure>
                                        <a href="product-single.html" title="Product Title">
                                            <img src={tomatokechup} alt='tomato kechup'  className="tab-image"/>
                                        </a>
                                    </figure>
                                    <h3>Sunstar Fresh Melon Juice</h3>
                                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                    <span className="price">$18.00</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number"  datatype="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                        </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100"/>
                                            <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="">
                                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                        </span>
                                        </div>
                                        <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                                    </div>
                                </div>

                                <div className="product-item swiper-slide">
                                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                    <figure>
                                        <a href="product-single.html" title="Product Title">
                                            <img src={banana} alt='banana'  className="tab-image"/>
                                        </a>
                                    </figure>
                                    <h3>Sunstar Fresh Melon Juice</h3>
                                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                    <span className="price">$18.00</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number"  datatype="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                        </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100"/>
                                            <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="">
                                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                        </span>
                                        </div>
                                        <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                                    </div>
                                </div>

                                <div className="product-item swiper-slide">
                                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                    <figure>
                                        <a href="product-single.html" title="Product Title">
                                            <img src={tomato} alt='tomato' className="tab-image"/>
                                        </a>
                                    </figure>
                                    <h3>Sunstar Fresh Melon Juice</h3>
                                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                    <span className="price">$18.00</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number"  datatype="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                        </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100"/>
                                            <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="">
                                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                        </span>
                                        </div>
                                        <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                                    </div>
                                </div>

                                <div className="product-item swiper-slide">
                                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                    <figure>
                                        <a href="product-single.html" title="Product Title">
                                            <img src={tomatokechup} alt='tomato kechup'  className="tab-image"/>
                                        </a>
                                    </figure>
                                    <h3>Sunstar Fresh Melon Juice</h3>
                                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                    <span className="price">$18.00</span>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn btn-danger btn-number"  datatype="minus" data-field="">
                              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                            </button>
                        </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="10" min="1" max="100"/>
                                            <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" datatype="plus" data-field="">
                                <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                            </button>
                        </span>
                                        </div>
                                        <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
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

export default JustArrived;