// Update your Wordle function from W4 so that rather than printing out which letters are correct or in the wrong place, 
// it returns an integer array of length 5, where:
// - a 0 in cell i means the ith letter is not in the word,
// - a 1 in cell i means the ith letter is in the word, but in a different place,
// - a 2 in cell i means the ith letter is in the word and in the right place.
// For example, if the secret word is CRAZE, and you guess TRACK, the result should be [0,2,2,1,0].

// BEWARE: Wordle treats duplicate letters in a specific way.
// If you have two duplicate letters in the guess word, and only one in the secret word, only one of the letters will be yellow (or green). 
// For example, if the secret word is CRAZE, and you guess TREES, it should return [0,2,1,0,0].

// Once you have constructed this function and thoroughly tested it, you can use it to create the Wordle game using the DOM.
// The secret word can be a const variable in the page's javascript, and the user types their guess into a text box
// (or you can use JS events to type directly into the wordle image).
// Then their guess is rendered into the HTML using the traditional Wordle colouring.
// You should also add messages for when the user guesses the word, or runs out of guesses.

function wordle(target, guess){

    // Ensure target word and guess word only contain approved letters
    var target_az_only = !/[^a-zA-Z]/.test(target)
    var guess_az_only = !/[^a-zA-Z]/.test(guess)

    if (target_az_only == false) {console.log("Target word may only contain characters a-z please")}
    if (guess_az_only == false) {console.log("Guess word may only contain characters a-z please")}

    if (target.length != 5) {console.log("Target word must be 5 characters")}
    if (guess.length != 5) {console.log("Guess word must be 5 characters")}

    // If target word and guess word only contains letters a-z and both are of length 5, do this
    if (target_az_only == true && guess_az_only == true && target.length == 5 && guess.length == 5) {
    
        // Array for target and guess word
        let targetarr = []
        let guessarr = []

        // Array for both words together so givenwords[0] is first letter of target and givenwords[5] is first letter of guess
        let givenwords = []

        // Pushes letters of target word to array
        for (i = 0; i < target.length; i++) {
            givenwords.push(target.charAt(i))
            targetarr.push(target.charAt(i))}

        // Pushes letters of guess word to array
        for (i = 0; i < guess.length; i++) {
            givenwords.push(guess.charAt(i))
            guessarr.push(guess.charAt(i))}

        // Array for integer array where
        // 0 = letter not in word
        // 1 = letter in word, but in a different place
        // 2 = letter in the word and in the right place.
        var truth = []

        // Declaring "switches" - if these variables are not changed to true in the ifs below, something needs to happen
        var a = false;
        var b = false;
        var c = false;
        var d = false;
        var e = false;

        if (givenwords[0] == givenwords[5]) {a = true && truth.push("2")}                           // if a is in the correct position
        else if (a == false && targetarr.includes(guess.charAt(0)) == true) {truth.push("1")}       // if a in target but not in correct position
        else if ((a == false && targetarr.includes(guess.charAt(0)) == false)) {truth.push("0")}    // if a is not in target

        if (givenwords[1] == givenwords[6]) {b = true && truth.push("2")}                           // if b is in the correct position
        else if (b == false && targetarr.includes(guess.charAt(1)) == true) {                       // if b in target but not in correct position
                var firstoccurence = guessarr.indexOf(guess.charAt(1))                              // > find index of first occurrence in guess word
                if (truth[firstoccurence] == 1) {truth.push("0")}                                   // > if the same index in the integer array is 1, push '0' onto other occurrances
                else {truth.push("1")}}                                                             // > else push 1
        else if ((c == false && targetarr.includes(guess.charAt(2)) == false)) {truth.push("0")}    // if b is not in target

        if (givenwords[2] == givenwords[7]) {c = true && truth.push("2")}                           
        else if (c == false && targetarr.includes(guess.charAt(2)) == true) {                       
                var firstoccurence = guessarr.indexOf(guess.charAt(2))                              
                if (truth[firstoccurence] == 1) {truth.push("0")}                                   
                else {truth.push("1")}}                                                             
        else if ((c == false && targetarr.includes(guess.charAt(2)) == false)) {truth.push("0")}    

        if (givenwords[3] == givenwords[8]) {d = true && truth.push("2")}                           
        else if (d == false && targetarr.includes(guess.charAt(3)) == true) {                       
                var firstoccurence = guessarr.indexOf(guess.charAt(3))                              
                if (truth[firstoccurence] == 1) {truth.push("0")}                                   
                else {truth.push("1")}}                                                             
        else if ((d == false && targetarr.includes(guess.charAt(3)) == false)) {truth.push("0")}    

        if (givenwords[4] == givenwords[9]) {e = true && truth.push("2")}                           
        else if (e == false && targetarr.includes(guess.charAt(4)) == true) {                       
                var firstoccurence = guessarr.indexOf(guess.charAt(4))                              
                if (truth[firstoccurence] == 1) {truth.push("0")}                                   
                else {truth.push("1")}}                                                             
        else if ((e == false && targetarr.includes(guess.charAt(4)) == false)) {truth.push("0")}    

        // Print the integer array - remember 
        // 0 = letter not in word
        // 1 = letter in word, but in a different place
        // 2 = letter in the word and in the right place.
        console.log(truth)
    }
}

// Enter your target word and guess word below - wordle(target word, guess word)
wordle('craze', 'track') 

