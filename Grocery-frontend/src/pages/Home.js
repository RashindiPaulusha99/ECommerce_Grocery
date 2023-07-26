import React,{Fragment,useEffect,useState} from "react";
import '../assets/css/normalize.css';
import '../assets/css/vendor.css';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Category from "../components/Home/Category";
import NewlyArrivedBrands from "../components/Home/NewlyArrivedBrands";
import HeaderBanner from "../components/Home/HeaderBanner";
import MiddleBanners from "../components/Home/MiddleBanners";
import Cart from "../components/Home/Cart";
import Form from "../components/Home/Form";
import Preloader from "../components/Home/Preloader";
import HeaderIcons from "../components/Home/HeaderIcons";
import Header from "../layouts/Header";
import Search from "../components/Home/Search";
import BestSellingProducts from "../components/Home/BestSellingProducts";
import Blog from "../components/Home/Blog";
import AllProducts from "../components/Home/AllProducts";
import AppBanner from "../components/Home/AppBanner";
import Badges from "../components/Home/Badges";
import Services from "../components/Home/Services";
import Footer from "../layouts/Footer";

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
            <AllProducts/>
            <MiddleBanners/>
            <BestSellingProducts/>
            <Form/>
            <Blog/>
            <AppBanner/>
            <Badges/>
            <Services/>
            <Footer/>

        </Fragment>
    );
}

export default Home;