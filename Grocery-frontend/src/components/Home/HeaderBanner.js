import React, {Fragment, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import vegetables_broccoli from "../../assets/images/icon-vegetables-broccoli.png";
import Slider from "infinite-react-carousel";
import productThumb1 from "../../assets/images/product-thumb-1.png";
import productThumb2 from "../../assets/images/product-thumb-2.png";

const HeaderBanner=()=>{


    return(

        <section className="py-3 background-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="banner-blocks">

                            <div className="banner-ad large bg-info block-1 ">

                                <div className="swiper main-swiper">
                                    <div className="swiper-wrapper">
                                        <Slider dots duration={10} arrowsBlock={false}>
                                            <div className="swiper-slide">
                                                <div className="row banner-content p-5">
                                                    <div className="content-wrapper col-md-7">
                                                        <div className="categories mb-3 pb-3">100% natural</div>
                                                        <h3 className="banner-title">Fresh Smoothie & Summer Juice</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">shop collection</a>
                                                    </div>
                                                    <div className="img-wrapper col-md-5">
                                                        <img src={productThumb1} className="img-fluid" alt='product_thumb1'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="row banner-content p-5">
                                                    <div className="content-wrapper col-md-7">
                                                        <div className="categories mb-3 pb-3">100% natural</div>
                                                        <h3 className="banner-title">Fresh Smoothie & Summer Juice</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">shop collection</a>
                                                    </div>
                                                    <div className="img-wrapper col-md-5">
                                                        <img src={productThumb1} className="img-fluid" alt='product_thumb1'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="row banner-content p-5">
                                                    <div className="content-wrapper col-md-7">
                                                        <div className="categories mb-3 pb-3">100% natural</div>
                                                        <h3 className="banner-title">Heinz Tomato Ketchup</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">shop collection</a>
                                                    </div>
                                                    <div className="img-wrapper col-md-5">
                                                        <img src={productThumb2} className="img-fluid" alt='product_thumb2'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>

                                    {/*<div className="swiper-pagination "></div>
*/}
                                </div>
                            </div>

                            <div className="banner-ad bg-success block-2 banner-ad-image1">
                                <div className="row banner-content p-5">

                                    <div className="content-wrapper col-md-7">
                                        <div className="categories sale mb-3 pb-3">20% off</div>
                                        <h3 className="banner-title">Fruits & Vegetables</h3>
                                        <a href="#" className="d-flex align-items-center nav-link">shop collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                                    </div>

                                </div>
                            </div>

                            <div className="banner-ad bg-danger block-3 banner-ad-image2">
                                <div className="row banner-content p-5">

                                    <div className="content-wrapper col-md-7">
                                        <div className="categories sale mb-3 pb-3">15% off</div>
                                        <h3 className="item-title">Baked Products</h3>
                                        <a href="#" className="d-flex align-items-center nav-link">shop collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderBanner;