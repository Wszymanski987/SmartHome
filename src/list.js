import { DEVICES } from "./mock/devices";

const List = ({ open, setClickedDevice }) => {
  return (
    <li>
      {DEVICES.map((item, index) => (
        <ul onClick={() => setClickedDevice(item.name)} key={index}>{item.name}</ul>
      ))}
    </li>
  );
};

export default List;
