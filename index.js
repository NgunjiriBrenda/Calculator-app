 //want to add functionality to calculator buttons when clicked
 const display = document.getElementById('display');

//function to calculate the result
//this function will show what is entered in the display
//passing in character when calling the function

 function appendtoDisplay(input){
    display.value += input;

}
//function to clear display.whatever is entered in the display is cleared
function clearDisplay(){
    display.value = " ";
}
//function to calculate result
//eval function takes eg.1+2 and gives the result
function calculate(){
    try{
         display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
}
