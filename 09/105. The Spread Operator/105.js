const retaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Ialian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {     
        return [this.starterMenu[starterIndex],
        this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex=0, time='20:00', address }) {
        console.log(
            'Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}'
        );
    },
    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    }
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//Toan tu spread
const NewArr = [1, 2, ...arr];
console.log(NewArr);
console.log(...NewArr);
const newMenu = [...retaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...retaurant.mainMenu];
//join 2 arrays
const menu = [...retaurant.starterMenu, ...retaurant.mainMenu];
console.log(menu);

//Iterables : arrays, strings, maps, sets.  Not objects 
const str = 'Jonas';
const letters = [...str,'','S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);
//Real-world example
const ingredients = [
    // prompt('Let\'s make pasta! Ingredients 1?'), prompt('Ingredients 2?'), prompt('Ingredients 3?')
];
console.log(ingredients);
retaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
retaurant.orderPasta(...ingredients);

// Objects 
const newretaurant = {foundedIn: 1998, ...retaurant, founder: 'Guiseppe'}
console.log(newretaurant);
const retaurantCopy = {...retaurant};
retaurantCopy.name = 'Ristorante Roma';
console.log(retaurantCopy.name);
console.log(retaurant.name);