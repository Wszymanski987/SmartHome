import react, {useState} from 'react';
import Button from './components.js/button';
import SmartDevice from './components.js/smartDevice';

const List = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <li>
            <ul>
                <Button onClick={() => setClicked(clicked = !clicked)} />
                 
            </ul>
            <ul>SmartOutlet</ul>
            <ul>SmartTemperatureSensor</ul>
        </li>
    );
};

export default List;