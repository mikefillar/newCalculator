//display time
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let second = date.getSeconds();
let seconds = document.getElementById('seconds');
function setClock(){
    (hour>12)?hour-=12 : hour;
    // console.log(hour);
    hours.innerHTML=(hour<10)?'0'+hour : hour;
    minutes.innerHTML=(minute<10)?'0'+minute : minute;
    seconds.innerHTML=(second<10)?'0'+second : second;
}
setInterval(setClock,1000);


//calculator
let display = document.getElementById('display');
let numbers = [];
let operators = [];
//regular expression to split the string into array
let exp = new RegExp ("([-+*/%])");

//function get the value of display
function setValue(value){
    display.innerHTML += value;
}
function computeValue(){
    let getData = display.innerHTML;
    //split string using regular expression and store in data array
    let data = getData.split(exp);
    console.log(data);
    
    //loop thru each data
    data.forEach(item=>{
        if(!isNaN(item)){
            //array spread [...array, parameter] to store value in array using forEach
            numbers = [...numbers, parseFloat(item)];
        }
        else{
            //array spread [...array, parameter] to store value in array using forEach
            operators = [...operators, item];
        }
    });
    console.log(numbers);
    console.log(operators);

    //asigning value of numbers[0] to total for computing
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

    //display total value
    display.innerHTML = total;
    //removing the items in array
    numbers=[];
    operators=[];
}
function backSpace(){
    let deleteChar = '';
    deleteChar = display.innerHTML;
    //removing last character of the string
    deleteChar = deleteChar.slice(0,-1);
    console.log(deleteChar);
    display.innerHTML = deleteChar;
}
function clearValue(){
    //clearing the display output
    display.innerHTML = '';
}