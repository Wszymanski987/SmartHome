export const DEVICES = [
    {
        SmartBulb  = {
            type: "bulb",
            id: 1,
            name: "Your Smart Bulb",
            isTurnedOn: true,
            brightness: 10 // <0, 100> 
            //color:  // in the CSS formats
        },
        SmartOutlet = {
            type: "outlet",
            id: 2,
            name: "Your Smart Outlet",
            isTurnedOn: true,
            powerConsumption: 100,// in watts
        },
         {
            type: 'temperatureSensor',
            id: 3,
            name: "Your Smart Temperature Sensor",
            temperature: 20 // in Celsius
        },
];