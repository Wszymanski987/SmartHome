import { useState } from "react";
import styled, { css } from "styled-components";

import Button from "./components/button";
import List from "./list";

const BasicStyles = css`
  background-color: #ffffff;
  color: red;
  padding: 18px;
  width: fit-content;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  display: flex;
`;

const S = {
  StyledList: styled.div`
    ${BasicStyles};
    flex-direction: column;

    > button {
      width: 200px;
    }
  `,
  Wrapper: styled.div`
    ${BasicStyles};
  `,
};

const ExtendableList = ({setClickedDevice}) => {
  const [open, setOpen] = useState(false);
  return (
    <S.Wrapper>
      <S.StyledList>
        <Button onClick={() => setOpen((open) => !open)} text="Smart Devices" />
        {open && <List open={open} setClickedDevice={setClickedDevice} />}
      </S.StyledList>
    </S.Wrapper>
  );
};

export default ExtendableList;
