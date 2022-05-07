import { useState } from "react";
import interact from "interactjs";
//import { createContext } from "react";
import styled from "styled-components";

import { onMove } from "../methods/onMove";
import {
  DroppedElementContext,
  ElementContextProvider,
} from "../methods/elementContextProvider";
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
  `,
};

const DropZone = () => {
  const [data, setData] = useState(null);
  const { state, stateSetter } = useContext(DroppedElementContext);
  console.log("state", state);
  interact(".dropzone").dropzone({
    accept: ".draggable1, .draggable2, .draggable3",
    overlap: 0.75,

    ondropactivate: function (event) {
      event.target.classList.add("drop-active");
    },
    ondragenter: function (event) {
      const draggableElement = event.relatedTarget;
      const dropzoneElement = event.target;
      dropzoneElement.classList.add("drop-target");
      draggableElement.classList.add(
        ".draggable1" && (`.item-1` || `.item-2` || `.item-3`)
      );
      draggableElement.textContent = "porazka";
      // stateSetter();
    },
    ondragleave: function (event) {
      event.target.classList.remove("drop-target");
      event.relatedTarget.classList.remove(
        ".draggable1" && (`.item-1` || `.item-2` || `.item-3`)
      );
      event.relatedTarget.textContent = "Dragged out";
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = "Dropped";
      const class1 = event.relatedTarget.className.split(" ");
      const id = class1[2].slice(-1);
      console.log("dupa", id);
      setData(id);
    },
    ondropdeactivate: function (event) {
      event.target.classList.remove("drop-active");
      event.target.classList.remove("drop-target");
      console.log("dupa22");
    },
  });

  interact(".draggable1, .draggable2, .draggable3").draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        endOnly: true,
      }),
    ],
    autoScroll: true,
    listeners: { move: onMove },
  });

  return (
    <S.Wrapper className="dropzone">
      <h2>Device Details</h2>
      <S.DropActive className="drop-active">
        <S.DropTarget className="drop-target">{data}</S.DropTarget>
      </S.DropActive>
    </S.Wrapper>
  );
};

export default DropZone;
