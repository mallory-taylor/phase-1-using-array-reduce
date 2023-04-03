const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let total = 0;
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, total);
totalBatteries;