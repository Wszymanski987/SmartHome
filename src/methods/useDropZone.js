import interact from "interactjs";

import { onMove } from "onMove";

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.draggable',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:
  
  listeners: {
    ondropactivate: onDropActivate,
    ondragenter: onDragEnter, 
    ondragleave: onDragleave, 
    ondrop: onDrop,
    ondropdeactivate: onDropDeactivate 

}
})

export function onDropActivate (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  }

export function onDragEnter (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    draggableElement.textContent = 'Dragged in'
  }

export function onDragleave (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    event.relatedTarget.textContent = 'Dragged out'
  }

export function onDrop (event) {
    event.relatedTarget.textContent = 'Dropped'
  }

export function onDropDeactivate (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }



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
    listeners: { move: onMove }
  })