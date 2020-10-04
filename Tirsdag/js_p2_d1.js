//1a
var names = ["Mark","Yes","No","Alfredo"];
var namesFiltered = names.filter(names => names.includes("a"));
//console.log(namesFiltered);

//1b
var reversedNames = names.map(name => {
    return name.split("").reverse().join("");
});

//console.log(reversedNames);

//2a
const myList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function myCallback(param) {
    let x = param * 10;
    if (x < 1000) {
        return true;
    } else {
        return false;
    }
}
function myFilter(myList, callback) {
    const list = [];
    for(idx in myList) {
        if(callback(myList[idx])) {
            list.push(myList[idx]);
        }
    }
    return list;
}
//console.log(myFilter(myList, myCallback));

//test med filter
function callbackNames(names) {
    if (names.includes("a")) {
        return true;
    } else {
        return false;
    }
}
function myFilter(myList, callback) {
    const list = [];
    for(idx in myList) {
        if(callback(myList[idx])) {
            list.push(myList[idx]);
        }
    }
    return list;
}
//console.log(myFilter(names, callbackNames));

//2b

//3a  
  const array1 = [1, 3, 5, 10, 11];
  
  let result = array1.map(function(element, index, array) {

    if (index + 1 > array.length - 1) {
        return element;
    } else {
        return element + array[index + 1];

    }
});
//console.log(result);


//3b
let namers = ["Hassan","Peter","Jan","Boline"];

let mapping = namers.map((element) => {
    return '<a href=””>' + element + '</a>';

}).join('');

let newMapping = '<nav>' + mapping + '</nav>';
console.log(newMapping);


//3c
var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"},
 {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

 function getFullinfo(item) {
    var fullname = [item.name,item.phone].join(" ");
    return fullname;
  }
  
let mapPersons = persons.map(getFullinfo);

//console.log(mapPersons.toString());


  
//console.log(mapPersons.toString());

//4a
  var all= ["Hassan", "Peter", "Carla", "Boline"];
  var all4 = [all.join("#")];
  //console.log(all4.toString());

//4b

const numbers = [2, 3, 67, 33];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
//console.log(numbers.reduce(reducer));

//4c
const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];

    function average(accumulator, member, index, members ){
        if(index === members.length-1){
            accumulator += member.age;
            return accumulator / members.length;
        }
        return accumulator + member.age;
    }
//console.log(members.reduce(average,0));

//5a - fordi this referer til owner objectet og ikke selve værdien som den indeholder, derfor er den undefined.
//Hvis vi skulle have værdien ud og ikke give en reference med, så vi bare kalde car.getBrand();
//dvs this referer til objektet som bliver kaldt og da getBrand functionen er i objectet, så henter den værdien ud.
var car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };

  car.getBrand();

//5b Samme princip som 5a, vi sætter getBrand functionen ind i en variable hvor den nu kun vil referencen til objektet.
// og ikke selve værdien.