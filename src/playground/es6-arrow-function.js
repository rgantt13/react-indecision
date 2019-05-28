//ES5
function square(x) {
    return x*x;
};

console.log(square(9));

//ES6


// const squareArrow = (x) => {
//     return x*x;
// }

const squareArrow = (x) => x*x;

console.log(squareArrow(9));




//Challenge
const getFirstNameOG = (fullName) => { 
    return fullName.split(' ')[0];
}
console.log(getFirstNameOG("ES6 Function"));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName("Arrow Function"));