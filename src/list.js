import styled from "styled-components";
import interact from "interactjs";

import { DEVICES } from "./mock/devices";

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
      `   
  };

  interact('div')
    .draggable({
      onmove: function(event) {
        const target = event.target;

        const dataX = target.getAttribute('data-x');
        const dataY = target.getAttribute('data-y');
        const initialX = parseFloat(dataX) || 0;
        const initialY = parseFloat(dataY) || 0;

        const deltaX = event.dx;
        const deltaY = event.dy;

        const newX = initialX + deltaX;
        const newY = initialY + deltaY;

        target
          .style
          .transform = `translate(${newX}px, ${newY}px)`;

        target.setAttribute('data-x', newX);
        target.setAttribute('data-y', newY);
      }
    })


const Lists = ({ setClickedDevice }) => {
  return ( 
    <S.StyledList>
      {DEVICES.map((item, index) => (
        <S.StyledItemPosition>
          <ul onClick={() => setClickedDevice(item)} key={index}>{item.name}</ul>
        </S.StyledItemPosition>
      ))}
    </S.StyledList>   
    
  );
};

export default Lists;

