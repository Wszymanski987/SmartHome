import interact from "interactjs";
import styled from "styled-components";
import "./test.css";

const S = {
  Wrapper: styled.div`
    height: 500px;
    width: 500px;
    background-color: #ffffff;
  `,
};

interact(".dropzone").dropzone({
  // only accept elements matching this CSS selector
  accept: "#yes-drop",
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add("drop-active");
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add("drop-target");
    draggableElement.classList.add("can-drop");
    draggableElement.textContent = "Dragged in";
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove("drop-target");
    event.relatedTarget.classList.remove("can-drop");
    event.relatedTarget.textContent = "Dragged out";
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = "Dropped";
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove("drop-active");
    event.target.classList.remove("drop-target");
  },
});

interact(".drag-drop").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      endOnly: true,
    }),
  ],
  autoScroll: true,
  // dragMoveListener from the dragging demo above
  // listeners: { move: dragMoveListener },
});

// interact("div").dropzone({
//   accept: ".ttt",
//   overlap: 0.75,
//   ondropactivate: function (event) {
//     const item = event.relatedTarget;
//     item.classList.add("dragging");
//   },
//   ondropdeactivate: function (event) {
//     const item = event.relatedTarget;
//     item.classList.remove("dragging", "cannot-drop");
//   },
//   ondragenter: function (event) {
//     const item = event.relatedTarget;
//     item.classList.remove("cannot-drop");
//     item.classList.add("can-drop");
//   },
//   ondragleave: function (event) {
//     const item = event.relatedTarget;
//     item.classList.remove("can-drop");
//     item.classList.add("cannot-drop");
//   },
// });

const DropZone = () => {
  return (
    <S.Wrapper id="outer-dropzone" class="dropzone">
      <h2>Device Details</h2>
    </S.Wrapper>
  );
};

export default DropZone;
