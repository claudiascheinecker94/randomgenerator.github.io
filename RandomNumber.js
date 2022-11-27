let randomNumbers=[];
var userInput;
var sum = 0;
function hideButton(){
    document.getElementById("button").style.visibility='hidden';
}
function go(){
    userInput = (prompt("Please provide a number between 1 and 10."));
    while (userInput.length == 0){
        alert("No entry. Please enter a number between 1 and 10.");
        userInput = prompt("Please provide a number between 1 and 10.");
    } 
    while (userInput>10 || userInput<1){
        alert("Number out of scope. Please enter a number between 1 and 10.");
        userInput = prompt("Please provide a number between 1 and 10.");
    } 
    for(i=0;i<5;i++){
    randomNumbers[i] = Math.floor((Math.random() * 10)+1);
    if(randomNumbers[i] == userInput){
        sum+=1;
        }
    }
    hideButton();
    document.getElementById("main").innerHTML+="The generated random numbers are "+randomNumbers+". You have chosen number " + userInput + ". This number is present " +sum+ " time(s) within the array.<br />";
}