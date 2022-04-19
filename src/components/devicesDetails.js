const DevicesDetails = ({ device }) => {
    const isOutlet = device?.type === "outlet";
    const isBulb = device?.type === "bulb";
    const isTempSensor = device?.type === "temperatureSensor";

    return (
       <div>
           <div>name: {device?.name}</div>
           <div>type: {device?.type}</div>
            {isOutlet && (
                <>
                    <div>isTurnedOn: {device?.isTurnedOn ? "Włączony" : "Wyłączony"}</div>
                    <div>powerConsumption: {device?.powerConsumption}</div>
                </>
            )}
            {isBulb && (
                <>
                    <div>isTurnedOn: {device?.isTurnedOn ? "Włączony" : "Wyłączony"}</div>
                    <div>brightness: {device?.brightness}</div>
                    <div>color: {device?.color}</div>
                </>
            )}
            {isTempSensor && (
                <><div>temperature: {device?.temperature}</div></>               
            )}
       </div>
    );
};

export default DevicesDetails;  