const items = [ 
    {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, 
    {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}
]

const getPrices = () => {
    let prices = [];
    items.forEach(item =>{
        prices.push(item.price);
    })
    return prices;
}

const getCheapestProduct = () => {
    const prices = getPrices();
    const lowestPrice = Math.min(...prices);
    items.forEach(item =>{
        if(item.price == lowestPrice) {
            console.log(`The cheapest product is ${JSON.stringify(item)}`);
            return item;
        }
    })
}

const getExpensiveProduct = () => {
    const prices = getPrices();
    const highestPrice = Math.max(...prices);
    items.forEach(item =>{
        if(item.price == highestPrice) {
            console.log(`The most expensive product is ${JSON.stringify(item)}`);
            return item;
        }
    })
}

const getFullPrice = () => {
    let sum = 0;
    items.forEach(item =>{
        sum += item.price;
    })
    console.log(`The full price of all products combined is ${sum}`);
    return sum;
}

const getFullPriceGreaterThanTen = () =>{
    let sum = 0;
    items.forEach(item =>{
        if(item.price >= 10) {sum += item.price;}
    })
    console.log(`The full price of all products combined without these under 10 dollars is ${sum}`);
    return sum;
}

getCheapestProduct();
getExpensiveProduct(); 
getFullPrice();
getFullPriceGreaterThanTen();