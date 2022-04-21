import interact from "interactjs";

export const useDropZoneLogic = () => {
  const interactDropzone = interact("div").dropzone({
    accept: "{ item }",
    overlap: 0.75,
    ondropactivate: function (event) {
      const item = event.relatedTarget;
      item.classList.add("dragging");
    },
    ondropdeactivate: function (event) {
      const item = event.relatedTarget;
      item.classList.remove("dragging", "cannot-drop");
    },
    ondragenter: function (event) {
      const item = event.relatedTarget;
      item.classList.remove("cannot-drop");
      item.classList.add("can-drop");
    },
    ondragleave: function (event) {
      const item = event.relatedTarget;
      item.classList.remove("can-drop");
      item.classList.add("cannot-drop");
    },
  });

  return {
    interactDropzone,
  };
};
