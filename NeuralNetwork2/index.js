const brain = require('brain.js');

const restaurants = {
    "ACK": "Senin",
    "JFC": "Selasa",
    "KFC": "Rabu",
    "MCD": "Kamis",
    "Pan Tantri": "Jumat",
    "Be Genyol": "Sabtu",
    "Canny": "Minggu",
}

const trainingData = [];

for (let restaurantName in restaurants) {
    const day = restaurants[restaurantName];
    trainingData.push({
        input: {
            [day]:1
        },

        ouput: {
            [restaurantName]:1
        }
    })
}

const net = new brain.NeuralNetwork({
    hiddenLayers: [3]
})

const stat = net.train(trainingData);

function getRestaurantReal(day) {
    const hasil = net.run({
        [day]:1
    });
    let tertinggi = 0;
    let restaurantTertinggi = '';

    for (restaurantName in hasil){

        if(hasil[restaurantName] > tertinggi){
            tertinggi = hasil[restaurantName];
        }
    }
    return restaurantTertinggi;
}

console.log(getRestaurantReal("Kamis"));