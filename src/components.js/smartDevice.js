// SmartDeviceDetails => SmartBulb;  SmartTemperatureSensor;
// SmartDeviceDetails =>
// SmartDevice:
// {
//     type: string; // 'bulb', 'outlet' or 'temperatureSensor'; 
//     id: string;
//     name: string;
// }

// SmartBulb: {
//     type: 'bulb';
//     id: string;
//     name: string;
//     isTurnedOn: boolean;
//     brightness: number; // <0, 100> 
//     color: string; // in the CSS formats
// }

// SmartOutlet:
// {
//     type: 'outlet';
//     id: string;
//     name: string;
//     isTurnedOn: boolean;
//     powerConsumption: number; // in watts
// }

// SmartTemperatureSensor:
// {
//     type: 'temperatureSensor';
//     id: string;
//     name: string;
//     temperature: number; // in Celsius
// }