import { createContext, useState } from "react";

export const DroppedElementContext = createContext({});

export const ElementContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const stateSetter = () => {
    setState((prev) => !prev);
  };

  return (
    <DroppedElementContext.Provider value={{ state, stateSetter }}>
      {children}
    </DroppedElementContext.Provider>
  );
};

export default ElementContextProvider;
