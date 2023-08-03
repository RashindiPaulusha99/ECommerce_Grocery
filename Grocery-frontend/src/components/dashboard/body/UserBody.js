import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import AppWidgetSummary from "./AppWidgetSummary";
import Box from "@mui/material/Box";

const UserBody=()=>{

    return(
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
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
        </Box>
    )
}
export default UserBody;