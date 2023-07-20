import React,{Fragment,useEffect,useState} from "react";
import '../assets/css/normalize.css';
import '../assets/css/vendor.css';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from 'infinite-react-carousel';
import { CCarousel ,CCarouselItem,CImage} from '@coreui/react'
//import 'swiper/swiper-bundle.css';
//import 'swiper/swiper-bundle.min.css';
//import '../assets/swiper/swiper-bundle.min.css';
//import '../assets/swiper/main';
//import '../assets/css/main.css';

import Category from "../components/Home/Category";
import NewlyArrivedBrands from "../components/Home/NewlyArrivedBrands";
import HeaderBanner from "../components/Home/HeaderBanner";
import MiddleBanners from "../components/Home/MiddleBanners";
import Cart from "../components/Home/Cart";
import Form from "../components/Home/Form";
import Preloader from "../components/Home/Preloader";
import HeaderIcons from "../components/Home/HeaderIcons";
import Header from "../assets/layouts/Header";
import Search from "../components/Home/Search";
import BestSellingProducts from "../components/Home/BestSellingProducts";
import MostPopularProducts from "../components/Home/MostPopularProducts";
import JustArrived from "../components/Home/JustArrived";
import Blog from "../components/Home/Blog";
import TrendingProducts from "../components/Home/TrendingProducts";
import AppBanner from "../components/Home/AppBanner";
import Badges from "../components/Home/Badges";
import Services from "../components/Home/Services";
import Footer from "../assets/layouts/Footer";

const Home=()=>{


    return(
        <Fragment>
            <HeaderIcons/>
            {/*<Preloader/>*/}
            <Cart/>
            <Search/>
            <Header/>
            <HeaderBanner/>
            <Category/>
            <NewlyArrivedBrands/>
            <TrendingProducts/>
            <MiddleBanners/>
            <BestSellingProducts/>
            <Form/>
            <MostPopularProducts/>
            <JustArrived/>
            <Blog/>
            <AppBanner/>
            <Badges/>
            <Services/>
            <Footer/>

        </Fragment>
    );
}

export default Home;