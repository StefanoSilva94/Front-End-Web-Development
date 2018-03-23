//Basic exercises done in test.html

function fizzBuzz(number, word1, word2) {
    for (i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(word1 + word2);
        }
        else if (i % 3 == 0) {
            console.log(word1);
        }
        else if (i % 5 == 0) {
            console.log(word2);
        }
        else {

            console.log("" + i);
        }
    }
}

fizzBuzz(47, "cheese", "grater");


//Iteration 4 - accepts a number then, outputting what it did at each iteration,
//and how many iterations it took to get to the end.

function divNum(input) {
    var counter = 0;
    while (input != 1) {
        if (input % 3 == 0) {
            input = input / 3;
            counter += 1;
        }
        else if ((input + 1) % 3 == 0) {
            input = (input + 1) / 3;
            counter += 1;
        }
        else {
            input = (input - 1) / 3;
            counter += 1;
        }

    }
    console.log(counter);
    return counter;
}

divNum(8);
divNum(9);
divNum(100);

//Strings 4
//aaar
function tripleCount(string) {
    var chCounter = 0;
    var i = 0;
    while (chCounter <= 3 && i < string.length) {
        if (string.charAt(i) == string.charAt(i + 1) && string.charAt(i + 1) == string.charAt(i + 2)) {
            chCounter += 1;
            i += 1;
        }
        else {
            i += 1;
        }
    }

    console.log(chCounter);
    return chCounter;
}

tripleCount("abcXXXabc");
tripleCount("xxxabyyyycd");


//Dom1
var j = 1;
function addPTag() {
    var para = document.createElement("p");
    para.id = j;
    var node = document.createTextNode("This is a new paragraph");
    para.appendChild(node);
    document.body.appendChild(para);
    j += 1;
}

function changePara() {
    paraId = getParaId();
    paraContent = paraInput();
    document.getElementById(paraId).innerHTML = paraContent;
}

function getParaId() {
    var paraId = prompt("Which paragraph number do you want to edit?");
    return paraId;
}

function paraInput(){
     var paraContent = prompt("Please enter the content of your paragragh:");
     return paraContent;
}

function removePara(){
    var paraId = getParaId();
    document.getElementById(paraId).remove();
}

//JSON 1
// function printJson(){
//     console.log(JSON.stringify(peopleArray, null, 2));

// }
document.write("ubedybdB");