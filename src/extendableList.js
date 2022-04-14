import react, {useState} from 'react';
import styled from "styled-components";

import Button from './components.js/button';
import List from './list'; 

const S = {
    StyledList: styled.div`
        display: flex;
        flex-direction: column;
        background-color: blue;
        color: red;
        padding: 18px;
        width: fit-content;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        >button  {
            width: 200px;
            cursor: pointer;
            tranistion: 1s;
            :hover {
                opacity: 0.8;
            }
        }
      
    `
};

const ExtendableList = () => {
    const [open, setOpen] = useState(false);
    return (
        <S.StyledList>
            <Button onClick={() => setOpen(open => !open)} text = "Smart Devices" />
            {open === true ? <List /> : null} 
        </S.StyledList>
        
    );
};

export default ExtendableList;