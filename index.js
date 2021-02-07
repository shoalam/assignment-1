//Solution no 1

let ricePrice = 50;

if(ricePrice <= 50){
    console.log("I will eat rice.");
}else{
    console.log("I will eat porota.");
}


//Solution no 2

let pocketMoney = 4000;

if (pocketMoney >= 5000) {
    console.log("I will visit Sajek.");
} 
else if (pocketMoney >= 3000) {
    console.log("I will go to Cox's Bazar.");
} 
else {
    console.log("I will visit the National Zoo.");
}


//***************Solution no 3 ******************//

let coffeePrice = 50;
let isCoffeeAvailable = true;

if (isCoffeeAvailable && coffeePrice <= 50 ) {
        console.log("Coffee Available and I have 50. So I will drink Coffee.");    
}
else{
    console.log("Coffee is not available. So I will drink tea.");
}

//Alternative solution to problem no 3 ----- Code Refactoring

if (isCoffeeAvailable) {
    if (coffeePrice <= 50) {
        console.log("Coffee Available. So I will drink Coffee.");
    }
    else{
        console.log("Coffee Available and I have more than 50. So I will drink tea.");
    }
}
else{
    console.log("Coffee is not available. So I will drink tea.");
}


//***************Solution no 4 ******************//

let amountOfMoney = 3000;
let isCloseFriend = true;
let hasGoodHistory = false;

if (isCloseFriend || hasGoodHistory) {
    if (amountOfMoney <= 2000) {
        console.log("I will lend you");
    }
    else {
        console.log("I don't have the right amount of money what you are seeking.");
    }
}
else {
    console.log("You are neither my close friend nor Credible. So I will not lend you.");
}

//Alternative Solution to problem no 4

if (isCloseFriend || hasGoodHistory && amountOfMoney <= 2000 ) {
        console.log("I will lend you");
}
else {
    console.log("You are neither my close friend nor Credible. So I will not lend you.");
}



//***************Solution no 5 ******************//

let marks = 82;

if (marks > 0 && marks < 60) {
    console.log("Sorry!!! You have failed in the exam.");
}
else if (marks >= 60 && marks <= 69 ) {
    console.log("Congratulations!!! You have got 'D' grade.");
}
else if (marks >= 70 && marks <= 79 ) {
    console.log("Congratulations!!! You have got 'C' grade.");
} 
else if (marks >= 80 && marks <= 85) {
    console.log("Congratulations!!! You have got 'B' grade.");
}  
else if (marks >= 86 && marks <= 89) {
    console.log("Congratulations!!! You have got 'A-' grade.");
} 
else if (marks >= 90 && marks <= 96) {
    console.log("Congratulations!!! You have got 'A' grade.");
} 
else if (marks >= 97 && marks <= 100 ) {
    console.log("Congratulations!!! You have got 'A+' grade.");
} 
else {
    console.log("Invalid Marks");
}