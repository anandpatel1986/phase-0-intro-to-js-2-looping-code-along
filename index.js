// Code your solutions in this file
function writeCards(names,eventName){
    const newArray = [];
    for(let i = 0; i < names.length; i++){
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    }

    return newArray;
}

function countDown(count){
   
    while(count>=0){
        console.log(count);
        count--;
    }

}

const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";

//const returnedArray = writeCards(names, eventName);
writeCards(names, eventName);
countDown(10);