import React,{Fragment,useState,useEffect} from "react";
import Header from "../../layouts/Header";
import HeaderIcons from "../Home/HeaderIcons";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { withRouter } from 'react-router-dom';
import Button from "@mui/material/Button";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'lavender',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Payment=(props)=>{

    const [expanded, setExpanded] = useState('panel1');
    const [total, setTotal] = useState(0);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(()=>{
        setTotal(props.location.state)
    })

    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <div style={{width:'100%',padding:24}}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <IconButton aria-label="delete" size="large" style={{color:'cornflowerblue',}}>
                            <HomeOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <Typography style={{fontWeight:"bold",position:'relative',top:15}}>Delivery Address</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch',flexWrap: 'wrap' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className='row'>
                                <div className="col mb-2 w-50">
                                    <label style={{fontSize:14}} htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address"/>
                                </div>
                                <div className="col mb-2 w-50">
                                    <label style={{fontSize:14}} htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city"/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="province" className="form-label">Province</label>
                                    <input type="text" className="form-control" id="province"/>
                                </div>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="postalcode" className="form-label">Postal Code</label>
                                    <input type="text" className="form-control" id="postalcode"/>
                                </div>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <IconButton aria-label="delete" size="large" style={{color:'cornflowerblue',}}>
                            <CallOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <Typography style={{fontWeight:"bold",position:'relative',top:15}}>Contact Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className='row'>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name"/>
                                </div>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="contact" className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" id="contact"/>
                                </div>
                                <div className="col mb-4 w-50">
                                    <label style={{fontSize:14}} htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email"/>
                                </div>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <IconButton aria-label="delete" size="large" style={{color:'cornflowerblue',}}>
                            <AttachMoneyOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <Typography style={{fontWeight:"bold",position:'relative',top:15}}>Payment Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div className='row'>
                                <div className="col col-lg-4 col-md-4 col-sm-12 mb-2 w-50">
                                    <label style={{fontSize:14}} htmlFor="cardnumber" className="form-label">Card Number</label>
                                    <input type="text" className="form-control" id="cardnumber"/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col col-lg-1 col-md-1 col-sm-6 mb-2 w-25">
                                    <label style={{fontSize:14}} htmlFor="month" className="form-label">Expiry Month</label>
                                    <select className="form-select col col-lg-1 col-md-1 col-sm-6" style={{width: '37%'}} aria-label="month">
                                        <option selected>MM</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="col col-lg-1 col-md-1 col-sm-6 mb-2 w-25">
                                    <label style={{fontSize:14}} htmlFor="year" className="form-label">Expiry Year</label>
                                    <select className="form-select col col-lg-1 col-md-1 col-sm-6" style={{width: '37%'}} aria-label="year">
                                        <option selected>YY</option>
                                        <option value="1">20</option>
                                        <option value="2">21</option>
                                        <option value="3">23</option>
                                        <option value="4">24</option>
                                        <option value="5">25</option>
                                        <option value="6">26</option>
                                        <option value="7">27</option>
                                        <option value="8">28</option>
                                        <option value="9">29</option>
                                        <option value="10">30</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col col-lg-4 col-md-4 col-sm-12 mb-2 w-25">
                                    <label style={{fontSize:14}} htmlFor="cardholderName" className="form-label">Cardholder Name</label>
                                    <input type="text" className="form-control" id="cardholderName"/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col col-lg-2 col-md-2 col-sm-12 mb-2 w-25">
                                    <label style={{fontSize:14}} htmlFor="code" className="form-label">Security code</label>
                                    <input type="text" style={{width: '50%'}} className="form-control" id="code"/>
                                    <p style={{position:'absolute',bottom:10,left:145,fontSize:13}}>3 digits</p>
                                </div>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <IconButton aria-label="delete" size="large" style={{color:'cornflowerblue',}}>
                            <AttachMoneyOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <Typography style={{fontWeight:"bold",position:'relative',top:15}}>Payment</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Typography style={{display:'flex',justifyContent:'flex-end',fontWeight:"bold",fontSize:20}}>TOTAL :  <span style={{color:'crimson'}}>{"Rs. "+total+".00"}</span></Typography>
                            <div style={{display:'flex',justifyContent:'flex-end',marginTop:10,}}>
                                <Button fullWidth size="medium" variant="contained" style={{width:200,backgroundColor:'lightseagreen'}}>
                                    Pay Now
                                </Button>
                            </div>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

        </Fragment>
    )
}

export default withRouter(Payment);