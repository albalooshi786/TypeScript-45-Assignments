"use strict";
function createCar(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);
console.log(myCar);
