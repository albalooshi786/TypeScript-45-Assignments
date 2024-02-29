interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string; // Index signature for arbitrary properties
}

function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
    let car: Car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

let myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);
console.log(myCar);
