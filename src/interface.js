import {useState} from "react";
import styled from "styled-components";

import ExtendableList from "./extendableList";
import DevicesDetails from "./components/devicesDetails";

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
    const [clickedDevice, setClickedDevice] = useState(null);
    return(
        <S.Wrapper>
            <ExtendableList setClickedDevice = {setClickedDevice} />
            {clickedDevice && <DevicesDetails device={clickedDevice} />}
        </S.Wrapper>       
    );
};

export default Interface;
