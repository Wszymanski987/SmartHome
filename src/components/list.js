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
  return ( 
    <S.StyledList>
      {DEVICES.map((item, index) => (
        <S.StyledItemPosition className="draggable">
          <ul onClick={() => setClickedDevice(item)} key={index} >{item.name}</ul>
          
        </S.StyledItemPosition>
      ))}
    </S.StyledList>   
    
  );
};

export default Lists;

