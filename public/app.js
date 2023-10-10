
var display = document.getElementById('display');
var currentValue = '';

// ==========Get the Value on Screen==========
function calculation(value)
{
    currentValue += value;
    display.value = currentValue;
}


// =========To Delete Last Element=========
function deleteing()
{
    currentValue = currentValue.slice(0,-1);
    display.value = currentValue
}





// =========To Reset the Screen=========
function reset()
{
    currentValue = '';
    display.value = currentValue;
}



// ============To Calculate the Answer=========
function result()
{
    try{
     currentValue = eval(currentValue)
     display.value = currentValue;
    }catch{
       display.value = "Error"
    }

}

























// function clearDisplay() {
//     currentInput = '';
//     document.getElementById('display').value = '';
// }

// function calculateResult() {
//     try {
//         currentInput = eval(currentInput);
//         document.getElementById('display').value = currentInput;
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }