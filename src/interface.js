import react from "react";
import styled from "styled-components";

import ExtendableList from "./extendableList";

const S = {
    Wrapper: styled.div`
    border: solid green;
    height: 800px;
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #ffffff;
    `
}

const Interface = () => {
    return(
        <S.Wrapper>
            <ExtendableList />
        </S.Wrapper>       
    );
};

export default Interface;
