import react from 'react';
import styled from "styled-component";
import Collapse from '@mui/material/Collapse';


import Button from './components.js/button';


const S = {
    StyledCollapsible: styled.Collapsible`
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        cursor: pointer;
        tranistion: 1s;
        :hover {
            opacity: 0.8;
        }
    `
};

const ExtendableList = () => {
    return (
        <div>
            <button >
                
            </button>

        </div>
        
    );
};

export default ExtendableList;