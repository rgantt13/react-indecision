// arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a + b;
};


const addArrow = (a, b) => a+b;

console.log(addArrow(55, 1, 1001));
// this keyword - no longer bound

const user = {
    name: 'Richard',
    cities: ['Wilmington', 'Poop'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);


        // console.log(this.name);
        // console.log(this.cities);

        // this.cities.forEach((city) =>{
        //     console.log(this.name + 'has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());


// Challenge

const multiplier = {
    numbers: [2,3,4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    } 

}

console.log(multiplier.multiply());