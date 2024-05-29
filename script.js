//Step 1
const alphabet="abcdefghighijklmnopqrstuvwxyz"

//Step 2
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

//Question 1
//Great observation! The reason the result is 1 instead of 2 is that in programming, arrays and strings are zero-indexed. 
//This means that the first element has an index of 0, the second has an index of 1, and so on.So, in the alphabet 
//string `"abcdefghijklmnopqrstuvwxyz"`, the letter 'a' has an index of 0, 'b' has an index of 1, 
//'c' has an index of 2, and so forth.That's why the index of 'b' is 1.

//Step 3
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz"
// Access the first letter of Caesar's friend and convert it to lowercase
const firstLetter = friend[0].toLowerCase()
// Find the index of the first letter in the alphabet
const indexOfFirstLetter = alphabet.indexOf(firstLetter);
// Shift the index by the shift value
const shiftedIndex = (indexOfFirstLetter + shiftValue) % alphabet.length;
// Find the encrypted letter using the shifted index
const encryptedLetter = alphabet[shiftedIndex];
// Store the encrypted letter in a variable
const encryptedLetterVariable = encryptedLetter;
console.log(encryptedLetterVariable); // This will print 'e'

//Question 2
//To wrap around and continue from the beginning of the alphabet when shifting letters beyond "z", you can use the modulo operator (%). The modulo operator helps in cycling back to 
//the beginning of the alphabet when the index exceeds the length of the alphabet. 
//This way, you can ensure that the shifting process remains within the 
//bounds of the alphabet.

//Step 4.
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetLength = alphabet.length;
console.log(alphabetLength); // This will print 26

//Step 6
const encryptedMessage = "EUXWXV";
const teaser = encryptedMessage.slice(0, 3);
console.log(teaser); // This will print "EUX"