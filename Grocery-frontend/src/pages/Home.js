import React,{Fragment,useEffect,useState} from "react";
import '../assets/css/normalize.css';
import '../assets/css/vendor.css';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

import Category from "../components/Home/Category";
import NewlyArrivedBrands from "../components/Home/NewlyArrivedBrands";
import HeaderBanner from "../components/Home/HeaderBanner";
import MiddleBanners from "../components/Home/MiddleBanners";
import Form from "../components/Home/Form";
import HeaderIcons from "../components/Home/HeaderIcons";
import Header from "../layouts/Header";
import Search from "../components/Home/Search";
import BestSellingProducts from "../components/Home/BestSellingProducts";
import Blog from "../components/Home/Blog";
import AllProducts from "../components/Home/AllProducts";
import Badges from "../components/Home/Badges";
import Services from "../components/Home/Services";
import Footer from "../layouts/Footer";

const Home=(props)=>{

     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')

     useEffect(()=>{
        setEmail(props.location.state.email)
        setPassword(props.location.state.password)
         console.log(email)
         console.log(password)
     })

    return(
        <Fragment>
            <HeaderIcons email={email} password={password}/>
            <Search/>
            <Header email={email} password={password}/>
            <HeaderBanner/>
            <Category/>
            <NewlyArrivedBrands/>
            <AllProducts email={email} password={password}/>
            <MiddleBanners/>
            <BestSellingProducts email={email} password={password}/>
            <Form/>
            <Blog/>
            <Badges/>
            <Services/>
            <Footer/>

        </Fragment>
    );
}

export default withRouter(Home);