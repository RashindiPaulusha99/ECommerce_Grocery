import React,{Fragment,useEffect,useState} from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import logo from '../../assets/images/grocery.jpg'
import Grid from '@mui/material/Grid';
import AppWidgetSummary from "./body/AppWidgetSummary";
import {useSelector} from "react-redux";
import HomeService from "../../Services/HomeService";
import {useHistory} from "react-router-dom";
import DashboardHeader from "./header/DashboardHeader";
import DrawerList from "./DrawerList";
import DashboardBody from "./body/DashboardBody";
import UserBody from "./body/UserBody";

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
                        clickedColour === 'category' ? <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                    <Toolbar />
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
                        </Grid>
                    </Grid>
                </Box> : clickedColour === 'brand' ? <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                    <Toolbar />
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
                        </Grid>
                    </Grid>
                </Box> : clickedColour === 'product' ? <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                    <Toolbar />
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
                        </Grid>
                    </Grid>
                </Box> : null}
            </Box>
        </Fragment>
    )
}

export default Dashboard;