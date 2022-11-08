function palindromeCheck(){
let input  = document.getElementsByTagName('input')[0].value ;
console.log(input);
let spliString = input.split('');
console.log(spliString);
let reverseStringArray = spliString.reverse();
console.log(reverseStringArray);
let reverseString = reverseStringArray.join('');
console.log(reverseString);

    if(input == reverseString){
        console.log('Entered String follow pallindrome pattern');
        document.getElementsByClassName('output')[0].innerHTML = `Entered String follow pallindrome pattern so ${input} is a Palindrome Sequence`
    }else{
        console.log("Entered String not follow palindrome Sequence so it is not a palindome");
        document.getElementsByClassName('output')[0].innerHTML = `Entered String not follow pallindrome pattern so ${input} is not a Palindrome Sequence`;
    }


}