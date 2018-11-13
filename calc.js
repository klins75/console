

/* __________ARRAYS____________*/
    keyPad    = document.getElementById('keyPad');
    display   = document.getElementById('display');
    decimal   = [];
    decActive = 0;
    keyMemory = [];
    opType    = "";
    entries   = [];
    result    = [];
    prevOp    = [];
    memoryOne = [];
    numDigits = 0;

/* ____ DISPLAYS ______*/
    // let monOne = document.getElementById('monOne');
    // let monThree = document.getElementById('monThree');
    // let monFive = document.getElementById('monFive');
    // let monSeven = document.getElementById('monSeven');
    // let monNine = document.getElementById('monNine');
    

    
   
    // function metrics() {
    //     monOne.innerHTML = keyMemory;
    //     monOneScreenKey.innerHTML = "keyMemory[]";
    //     monTwo.innerHTML = decimal;
    //     monTwoScreenKey.innerHTML = "decimal[]";
    //     monThree.innerHTML = decActive;
    //     monThreeScreenKey.innerHTML = "decActive";
    //     monFour.innerHTML = numberEntry();
    //     monFourScreenKey.innerHTML = "numberEntry()";

    //     // monOneA.innerHTML = decimal;
    //     // monThree.innerHTML = decActive;
    //     // monThreeA.innerHTML = entries;
    //     // monFive.innerHTML = result;
    //     // monSeven.innerHTML = memoryOne;
    //     // monNine.innerHTML = numberEntry();
    // }

/* ______ MATH FUNCTIONS __________ */

function digitCounter(x) {
    x = Number(String(x).replace(/[^0-9]/g, ''));
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

function displayC(a){
    
    // x = a.toFixed(2);
    x = a;    
    display.innerHTML = x;
    onDisplay = Number(display.innerHTML);
    numDigits = digitCounter(onDisplay);
    // if ((numDigits > 9) && (onDisplay > 1)) {
    //     display.innerHTML = a.toFixed(0)
    // } else if ((numDigits > 9) && (onDisplay < 1)){
    //     display.innerHTML = a.toFixed(8)
    // } else {
    //     display.innerHTML = a
    // }
    if (numDigits > 7) {
        let numSize = document.getElementById("display");
        numSize.style.fontSize = "5vh";
        // numSize.style.lineHeight = "3em";
        numSize.style.wordWrap = "break-word";
    } else {
        display.innerHTML = a
    }
}

    
function doMath() {
	
	switch(opType) {
    	case 'add':
        const sum = entries.reduce((total, amount) => total + amount);
        return sum;
        break;
        case 'subtract':
        const difference = entries.reduce((total, amount) => total - amount);
        return difference;
        break;
        case 'multiply':
        const product = entries.reduce((total, amount) => total * amount);
        return product;
        break;
        case 'divide':
        const quotient = entries.reduce((total, amount) => total / amount);
        return quotient;
        break;
        default:
        text = "shitTheBed";
    }
}

let numberEntry = function() {
    let copy = keyMemory.slice(length);
    let nC   = copy.length, total = 0;
    // if (decActive == 0){decimal.push(0)};
    let decCopy = decimal.slice(length);
    let nD   = decCopy.length, iC = -1;
    
        for (i = 0; i < nC; i ++){
            sumArray = (copy.pop() * (Math.pow(10, i)));
            total += sumArray;
        };
        
        for (i = 0; i < nD; i ++) {
            sumArray = (decCopy.shift() * (Math.pow(10, iC)));
            total += sumArray;
            iC --;
        }
    
    return total;
}

function doStuff() {
    if (numberEntry() != 0) {entries.push(numberEntry())};
    if ((entries.length == 0)&&(result != 0)) { entries.push(result)};
    doMath();
    displayC(doMath()); // should this be inside of doMath()?
    result = doMath();
    keyMemory.length = 0;
    decimal.length   = 0;decActive = 0;
    // metrics();
}
function clearStuff() {
    opType = "";
    keyMemory.length = 0;
    decimal.length   = 0;
    decActive = 0;
    // metrics();
}
function doThings() {
    doMath();
    displayC(doMath());
    result = doMath();
    entries.length = 0;
}



keyPad.addEventListener('click', runEvent);
//  -------------- RUN EVENT ------------------
function runEvent(e) {

    let onDisplay = Number(display.innerHTML);
    let m1 = Number(memoryOne);

    // RECORD NUMBER ENTRY --------------------
    switch(e.target.id) {
    	case 'plus':
            opType = 'add';
            doStuff()
        break;
     	
        case 'minus':
            opType = 'subtract';
            doStuff()
        break;
        
        case 'times':
            opType = 'multiply';
            doStuff()
        break;
        
        case 'divide':
            opType = 'divide';
            doStuff()
        break;
        
        case 'equals':
            if (entries.length != 0) {
            entries.push(numberEntry());
            doThings();
            prevOp.length = 0;                                         
            prevOp.push(numberEntry()); prevOp.push(opType); 
            clearStuff();
            } else if ((entries.length == 0)&&(prevOp.length != 0)) {
                entries.push(result); entries.push(prevOp[0]); opType = prevOp[1];
                doThings();
                clearStuff();
            } 
        break;

        case 'memoryStore':
            memoryOne.length = 0;
            memoryOne.push(onDisplay);
            // metrics();
        break;

        case 'memoryRecall':
            if (memoryOne.length != 0) {
            keyMemory.length = 0;
            keyMemory.push(m1);
            displayC(m1);
            // metrics();
            }
        break;

        case 'memoryClear':
            memoryOne.length = 0;
            // metrics();
        break;

        case 'memoryPlus':
            let memSum = Number(memoryOne) + onDisplay;
            memoryOne.length = 0;
            memoryOne.push(memSum);
            // metrics();
        break;

        case 'memoryMinus':
            let memDiff = Number(memoryOne) - onDisplay;
            memoryOne.length = 0;
            memoryOne.push(memDiff);
            // metrics();
        break;
        
        case 'clear':
            keyMemory.length = 0;
            decimal.length   = 0;
            decActive        = 0;
            entries.length   = 0;
            prevOp.length    = 0;
            opType           ='';
            result = 0;
            displayC(0);
            // metrics();
        break;

        case 'point':
            decActive = 1;
            // metrics();
        break;

        case 'clearEntry':
            keyMemory.length = 0;
            displayC(0);
        break;

        case 'invert':
            let inverse = 1 / onDisplay;
            displayC(inverse);
        break;

        case 'back':
            keyMemory.pop();
            displayC(numberEntry());
        break;

        case 'changeSign':
            let negate = -1 * onDisplay;
            displayC(negate);
            if (keyMemory.length != 0) {
                keyMemory.length = 0;
                keyMemory.push(negate)
            } else {
                result = negate;
            }
        break;

        case 'squareRoot':
            let sqrt = Math.sqrt(onDisplay);
            displayC(sqrt);
            if (keyMemory.length != 0) {
                keyMemory.length = 0;
                keyMemory.push(sqrt)
            } else {
                result = sqrt;
            }
        break;
        
        default:
            let targetValue = e.target.value;
            if (decActive == 1) {
                decimal.push(targetValue)
            } else if (decActive == 0) {
                keyMemory.push(targetValue)
            };
            displayC(numberEntry());
            // metrics();
            numberEntry();
        break;
        
    } metrics();
}