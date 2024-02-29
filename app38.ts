function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Cities in Pakistan
describe_city("Karachi");
describe_city("Lahore");

// City not in Pakistan
describe_city("London", "United Kingdom");
