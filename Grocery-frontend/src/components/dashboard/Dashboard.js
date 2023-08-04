import React,{Fragment,useEffect,useState} from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import logo from '../../assets/images/grocery.jpg'
import DashboardHeader from "../../layouts/dashboard/DashboardHeader";
import DrawerList from "./DrawerList";
import DashboardBody from "./body/dashboard/DashboardBody";
import UserBody from "./body/user/UserBody";
import CategoryBody from "./body/category/CategoryBody";
import BrandBody from "./body/brand/BrandBody";
import ProductBody from "./body/item/ProductBody";

const drawerWidth = 240;

const Dashboard=(props)=>{

    const [clickedColour, setClickedColour] = useState('dashboard');

    const handleClick=(type)=>{
        setClickedColour(type)
    }

    return(
        <Fragment>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {/*header*/}
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,backgroundColor:'lightseagreen' }}
                >
                    <DashboardHeader />
                </AppBar>

                {/*side bar*/}
                <Drawer
                    variant="permanent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box'
                        },
                    }} >
                    <Toolbar />
                    <img src={logo} alt='logo' style={{width:50,height:50,position:'absolute',left:15,top:8}}/>
                    <Divider />
                    <DrawerList clickedColour={clickedColour} handleClick={handleClick}/>
                </Drawer>

                {/*body*/}
                {clickedColour === 'dashboard' ? <DashboardBody/> :
                    clickedColour === 'user' ? <UserBody/> :
                        clickedColour === 'category' ? <CategoryBody/> :
                            clickedColour === 'brand' ? <BrandBody/> :
                                clickedColour === 'product' ? <ProductBody/> :
                                    null
                }
            </Box>
        </Fragment>
    )
}

export default Dashboard;