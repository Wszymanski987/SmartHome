import { DEVICES } from "./mock/devices";

const Lists = ({ setClickedDevice }) => {
  return ( 
    <div>

    <li>
      {DEVICES.map((item, index) => (
        <ul onClick={() => setClickedDevice(item)} key={index}>{item.name}</ul>
      ))}
    </li>
    </div>     
    
  );
};

export default Lists;
