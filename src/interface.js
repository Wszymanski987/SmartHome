import react, {useState} from "react";
import styled from "styled-components";

import ExtendableList from "./extendableList";
import { DEVICES } from "./mock/devices";

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
    const [clickedDevice, setClickedDevice] = useState("Your Smart Bulb");

    return(
        <S.Wrapper>
            <ExtendableList setClickedDevice = {setClickedDevice} />
            <div>
                Szczegóły urządzeń: {clickedDevice}
            </div>
        </S.Wrapper>       
    );
};

export default Interface;
