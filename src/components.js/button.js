import React from "react";
import styled from "styled-components";

const S = {
    StyledButton: styled.button`
        height: 20px;
        width: 20px;
        color: red;
    
    `
};

const Button = ({onClick, text}) => {
    return (
       <S.StyledButton onClick={onClick}>{text}</S.StyledButton>
    );
};

export default Button;