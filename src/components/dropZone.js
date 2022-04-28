import interact from "interactjs";
//import { createContext } from "react";
import styled from "styled-components";

import { onMove } from "../methods/onMove";
import { DroppedElementContext, ElementContextProvider } from "../methods/elementContextProvider";
import { useContext } from "react";

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

    const DropZone = () => {
        const {state, stateSetter} = useContext(DroppedElementContext)

        interact('.dropzone').dropzone({
          accept: '.draggable' && (`.item-1` || `.item-2` || `.item-3`),
          overlap: 0.75,
          
          ondropactivate: function (event) {
            event.target.classList.add('drop-active')
          },
          ondragenter: function (event) {
            var draggableElement = event.relatedTarget
            var dropzoneElement = event.target      
            
            dropzoneElement.classList.add('drop-target')
            draggableElement.classList.add('.draggable' && (`.item-1` || `.item-2` || `.item-3`))
            draggableElement.textContent = 'porazka'
            stateSetter()
            console.log("1")            
          },
          ondragleave: function (event) {
            event.target.classList.remove('drop-target')
            event.relatedTarget.classList.remove('.draggable' && (`.item-1` || `.item-2` || `.item-3`))
            event.relatedTarget.textContent = 'Dragged out'
          },
          ondrop: function (event) {
            event.relatedTarget.textContent = 'Dropped'
          },
          ondropdeactivate: function (event) {
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
          listeners: { move: onMove }
        })

        return (
              <S.Wrapper className="dropzone">
                <h2>Device Details</h2>
                <S.DropActive className="drop-active">
                  <S.DropTarget className="drop-target">                      
                    {state ? <p>tak</p> : <p>nie</p>}                 
                  </S.DropTarget>   
                </S.DropActive>
              </S.Wrapper>
        );
    };
    
    export default DropZone;
    