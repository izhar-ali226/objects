// Suppose You have an array of object
// Calculate total price of each item and all items

var itemsArray = [
    { names: 'juice', price: 50, quantity: 3 },
    { names: 'cookie', price: 30, quantity: 9 },
    { names: 'shirt', price: 880, quantity: 1 },
    { names: 'pen', price: 100, quantity: 2 }];


let arrayAllItem = [];
for (let i = 0; i < itemsArray.length; i++) {
    document.write('price of ' + itemsArray[i]['names'] + ' is ' + itemsArray[i]['price'] * itemsArray[i]['quantity'] + '<br>')
    arrayAllItem.push(itemsArray[i]['price'] * itemsArray[i]['quantity']);
}


let sum = 0;
for (let j = 0; j < itemsArray.length; j++) {
    sum += arrayAllItem[j]
}
document.write(`Total price is ${sum} <br>`);

//    ------End --------


/*Create an object with properties name, email, password, age, 
gender, city, country.
Check if age and country properties exist in object or not.
Also check firstName and lastName properties in object*/



function search() {
    let array = [];
    let searchInput = document.getElementById('searchInput').value;

    let object = {
        name: 'izhar',
        email: 'abc@gmail.com',
        password: 'saylani',
        age: '21',
        gender: 'mail',
        city: 'karachi',
        country: 'pakistan'
    }

    for (var keys in object) {
        array.push(keys);
    }
    console.log(array)
    console.log(object[keys])
    if (object[keys].includes(searchInput) == false || searchInput == '') {
        document.getElementById('h3').innerHTML = 'sorry Not found';
        return false
    }
    else {
        document.getElementById('h3').innerHTML = 'found';
        return false
    }

}

//    -----End-----

/*Create a constructor function with some properties. Now 
create multiple records using the constructor.*/

function Mobiles(name, model, year, price) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.price = price;

}

let mob1 = new Mobiles('Samsung', 'A35', '2017', '35000')
let mob2 = new Mobiles('iphone', 'x', '2018', '50000')

document.write(JSON.stringify(mob1) + '<br>')
document.write(JSON.stringify(mob2))
console.log(mob1)

// ----End----

/*Suppose you want to check population of your area, their
educations and professions.

Create a constructor function which holds following 
properties:

Name, gender, address, education, profession, 
Enter all records one by one. 

Hint: 
1 use select box for education and profession, 
2 use radio box for gender
Bonus : use can use localStorage to save records  */

let totalPopulation = [];
function submitted() {
    let name = document.getElementById('name').value
    let address = document.getElementById('address').value;
    let education = document.getElementById('education').value;
    let profession = document.getElementById('profession').value;

    function Population(conName, conAddress, conEduction, conProfession) {
        this.conName = conName;
        this.conAddress = conAddress;
        this.conEduction = conEduction;
        this.conProfession = conProfession;
    }

    let popul1 = new Population(name, address, education, profession);

    totalPopulation.push(popul1);
    localStorage.setItem('population', JSON.stringify(totalPopulation));

    document.write(JSON.stringify(popul1))


}


