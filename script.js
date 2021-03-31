// User is presented with a container inviting them to begin code quiz by clicking start button
    // onload event is added to html to initiate function quiz
    // header will display high score justified to left and timer justified right
    // header will display start button justified center
        // for the sake of visual clarity 
// start button includes addEventListener awaiting click
// click initiates function quiz
    // start initiates var countdown which utiizes set interval method
        // countdown begins with 20 seconds
    // quiz includes timer utilizing setInterval method
    // begin with 20,000 ms
        // time decrements from start button
        // each false answer decrements 4000 ms
        // if timer reaches 0, game over
            // SetTimeout method ends quiz
   
    // quiz includes true/false questions drawn from an array of strings
    // questions will be drawn from an array
        // if the answer of the question is true and the user response is true, the boolean return value will be true
        // if the answer of the question is false and the user response is false, the boolean return value will be true
        // if the answer of the question is false and the user response is true, the boolean return value will be false
        // if the answer of the question is true and the user response is false, the boolean return value will be false
    // when quiz ends, time remaining is player score
        // eventListener waits for end of quiz and displays window asking if user would like to restart

        var questions=["A variable can only hold a numerical value", "An array is an object that can only contain one singular value", "pseudocoding is the only way to begin a project"];
        
    function quizinit () {
        document.getElementById("button").addEventListener("click"), {
            console.log ("quiz");
        }
    }