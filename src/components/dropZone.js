import interact from "interactjs";
import { createContext } from "react";
import styled from "styled-components";

import { onMove, endMove } from "../methods/onMove";
import { DEVICES } from "../mock/devices";

const S = {
    Wrapper: styled.div`
    background-color: #bfe4ff;
    border: dashed 4px transparent;
    border-radius: 4px;
    margin: 10px auto 30px;
    padding: 10px;
    width: 500px;
    height: 500px;
    transition: background-color 0.3s;
    `,
    DropActive: styled.div`
    border-color: #aaa;
    `,
    DropTarget: styled.div`
    background-color: #29e;
    border-color: #fff;
    border-style: solid;
    `
};

// const droppedElementContext;

interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.draggable' || `.item-1` || `.item-2` || `.item-3`,
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('.draggable')
      draggableElement.textContent = 'porazka'
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('.draggable')
      event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = 'Dropped'
      // droppedElementContext = createContext("Dropped") 
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })
  
  interact('.draggable')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          endOnly: true
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: onMove, end: endMove}
    })

    const DropZone = () => {

        return (
            <S.Wrapper className="dropzone">
                <h2>Device Details</h2>
                <S.DropActive className="drop-active">
                    <S.DropTarget className="drop-target"></S.DropTarget>
                    {/* {droppedElement.innerText === "Dropped" ? <span>tak</span> : <span>nie</span>} */}
                </S.DropActive>
            </S.Wrapper>
        );
    };
    

    export default DropZone;
    