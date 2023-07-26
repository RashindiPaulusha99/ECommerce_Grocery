import React from "react";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';
/*import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";*/
//import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBContainer } from 'mdb-react-ui-kit';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import ReorderIcon from '@mui/icons-material/Reorder';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';
import backed from '../assets/images/icons8-baked-35.png'
import vegetables from '../assets/images/icons8-vegetables-35.png'
import fruits from '../assets/images/icons8-fish-35.png'
import beverages from '../assets/images/icons8-beverages-35.png'
import milk from '../assets/images/icons8-milk-35.png'
import meats from '../assets/images/icons8-steak-35.png'
import fish from '../assets/images/icons8-fish-35.png'
import fastFoods from '../assets/images/icons8-biscuits-35.png'
import spices from '../assets/images/icons8-biscuits-35.png'

import grocery from "../assets/images/grocery.jpg";

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
    ]

const Header=()=>{

    const history = useHistory();

    const handleProfile=()=>{
        history.push({
            pathname:'/profile'
        });
    }

    const GroupHeader = styled('div')(({ theme }) => ({
        position: 'sticky',
        top: '-8px',
        padding: '4px 10px',
        color: 'rgb(245, 214, 59)',
        backgroundColor: lighten('rgb(245, 214, 59)', 0.85),
    }));

    const GroupItems = styled('ul')({
        padding: 0,
    });

    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    const [open, setOpen] = React.useState(true);

    /*const handleClick = () => {
        setOpen(!open);
    };*/

    const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
        <header>
            <div className="container-fluid">
                <div className="row py-3 border-bottom">

                    <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                        <div className="main-logo">
                            <a href="#" style={{textDecoration: 'none'}}>
                                <img src={grocery} alt="logo" className="img-fluid" style={{height: 68}}/>
                                <h4 style={{display: 'inline',color: 'darkkhaki',fontFamily: 'monospace'}}>FreshZone</h4>
                            </a>
                        </div>
                    </div>

                    {/*search bar in header*/}
                    <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                        <div className="search-bar row bg-light p-2 my-2 rounded-4">
                            <div className="col-11">
                                <form id="search-form" className="text-center" action="" method="">
                                    <input type="text" className="form-control border-0 bg-transparent" placeholder="What are you looking..." />
                                </form>
                            </div>
                            <div className="col-1" style={{cursor: "pointer"}} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
                            </div>
                        </div>
                    </div>

                    {/*support in header*/}
                    <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">

                        <ul className="d-flex justify-content-end list-unstyled m-0">
                            <li>
                                <a href="#r" className="rounded-circle bg-light p-2 mx-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#heart"></use></svg>
                                </a>
                            </li>
                            <li className="">
                                <span className="badge bg-primary rounded-pill" style={{position: "absolute",display: "flex"}}>4</span>
                                <a href="#r" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#cart"></use></svg>
                                </a>
                            </li>
                            <li className="d-lg-none">
                                <a href="#r" className="rounded-circle bg-light p-2 mx-1" style={{cursor: "pointer"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#search"></use></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#r" className="rounded-circle bg-light p-2 mx-1" onClick={handleProfile}>
                                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#user"></use></svg>
                                </a>
                            </li>
                        </ul>

                        {/*your cart in header*/}
                        {/*<div class="cart text-end d-none d-lg-block">
                              <button class="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                <span class="badge bg-primary rounded-pill" style="position: absolute;top: 40px">3</span>
                                <a href="#" class="rounded-circle bg-light p-2 mx-1">
                                  <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#cart"></use></svg>
                                </a>
                                <span class="fs-6 text-muted ">Cart</span>
                              </button>
                            </div>*/}

                    </div>

                </div>

                {/*header menu*/}
                <div className="container-fluid">
                    <div className="row py-3">
                        <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
                            <nav className="main-menu d-flex navbar navbar-expand-lg">

                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                                        aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                                    <div className="offcanvas-header justify-content-center">
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    <div className="offcanvas-body">
                                        
                                            <Button
                                                id="basic-button"
                                                aria-controls={opens ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={opens ? 'true' : undefined}
                                                onClick={handleClick}
                                                startIcon={<ReorderIcon />}
                                                endIcon={<KeyboardArrowDownIcon />}
                                            >
                                                Categories
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                style={{width:216}}
                                                open={opens}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={vegetables} alt="vegetables" className="navImage"/>
                                                    </ListItemIcon>
                                                    Vegetables
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={fruits} alt="fruits" className="navImage"/>
                                                    </ListItemIcon>
                                                    Fruits
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={beverages} alt="beverages" className="navImage"/>
                                                    </ListItemIcon>
                                                    Beverages
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={milk} alt="milk" className="navImage"/>
                                                    </ListItemIcon>
                                                    Milk
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={spices} alt="spices" className="navImage"/>
                                                    </ListItemIcon>
                                                    Spices
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={meats} alt="meats" className="navImage"/>
                                                    </ListItemIcon>
                                                    Meats
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={fish} alt="sea foods" className="navImage"/>
                                                    </ListItemIcon>
                                                    Sea Foods
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={backed} alt="backed" className="navImage"/>
                                                    </ListItemIcon>
                                                    Baked Products
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <img src={fastFoods} alt="fast foods" className="navImage"/>
                                                    </ListItemIcon>
                                                    Fast Foods
                                                </MenuItem>
                                            </Menu>
   
                                        <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                                            <li className="nav-item active nav">
                                                <a href="#" className="nav-link" >Home</a>
                                            </li>
                                            <li className="nav-item dropdown nav">
                                                <a href="#" className="nav-link">About Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link nav">Blogs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link nav">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link nav">Contact Us</a>
                                            </li>
                                            
                                        </ul>

                                    </div>

                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;