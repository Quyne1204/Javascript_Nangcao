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

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            'Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}'
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};


console.log('-------OR---------');
//Use ANY data type, return ANY data type , short-circuiting 
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Jonas' || 23 || null);

// retaurant.numGuests = 23;
const guests1 = retaurant.numGuests ? retaurant.numGuests : 10;
console.log(guests1);

const guests2 = retaurant.numGuests || 10;
console.log(guests2);

console.log('--------AND--------');
console.log(0 && 'Jonas');
console.log(1 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

if(retaurant.orderPizza){
    retaurant.orderPizza('muchrooms', 'spinach')
}
retaurant.orderPizza && retaurant.orderPizza('muchrooms', 'spinach');



