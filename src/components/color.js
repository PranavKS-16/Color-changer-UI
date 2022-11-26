import { React, useState } from 'react';
import Select from 'react-select';
import './color.css';

//import Button from '@mui/material/Button';
//import Menu from '@mui/material/Menu';
//import MenuItem from '@mui/material/MenuItem';
//import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

<h1>COLOR CHANGER</h1>
const Color = () => {
    

    const colors = [{
        id: 1,
        label: "red",
    },
    {
        id: 2,
        label: "green",
    },
    {
        id: 3,
        label: "yellow",
    },
    {
        id: 4,
        label: "orange",
    },
    {
        id: 5,
        label: "pink",
    },
    {
        id: 6,
        label: "black",
    },
    {
        id: 7,
        label: "violet",
    },
    {
        id: 8,
        label: "grey",
    }
    ]
    

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div>
            <style>
                {
                    `body{
                        background-color:` + color + ';'
                }
            </style>
            <h1 align="center">COLOR CHANGER</h1>
            
            <Select options={colors} onChange={click}></Select>
            
            
        </div>
    
      
    );
}
export default Color;s