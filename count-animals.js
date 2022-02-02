// Traveling in a Jungle and counting wild animals 

function jungle (miles) {
    let first10MilesPerAnimals = 10;
    let second10MilesPerAnimals = 50;
    let nextAllMilesPeranimals = 100;
    if (miles <= 10) {
        let totalAnimals = miles * first10MilesPerAnimals;
        return totalAnimals;  
    }
    else if (miles <= 20) {
        let first10MilesTotalAnimals = 10 * first10MilesPerAnimals;
        let restMiles = miles - 10;
        let second10MilesTotalAnimals = restMiles * second10MilesPerAnimals;
        let totalAnimals = first10MilesTotalAnimals + second10MilesTotalAnimals;
        return totalAnimals
    }
    else {
        let first10MilesTotalAnimals = 10 * first10MilesPerAnimals;
        let second10MilesTotalAnimals = 10 * second10MilesPerAnimals;
        let nextRestMiles = miles - 20;
        let nextRestMilesTotalAnimals = nextRestMiles * nextAllMilesPeranimals;
        let totalAnimals = first10MilesTotalAnimals + second10MilesTotalAnimals + nextRestMilesTotalAnimals;
        return totalAnimals;

    }
}

let totalAnimals = jungle(25);
console.log(totalAnimals);