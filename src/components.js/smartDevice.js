// SmartDeviceDetails => SmartBulb, SmartOutlet or SmartTemperatureSensor;

// SmartDevice:
// {
//     type: string; // 'bulb', 'outlet' or 'temperatureSensor'; 
//     id: string;
//     name: string;
// }

let SmartBulb  = {
    type: "bulb",
    id: "bulb",
    name: "Your Smart Bulb",
    isTurnedOn: true,
    brightness: 10 // <0, 100> 
    //color:  // in the CSS formats
}

let SmartOutlet = {
    type: "outlet",
    id: "outlet",
    name: "Your Smart Outlet",
    isTurnedOn: true,
    powerConsumption: 100 // in watts
}

let SmartTemperatureSensor = {
    type: 'temperatureSensor',
    id: "sensor",
    name: "Your Smart Temperature Sensor",
    temperature: 20 // in Celsius
}

let tab = [SmartBulb, SmartOutlet, SmartTemperatureSensor]

const SmartDevice = () => {
    return (
        <div>
            tab;
        </div>
    );
}

export default SmartDevice;