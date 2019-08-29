


// const sweetArray = [
//     {
//         name: "Apple Delights", 
//         event: "Back To School", 
//         count: 8
//     },
//     {
//         name: "Pumpkin Delights", 
//         event: "Fall Festive", 
//         count: 8
//     }, 
//     {
//         name: "Happy Camper", 
//         event: "Summer Time", 
//         count: 4
//     }
// ]

// const createSweetComponent = (item) => {
//     return `
//     <div>
//         <h2>${item.name}</h2>
//         <p>${item.event}</p>
//         <p>${item.count}</p>
//     </div>`
// }

// const sweetContainer = document.querySelector("#container")

// for (let i = 0; i < sweetArray.length; i ++ ){
//     sweetContainer.innerHTML += createSweetComponent(sweetArray[i]);
// }

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];



function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
    
};

for ( let i = 0; i < foods.length; i++) {
    grill(foods[i]);
}

console.log("cookedFood", cookedFood);