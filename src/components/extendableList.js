import { useState } from "react";
import styled from "styled-components";


import Button from "./button";
import Lists from "./list";



const S = {
  Wrapper: styled.div`
  background-color: #282c34;
  color: red;
  padding: 18px;
  width: fit-content;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  > button {
      width: 200px;
    }
  `,
};

const ExtendableList = ({setClickedDevice}) => {
  const [open, setOpen] = useState(false);
  return (
     <S.Wrapper>
        <Button onClick={() => setOpen((open) => !open)} text="Smart Devices" />
        {open && <Lists setClickedDevice={setClickedDevice} />}
    </S.Wrapper>
  );
};

export default ExtendableList;


