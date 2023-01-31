//Creating variables to store the Randomly generated numbers
const NUM1 = Math.ceil(Math.random() * 10);
const NUM2 = Math.ceil(Math.random() * 10);

//Creating variables for the elements to trigger
const questionE1 = document.getElementById("question");
const inputE1 = document.getElementById("input");
const formE1 = document.getElementById("form");

//Setting up the Randomly generated Question by triggering it's inner text
questionE1.innerText = `What is ${NUM1} Multiply by ${NUM2}?`;

//Creating variable to store the score
const scoreE1 = document.getElementById("score");

//Creating variable to Store the Parsed-in value from the LocalStorage
let score = JSON.parse(localStorage.getItem("score"));     //Coverting String to Numbers


if (!score){                                               //If the LocalStorage is Empty, then set 0 the initial value for the score
    score = 0;
}

scoreE1.innerText = `Score: ${score}`;                     //Updating the inner text of Score element

const CORRECT_ANS = NUM1 * NUM2;                           //Real Math of multiplying two numbers

/*
*    When a form submission is occured by pressing the submit button =>
*    The targeted form element triggers a .addEventListner() function instantly
*    If the user inputted answer is equal to the exact correct answer, then the score will be incremented
*    Otherwise, If the user inputted answer is not correct, then the score will be decremented
*    And the actual score must be tracked always and kept stored inside the local storage.
*/

formE1.addEventListener("submit", ()=>{
    const USER_ANS = +inputE1.value;                       //"inputE1.value" returns the value as String, But, "+inputE1.value" returns the value as Numbers
    
    if(USER_ANS == CORRECT_ANS){                           //Checks if the user inputted answer is equal to the exact answer or not
        score++;
        updateLocalStorage();                              //If equal, then the score will be auto-incremented and the updateLocalStorage() function will be called 
    }else{
        score--;
        updateLocalStorage();                              //If not equal, score value will be decremented automatically and the updateLocalStorage() function will be called 
    }
});

//Creating updateLocalStorage() function to Store the updated scores to the localStorage
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));  //Converting Numbers to String: LocalStorage takes inputs as Strings Only
};
