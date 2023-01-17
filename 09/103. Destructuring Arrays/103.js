const retaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Ialian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],
                this.mainMenu[mainIndex]];
    }
};
console.log(retaurant);
const arr = [1,2,3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [main, ,secondary]= retaurant.categories;
console.log(main,secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main,secondary);

[main,secondary] = [secondary,main];
console.log(main,secondary);
//Nhận 2 giá trị trả về từ 1 
const [starter , mainCourse] = retaurant.order(2,0);
console.log(starter,mainCourse);

//Nested Destructuring
const nested = [2,4,[5,6]];
// const [i, , j]= nested;
// console.log(i,j);
const [i, , [j,k]]= nested;
console.log(i,j,k);

//Default Values
const [p, q, r] = [8, 9];
console.log(p, q, r);
const [e=1,f=1] = [8];
console.log(e,f);