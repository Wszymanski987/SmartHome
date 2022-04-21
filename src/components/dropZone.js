import interact from "interactjs";
import styled from "styled-components";

const S = {
    Wrapper: styled.div`
    height: 500px;
    width: 500px;
    background-color: #ffffff;
    `
}

interact ('div')
    .dropzone ({
        accept: '{ item }',
        overlap: 0.75,
        ondropactivate: function (event) {
            const item = event.relatedTarget
            item.classList.add('dragging')
          },
          ondropdeactivate: function (event) {
            const item = event.relatedTarget
            item.classList.remove('dragging', 'cannot-drop')
          },
          ondragenter: function(event) {
            const item = event.relatedTarget
            item.classList.remove('cannot-drop')
            item.classList.add('can-drop')
          },
          ondragleave: function(event) {
            const item = event.relatedTarget
            item.classList.remove('can-drop')
            item.classList.add('cannot-drop')
          }
        })

const DropZone = () => {
    return (
        <S.Wrapper>
            <h2>Device Details</h2>
        </S.Wrapper>
    );
};

export default DropZone;