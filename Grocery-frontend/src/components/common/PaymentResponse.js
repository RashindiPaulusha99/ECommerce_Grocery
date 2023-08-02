import React, {Fragment, useEffect, useState} from "react";
import Header from "../../layouts/Header";
import HeaderIcons from "../Home/HeaderIcons";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {useHistory,withRouter} from "react-router-dom";

const PaymentResponse=(props)=>{

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    useEffect(()=>{
        setEmail(props.location.state.email)
        setPassword(props.location.state.password)
    })

    const handleHome=()=>{
        const temp={
            "email":email,
            "password":password
        }

        history.push({
            pathname:'/home',
            state: temp
        });
    }

    return(
        <Fragment>
            <Header email={email} password={password}/>
            <HeaderIcons email={email} password={password}/>
            <div style={{width:'40%',height:'45vh',position:'relative',top:0,bottom:0,left:0,right:0,margin:"auto",boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'}}>
                <Typography variant="h5" gutterBottom style={{color:'black',fontWeight:"bold",textAlign:"center",lineHeight:1.2,fontFamily:'Plus Jakarta Sans", sans-serif',paddingTop:24}}>
                    <IconButton aria-label="delete" style={{color:'lightgreen',position:"relative",bottom:5}}>
                        <CheckCircleRoundedIcon/>
                    </IconButton>
                    Payment Successful
                </Typography>
                <Typography variant="h6" gutterBottom style={{color:'black',textAlign:"center",lineHeight:1.2,fontFamily:'Plus Jakarta Sans", sans-serif'}}>
                    Thank you! We've received your payment.
                </Typography>
                <Button variant="outlined" size="large" style={{marginTop:25,marginRight:20,marginLeft:20,position:"absolute",left:0,right:0,}} onClick={handleHome}>
                    Home
                </Button>
            </div>
        </Fragment>
    )
}

export default withRouter(PaymentResponse);