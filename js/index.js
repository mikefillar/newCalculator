let display = document.getElementById('display');
let numbers = [];
let operators = [];
let exp = new RegExp ("([-+*/%])");

function setValue(value){
    display.innerHTML += value;
}
function computeValue(){
    let getData = display.innerHTML;
    let data = getData.split(exp);
    console.log(data);
    data.forEach(item=>{
        if(!isNaN(item)){
            numbers = [...numbers, parseFloat(item)];
        }
        else{
            operators = [...operators, item];
        }
    });
    console.log(numbers);
    console.log(operators);
    let total = numbers[0];
    let counter = 0;

    for(let i = 1; i<numbers.length; i++){
        let oper = operators[counter];
        switch (oper){
            case '+' :
                total += numbers[i];
                break;
            case '-' :
                total -= numbers[i];
                break;
            case '*' :
                total *= numbers[i];
                break;
            case '/' :
                total /= numbers[i];
                total = total.toFixed(2);
                break;
            case '%' :
                total %= numbers[i];
                total = total.toFixed(2);
                break;
            default:
                total = 0;
                break;
        }
    }
    console.log(total);
    display.innerHTML = total;
    numbers=[];
    operators=[];
}
function backSpace(){
    let deleteChar = '';
    deleteChar = display.innerHTML;
    deleteChar = deleteChar.slice(0,-1);
    console.log(deleteChar);
    display.innerHTML = deleteChar;
}
function clearValue(){
    display.innerHTML = '';
}