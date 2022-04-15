import react, {useState} from 'react';
import styled from "styled-components";

import Button from './components.js/button';
import List from './list'; 

const S = {
    StyledList: styled.div`
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        color: red;
        padding: 18px;
        width: fit-content;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        >button  {
            width: 200px;      
        }
      
    `
};

const ExtendableList = () => {
    const [open, setOpen] = useState(false);
    return (
        <S.StyledList>
            <Button onClick={() => setOpen(open => !open)} text = "Smart Devices" />
            {open && <List /> } 
        </S.StyledList>
        
    );
};

export default ExtendableList;