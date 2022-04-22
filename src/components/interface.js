import {useState} from "react";
import styled from "styled-components";

import ExtendableList from "./extendableList";
import DevicesDetails from "./devicesDetails";
import DropZone from "./dropZone";

const S = {
    Wrapper: styled.div`
    height: 800px;
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #282c34;;
    `    
};

const Interface = () => {
    const [clickedDevice, setClickedDevice] = useState(null);
    return(
        <S.Wrapper>
            <ExtendableList setClickedDevice = {setClickedDevice} />
            {clickedDevice && <DevicesDetails device={clickedDevice} />}
            <DropZone />
        </S.Wrapper>       
    );
};

export default Interface;
