// _________________ CONSOLE ENTITIES _____________________
    let monOne            = document.querySelector('.monitor1 .screenValue');
    let monOneScreenKey   = document.querySelector('.monitor1 .screenKeyUpper');
    let monOneL1          = document.querySelector('.monitor1 .legend1');
    let monOneL1k         = document.querySelector('.monitor1 .legend1a');
    let monOneL2          = document.querySelector('.monitor1 .legend2');
    let monOneL2k         = document.querySelector('.monitor1 .legend2a');

    let monTwo            = document.querySelector('.monitor2 .screenValue');
    let monTwoScreenKey   = document.querySelector('.monitor2 .screenKeyUpper');
    let monTwoL1          = document.querySelector('.monitor2 .legend1');
    let monTwoL1k         = document.querySelector('.monitor2 .legend1a');
    let monTwoL2          = document.querySelector('.monitor2 .legend2');
    let monTwoL2k         = document.querySelector('.monitor2 .legend2a');

    let monThree          = document.querySelector('.monitor3 .screenValue');
    let monThreeScreenKey = document.querySelector('.monitor3 .screenKeyUpper');
    let monThreeL1          = document.querySelector('.monitor3 .legend1');
    let monThreeL1k         = document.querySelector('.monitor3 .legend1a');
    let monThreeL2          = document.querySelector('.monitor3 .legend2');
    let monThreeL2k         = document.querySelector('.monitor3 .legend2a');

    let monFour           = document.querySelector('.monitor4 .screenValue');
    let monFourScreenKey  = document.querySelector('.monitor4 .screenKeyUpper');
    let monFourL1          = document.querySelector('.monitor4 .legend1');
    let monFourL1k         = document.querySelector('.monitor4 .legend1a');
    let monFourL2          = document.querySelector('.monitor4 .legend2');
    let monFourL2k         = document.querySelector('.monitor4 .legend2a');

    let monFive           = document.querySelector('.monitor5 .screenValue');
    let monFiveScreenKey  = document.querySelector('.monitor5 .screenKeyUpper');
    let monFiveL1          = document.querySelector('.monitor5 .legend1');
    let monFiveL1k         = document.querySelector('.monitor5 .legend1a');
    let monFiveL2          = document.querySelector('.monitor5 .legend2');
    let monFiveL2k         = document.querySelector('.monitor5 .legend2a');

    let monSix            = document.querySelector('.monitor6 .screenValue');
    let monSixScreenKey   = document.querySelector('.monitor6 .screenKeyUpper');
    let monSixL1          = document.querySelector('.monitor6 .legend1');
    let monSixL1k         = document.querySelector('.monitor6 .legend1a');
    let monSixL2          = document.querySelector('.monitor6 .legend2');
    let monSixL2k         = document.querySelector('.monitor6 .legend2a');

    let monSeven          = document.querySelector('.monitor7 .screenValue');
    let monSevenScreenKey = document.querySelector('.monitor7 .screenKeyUpper');
    let monSevenL1          = document.querySelector('.monitor7 .legend1');
    let monSevenL1k         = document.querySelector('.monitor7 .legend1a');
    let monSevenL2          = document.querySelector('.monitor7 .legend2');
    let monSevenL2k         = document.querySelector('.monitor7 .legend2a');

    let monEight          = document.querySelector('.monitor8 .screenValue');
    let monEightScreenKey = document.querySelector('.monitor8 .screenKeyUpper');
    let monEightL1          = document.querySelector('.monitor8 .legend1');
    let monEightL1k         = document.querySelector('.monitor8 .legend1a');
    let monEightL2          = document.querySelector('.monitor8 .legend2');
    let monEightL2k         = document.querySelector('.monitor8 .legend2a');

    let monNine           = document.querySelector('.monitor9 .screenValue');
    let monNineScreenKey  = document.querySelector('.monitor9 .screenKeyUpper');
    let monNineL1          = document.querySelector('.monitor9 .legend1');
    let monNineL1k         = document.querySelector('.monitor9 .legend1a');
    let monNineL2          = document.querySelector('.monitor9 .legend2');
    let monNineL2k         = document.querySelector('.monitor9 .legend2a');

    let monTen            = document.querySelector('.monitor10 .screenValue');
    let monTenScreenKey   = document.querySelector('.monitor10 .screenKeyUpper');
    let monTenL1          = document.querySelector('.monitor10 .legend1');
    let monTenL1k         = document.querySelector('.monitor10 .legend1a');
    let monTenL2          = document.querySelector('.monitor10 .legend2');
    let monTenL2k         = document.querySelector('.monitor10 .legend2a');
// _________________________________________________________

function startThing() {


function highLight(a) {
    let color = window.getComputedStyle(a, null).getPropertyValue("background-color");
    
    switch (color) {

        case 'rgb(255, 255, 0)':
        a.style.backgroundColor = 'white';
        break;

        case 'rgb(255, 255, 255)':
        a.style.backgroundColor = 'yellow';
        break;
        
    }
}








// let monOne = document.querySelector('.monitor1 .screenValue');
// let monTwo = document.querySelector('.monitor2 .screenValue');
// let monThree = document.querySelector('.monitor3 .screenValue');
// let monFour = document.querySelector('.monitor4 .screenValue');

let console1 = document.querySelector('.console1');
console1.addEventListener('click', runEvent);




function runEvent(e) {
    
    if (e.target.className == 'monitorLabel') {
        
        let mod = e.target.value;
        let screen = document.querySelector(`.module${mod} .screenValue`);
        highLight(screen);

    }
}

} // function startThing() 's ending bracket. Leave alone.

function metrics() {
    monOne.innerHTML            = keyMemory;
    monOneScreenKey.innerHTML   = "keyMemory[]";
    monOneL1.innerHTML          = "type: ";
    monOneL1k.innerHTML         = typeof(keyMemory);
    monOneL2.innerHTML          = "length: ";
    monOneL2k.innerHTML         = keyMemory.length;

    monTwo.innerHTML            = decimal;
    monTwoScreenKey.innerHTML   = "decimal[]";
    monTwoL1.innerHTML          = "type: ";
    monTwoL1k.innerHTML         = typeof(decimal);
    monTwoL2.innerHTML          = "length: ";
    monTwoL2k.innerHTML         = decimal.length;

    monThree.innerHTML          = decActive;
    monThreeScreenKey.innerHTML = "decActive";
    monThreeL1.innerHTML             = "type: ";
    monThreeL1k.innerHTML            = typeof(decActive);
    monThreeL2.innerHTML             = "length: ";
    monThreeL2k.innerHTML            = decimal.length;

    monFour.innerHTML           = numberEntry();
    monFourScreenKey.innerHTML  = "numberEntry().name";
    monFourL1.innerHTML         = "type: ";
    monFourL1k.innerHTML        = typeof(numberEntry);
    monFourL2.innerHTML         = "length: ";
    monFourL2k.innerHTML        = decimal.length;

    monFive.innerHTML           = opType;
    monFiveScreenKey.innerHTML  = "opType";
    monFiveL1.innerHTML         = "type: ";
    monFiveL1k.innerHTML        = typeof(opType);
    monFiveL2.innerHTML         = "length: ";
    monFiveL2k.innerHTML        = numberEntry().length;

    monSix.innerHTML            = entries;
    monSixScreenKey.innerHTML   = "entries";
    monSixL1.innerHTML          = "type: ";
    monSixL1k.innerHTML         = typeof(entries);
    monSixL2.innerHTML          = "length: ";
    monSixL2k.innerHTML         = entries.length;

    monSeven.innerHTML          = result;
    monSevenScreenKey.innerHTML = "result";
    monSevenL1.innerHTML        = "type: ";
    monSevenL1k.innerHTML       = typeof(result);
    monSevenL2.innerHTML        = "length: ";
    monSevenL2k.innerHTML       = result.length;

    monEight.innerHTML          = prevOp;
    monEightScreenKey.innerHTML = "prevOp";
    monEightL1.innerHTML        = "type: ";
    monEightL1k.innerHTML       = typeof(prevOp);
    monEightL2.innerHTML        = "length: ";
    monEightL2k.innerHTML       = prevOp.length;

    monNine.innerHTML           = numDigits;
    monNineScreenKey.innerHTML  = "# of digits";
    monNineL1.innerHTML         = "type: ";
    monNineL1k.innerHTML        = typeof(numDigits);
    monNineL2.innerHTML         = "length: ";
    monNineL2k.innerHTML        = numDigits.length;

    monTen.innerHTML            = memoryOne;
    monTenScreenKey.innerHTML   = "memoryOne";
    monTenL1.innerHTML          = "type: ";
    monTenL1k.innerHTML         = typeof(memoryOne);
    monTenL2.innerHTML          = "length: ";
    monTenL2k.innerHTML         = decimal.length;


}