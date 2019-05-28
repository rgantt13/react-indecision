
//Var
var nameVar = 'Richard';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

//Let
let nameLet = 'let';
nameLet = 'superlet'
console.log('nameLet', nameLet);

//Const
const nameConst = 'Pooboy'
//nameConst = 'SoopaPooBooy';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = "Hal";
    return petName;
}

const petName = getPetName();
console.log(petName);


//Block Scoping
const fullName = 'Richard Gantt';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
