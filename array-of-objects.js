// find the cheapest phone from an array of phone objects 

let phones = [
    
    {
        name: 'iphone11',
        price: 120000,
        storage: 32
    },
    {
        name: 'oppo',
        price: 23000,
        storage: 16
    },
    {
        name: 'samsung',
        price: 18000,
        storage: 2,
    },
]

function cheapestPhone (phones) {
    let cheapPhone = phones[0];
    for (let phone of phones) {
        if (phone.price < cheapPhone.price) {
            cheapPhone = phone;
        }
    }
    return cheapPhone;
}

let getCheapPhone = cheapestPhone(phones);
console.log(getCheapPhone);


// Calculate the total cost of the products in a shopping cart 

let products = [
    {
        name: 'shirt',
        price: 1200,
        quantity: 3
    },
    {
        name: 'pant',
        price: 3000,
        quantity: 2
    },
    {
        name: 'phone',
        price: 18000,
        quantity: 1
    }
]


function totalCost (products) {
    let cost = 0;
    for(let product of products) {
        let perProductCost = product.price * product.quantity;
        cost = cost + perProductCost;
    }

    return cost;
}

let getTotalCost = totalCost(products);
console.log(getTotalCost);