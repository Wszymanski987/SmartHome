import React from "react";
import styled from "styled-components";

const S = {
    StyledButton: styled.button`
        height: 20px;
        width: 20px;
        box-sizing: border-box;
        cursor: pointer;
            tranistion: 1s;
            :hover {
                opacity: 0.8;
            }
    `
};

const Button = ({onClick, text}) => {
    return (
       <S.StyledButton onClick={onClick}>{text}</S.StyledButton>
    );
};

export default Button;