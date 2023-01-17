const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
};

const retaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Ialian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],
        this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            'Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}'
        );
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};
if (retaurant.openingHours && retaurant.openingHours.mon) console.log(retaurant.openingHours.mon.open);

// console.log(retaurant.openingHours.mon.open);   
//WITH  optional chaining
console.log(retaurant.openingHours.mon?.open);
console.log(retaurant.openingHours?.mon?.open);

//Ex
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = retaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`)
}

//Methods
console.log(retaurant.order?.(0, 1) ?? 'Methods does not exist');
console.log(retaurant.orderRisotto?.(0, 1) ?? 'Methods does not exist');

//arrays

const users = [{name: 'Jonas',email: 'hello@gmail.com',}];
// const users = [];
console.log(users[0]?.name ?? 'User array emtpy');
if (users.length > 0) console.log(users[0].name);
else console.log('user array emtpy');

