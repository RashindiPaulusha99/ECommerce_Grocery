import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import vegetables from "../../assets/images/icons8-vegetables-35.png";
import Divider from "@mui/material/Divider";
import fruits from "../../assets/images/icons8-fish-35.png";
import beverages from "../../assets/images/icons8-beverages-35.png";
import milk from "../../assets/images/icons8-milk-35.png";
import spices from "../../assets/images/icons8-biscuits-35.png";
import meats from "../../assets/images/icons8-steak-35.png";
import fish from "../../assets/images/icons8-fish-35.png";
import backed from "../../assets/images/icons8-baked-35.png";
import fastFoods from "../../assets/images/icons8-biscuits-35.png";
import Menu from "@mui/material/Menu";

const  CategoryMenu=(props)=>{

    return(
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            style={{width:216}}
            open={props.opens}
            onClose={props.handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={vegetables} alt="vegetables" className="navImage"/>
                </ListItemIcon>
                Vegetables
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={fruits} alt="fruits" className="navImage"/>
                </ListItemIcon>
                Fruits
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={beverages} alt="beverages" className="navImage"/>
                </ListItemIcon>
                Beverages
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={milk} alt="milk" className="navImage"/>
                </ListItemIcon>
                Milk
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={spices} alt="spices" className="navImage"/>
                </ListItemIcon>
                Spices
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={meats} alt="meats" className="navImage"/>
                </ListItemIcon>
                Meats
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={fish} alt="sea foods" className="navImage"/>
                </ListItemIcon>
                Sea Foods
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={backed} alt="backed" className="navImage"/>
                </ListItemIcon>
                Baked Products
            </MenuItem>
            <Divider />
            <MenuItem onClick={props.handleClose}>
                <ListItemIcon>
                    <img src={fastFoods} alt="fast foods" className="navImage"/>
                </ListItemIcon>
                Fast Foods
            </MenuItem>
        </Menu>
    )
}

export  default CategoryMenu;