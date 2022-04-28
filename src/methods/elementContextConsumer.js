import { DroppedElementContext } from "./createContext";

const ElementContextConsumer = ({ children }) => {
    const { Consumer } = DroppedElementContext;

    return (
        <Consumer>
            
        </Consumer>
    );
};

export default ElementContextConsumer;