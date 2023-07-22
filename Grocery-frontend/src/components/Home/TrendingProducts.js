import React,{useEffect,useState} from "react";
import banana from "../../assets/images/thumb-bananas.png";
import biscuits from "../../assets/images/thumb-biscuits.png";
import cucumber from "../../assets/images/thumb-cucumber.png";
import milk from "../../assets/images/thumb-milk.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const TrendingProducts=()=>{

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
        <section className="py-5">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12">

                        <div className="bootstrap-tabs product-tabs">
                            <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                                <h3>Trending Products</h3>
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-link text-uppercase fs-6 active" id="nav-all-tab"
                                           data-bs-toggle="tab" data-bs-target="#nav-all" type="button">All</a>
                                        <a className="nav-link text-uppercase fs-6" id="nav-fruits-tab"
                                           data-bs-toggle="tab" data-bs-target="#nav-fruits" type="button">Fruits &
                                            Veges</a>
                                        <a className="nav-link text-uppercase fs-6" id="nav-juices-tab"
                                           data-bs-toggle="tab" data-bs-target="#nav-juices" type="button">Juices</a>
                                    </div>
                                </nav>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-all" role="tabpanel"
                                     aria-labelledby="nav-all-tab">

                                    <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                                    <Box sx={{ flexGrow: 1 }} >
                                    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                                        {currentPosts.map((post) =>(
                                            <Grid item xs={4} lg={2.4} md={2.4}  key={post.id} >
                                                <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={banana} alt='thumb bananas' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                        {/*<div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={banana} alt='thumb bananas' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={biscuits} alt='thumb biscuits' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={cucumber} alt='thumb cucumber' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={milk} alt='thumb milk' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={banana} alt='thumb banabas' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={biscuits} alt='thumb biscuits' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={biscuits} alt='thumb biscuits' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={banana} alt='thumb biscuites' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={milk} alt='thumb biscuites' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={cucumber} alt='thumb biscuites'
                                                             className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>*/}

                                    </div>

                                </div>

                               {/* <div className="tab-pane fade" id="nav-fruits" role="tabpanel"
                                     aria-labelledby="nav-fruits-tab">

                                    <div
                                        className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={banana} alt='thumb bananas' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={biscuits} alt='thumb biscuits' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={cucumber} alt='thumb cucumber' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={milk} alt='thumb milk' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={banana} alt='thumb banabas' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={biscuits} alt='thumb biscuits' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="tab-pane fade" id="nav-juices" role="tabpanel"
                                     aria-labelledby="nav-juices-tab">

                                    <div
                                        className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={banana} alt='thumb bananas' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={biscuits} alt='thumb biscuits' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={cucumber} alt='thumb cucumber' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={milk} alt='thumb milk' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={banana} alt='thumb banabas' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="product-item">
                                                <a href="#" className="btn-wishlist">
                                                    <svg width="24" height="24">
                                                        <use xlinkHref="#heart"></use>
                                                    </svg>
                                                </a>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={biscuits} alt='thumb biscuits' className="tab-image"/>
                                                    </a>
                                                </figure>
                                                <h3>Sunstar Fresh Melon Juice</h3>
                                                <span className="qty">1 Unit</span><span className="rating"><svg
                                                width="24" height="24" className="text-primary"><use
                                                xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                <span className="price">$18.00</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number"
                                          datatype="minus" data-field="">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number" value="10" min="1"
                                                               max="100"/>
                                                        <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number"
                                          datatype="plus" data-field="">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon
                                                        icon="uil:shopping-cart"/></a>
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

export default TrendingProducts;