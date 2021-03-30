// User is presented with a window inviting them to begin code quiz by clicking start button
    // 
// button includes addEventListener awaiting click
// click initiates function quiz
// quiz includes timer utilizing setInterval function
    //timer require var clock and var countdown
    // timer includes setTimeout method to end quiz
// quiz includes questions drawn from an array of strings
// quiz includes answers drawn from an array of strings
// as each question is displayed 4 answers are displayed
// for each question, only one answer is true
// for each false answer, 10 seconds are decremented from remaining time
// for each true answer, time remaining is left alone
// if all questions are answered game is over
// if time remaining reaches 0 game is over
// if game is over user is presented with a prompt to enter initials alongside amount of time remaining
// when initials are input, they are displayed on a list of high scores in descending order

var answers =["variable", "syntax", "function", "array", "method", "concatenate", "pseudocode", "index",];

var questions =["'_____' refers to the rules by which a programming language functions", "It is best to '__________' at the beginning of any project to establish a path"];
