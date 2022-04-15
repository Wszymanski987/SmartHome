import { DEVICES } from "./mock/devices";

const List = () => {
  return (
    <li>
      {DEVICES.map((item, index) => (
        <ul key={index}>{item.name}</ul>
      ))}
    </li>
  );
};

export default List;
