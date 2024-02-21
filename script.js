// const button = document.querySelectorAll("button");
// const result = document.getElementById("result");


// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener("click", ()=> {
//         console.log(button[i].textContent);
//     });
//     const buttonValue = button[i].textContent;
//     if(buttonValue === "C"){
//         clearDisplay();
//     }


// };

// const clearDisplay = () => {
//     console.log("clear");
// }
const button = document.querySelectorAll("button");
const result = document.getElementById("result");

for(let i =0; i<button.length; i++){
button[i].addEventListener("click", () =>
{
    const buttonValue = button[i].textContent;
    if(buttonValue === "C") {
      clearResult();
    } else if(buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
    });
}

function clearResult() {
  result.value="";
}

function calculateResult() {
  result.value =eval(result.value);
}

function appendValue(buttonValue) {
  result.value = result.value + buttonValue;
}



