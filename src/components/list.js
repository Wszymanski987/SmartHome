import { createContext } from "react";
import styled from "styled-components";

import { DEVICES } from "../mock/devices";


  const S = {
    StyledList: styled.li`
    color: black;
    background-color: red;
    `,
    StyledItemPosition: styled.div`
    border: solid black;
    cursor: pointer;
    tranistion: 1s;
    :hover {
        opacity: 0.8;
    };
    transform: translate(0px, 0px);
      `   
  };

const Lists = ({ setClickedDevice }) => {
  const droppedElementContext = createContext("Dropped");
  return ( 
    <S.StyledList>
      {DEVICES.map((item, index) => (
        <S.StyledItemPosition className="draggable" >
          <ul onClick={() => setClickedDevice(item)} key={index} className={`item-${item.id}`} >{item.name}</ul>
          droppedElementContext
        </S.StyledItemPosition>
      ))}
    </S.StyledList>   
    
  );
};

export default Lists;

