// Are n=both numbers even?

function areBothEven (n1,n2) {
    return !(n1%2) && !(n2%2);
}


areBothEven(10,12);


// Practice Activity 1: Write a Function Declaration
let area = 0;
let width = 10;
let height = 30;

function computeArea (width, height) {
    
    area = width * height ;
    return width, height, area;
}

// computeArea (width,height);

// console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units`);





// Practice Activity 2: Write a Function Expression

let planetHasWater = function (planet) {

    let planetUpperCase = planet.toUpperCase();

    console.log(planetUpperCase);
    if (planetUpperCase === "EARTH" || planetUpperCase === "MARS") {
        return true;
    } else {
        return false;
    };  
}



// console.log(planetHasWater("mars"));
// console.log(planetHasWater("earth"));
// console.log(planetHasWater('UFO'));


function testarug () {
    let newArray = [] ;
    console.log (arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        newArray.push(arguments[i]);
    }
    console.log(newArray);
}


testarug('Mustafa', 'Alani','Muneer');


function isValidEmail (email) {
    return email.includes("@") && email.includes(".") ? true : false;
}



let emailVerification =  isValidEmail("mmkd_usa@yahoo.com");

console.log(emailVerification);


function isValidWebSite (webSite) {
    return webSite.includes("www") && webSite.includes(".com") || webSite.includes(".org") ? true : false;
}


let validWebSite = isValidWebSite ("https://www.google.net");

console.log(validWebSite);

//----------------------------------------------------------------------------

function firstLastName (firstName, lastName) {
    return " First Name : " + firstName + "\n Last Name : " + lastName;
}

let fullName = firstLastName ("Mustafa", "Alani");

console.log(fullName.toUpperCase());