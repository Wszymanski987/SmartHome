import styled from "styled-components";
// import { useState } from "react";

import { DEVICES } from "../mock/devices";
// import { DroppedElementContext } from "../methods/createContext";
// import { onMove } from "../methods/onMove";


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
  // const [state, setState] = useState(false)

  return ( 
    <S.StyledList>
      {DEVICES.map((item, index) => (
        <S.StyledItemPosition className="draggable" >
          <ul onClick={() => setClickedDevice(item)} key={index} className={`item-${item.id}`} >{item.name}</ul>

        </S.StyledItemPosition>
      ))}
    </S.StyledList>   
    
  );
};

export default Lists;

