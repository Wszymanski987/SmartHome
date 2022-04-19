import styled from "styled-components";

const S = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 200px;
        width: 200px;
        background-color: #ccccff;
        border-radius: 2%;
        > h2 {
            align-items: center;
        }
    `
};

const DevicesDetails = ({ device }) => {
    const isOutlet = device?.type === "outlet";
    const isBulb = device?.type === "bulb";
    const isTempSensor = device?.type === "temperatureSensor";

    return (
       <S.Wrapper>
           <h2>Devices Details</h2>
           <div>name: {device?.name}</div>
           <div>type: {device?.type}</div>
            {isOutlet && (
                <>
                    <div>isTurnedOn: {device?.isTurnedOn ? "On" : "Off"}</div>
                    <div>powerConsumption: {device?.powerConsumption}</div>
                </>
            )}
            {isBulb && (
                <>
                    <div>isTurnedOn: {device?.isTurnedOn ? "On" : "Off"}</div>
                    <div>brightness: {device?.brightness}</div>
                    <div>color: {device?.color}</div>
                </>
            )}
            {isTempSensor && (
                <><div>temperature: {device?.temperature}</div></>               
            )}
       </S.Wrapper>
    );
};

export default DevicesDetails;  