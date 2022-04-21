import {useState} from "react";
import styled from "styled-components";
import  interact from "interactjs";

import ExtendableList from "./extendableList";
import DevicesDetails from "./components/devicesDetails";

const S = {
    Wrapper: styled.div`
    height: 800px;
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #282c34;;
    `,
    DropZone: styled.div`
    height: 500px;
    width: 500px;
    background-color: #000000;
    `
};

const Interface = () => {
    const [clickedDevice, setClickedDevice] = useState(null);
    return(
        <S.Wrapper>
            <ExtendableList setClickedDevice = {setClickedDevice} />
            {clickedDevice && <DevicesDetails device={clickedDevice} />}
            {/* <S.DropZone  /> */}
        </S.Wrapper>       
    );
};

export default Interface;
