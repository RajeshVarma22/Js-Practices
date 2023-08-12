//1.To find the number of o's in the given string
console.error("1.To find the number of o's in the given string");
let msg1 = ("Good Morning to everyone");
let msg2 = ("Hello to everyone how are you ok");
let findZeros = (str) => { 
let count = 0;
for(let i =0; i<str.length-1; i++){
    let charAt = str.charAt(i);
    if(charAt == "o" || charAt == "O"){
        count++;
    }
}
return count;
};
console.log(`the number of zeros present in msg1 is : ${findZeros(msg1)}`);
console.log(findZeros(msg1));
console.log(findZeros(msg2));

console.log(`the number of zeros present in mssg2 is : ${findZeros(msg2)}`);

//2. Find the reverse of the given string
console.error("2.Find the reverse of the given string");
let str1 = "Hello World";
let reverseString = (str) => {
    let reverseStr = "";
    for(let i = str.length-1; i>=0; i--){
       reverseStr += str.charAt(i);
    }   
    return reverseStr;
};
console.log(reverseString(str1));

//3. Check if the given string is a palindrome or not
console.error("3.Check if the given string is a palindrome or not");
let str2 = "madam";
let palindrome = (str) => {
    if (reverseString(str) == str){
        return true;
    }
    else {
        return false;
    }
};
console.log(`the str i.e ${str2} is  ${palindrome(str2)}`);

//Another type of revesre can br writted in one line 
console.warn(`if (reverseString(str) == str){
    return true;
}
else {
    return false;
} 
can be written as`)
console.warn("return(reverseString(str) === str);")
let palindrome1 = (str) => {
    return(reverseString(str) === str);
}
console.log(palindrome1(str2))