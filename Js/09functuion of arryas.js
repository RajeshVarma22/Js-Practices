/* 
shift() -> remove the first element from an array.
unshift() -> add the first element to an array.
push() -> add the last element to an array.
pop() -> remove the last element from an array.
sort() -> to sort the array in ascending order.
reverse() -> to reverse the array elements.
splice() -> to remove or replce from the middle.
join() -> to join the array elements to string.
split() -> to split a string to an array.
slice() -> to create a new copy of an array.
forEach() -> to loop the array elements.
find() -> find the exact element with condition from array.
filter () -> to filter the array elements.
*/
// Functions of arrays
//-------------shift() -> remove the first element from an array.-------------
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
console.log(numbers)
numbers.shift()
console.log("this is the shift() for the numbers") 
console.log(numbers) 
//--------------unshift() -> add the first element to an array.------------- 
numbers.unshift("1")
console.log("this is the unshift() for the numbers")
console.log(numbers) 
//--------------push() -> add the last element to an array.-----------------
numbers.push("11")
console.log("this is the push() for the numbers add the last element to an array.")
console.log(numbers) 
//------------pop() -> remove the last element from an array.------------------
numbers.pop()
console.log("this is the pop() for the numbers remove the last element from an array.")
console.log(numbers) 
//------------sort() -> to sort the array in ascending order.-----------------
let numbers1= ["2", '1', '3', '6', '9']
console.log(numbers1)
numbers1.sort()
console.log("this is the sort() for the numbers1 to sort the array in ascending order.")
console.log(numbers1) 
//--------------reverse() -> to reverse the array elements.-----------------------
console.log("--------------reverse() -> to reverse the array elements.-----------------------numbers1.reverse()")
numbers1.reverse()
console.log("this is the reverse() for the numbers1 to reverse the array elements.")
console.log(numbers1)
//------------------reverse() with sorting--------------
console.log("------------------reverse() with sorting--------------numbers2.sort().reverse()")
let numbers2 = ['2','1','4','5','7','3','6','9','8','0']
console.log(numbers2)
numbers2.reverse()
console.log ("here it is reversing without sorting the elements")
console.log(numbers2)
numbers2.sort().reverse()
console.log("here it is sorting the elements before reversing")
console.log(numbers2)

//--------------------------splice() -> to remove or replce from the middle.----------------------------------//

console.log("--------------------------splice() -> to remove or replce from the middle.----------------------------------")
numbers2.sort()
console.log(numbers2)
numbers2.splice(8)
console.log("this is the splice() for the numbers2 to remove or replce from the middle.i.e from 8 to end as i mentioned.")
console.log(numbers2)
//another way to remove the element from the middle
console.log("another way to remove the element from the middle     numbers2.splice(2,1)")
numbers2.splice(2,1)// this means that it will remove the element from the 2nd index and it will remove 1 element
console.log(numbers2)
console.log("this is the splice() for the numbers2 to remove or replce from the middle.i.e from 2 to 3 as i mentioned.")
numbers2.splice(1,3)
console.log(numbers2)
//now we can replace the element from the middle
console.log("now we can replace the element from the middle   numbers2.splice(1,1,'2')")
numbers2.splice(1,1,"2")// this means that it will remove the element from the 2nd index and it will remove 1 element and adds the element 2
console.log(numbers2)
//--------------------------join() -> to join the array elements to string.----------------------------------
console.log("--------------------------join() -> to join the array elements to string.----------------------------------")
numbers3 = ['2', '1', '4', '5', '7', '3', '6', '9', '8', '0']
console.log(numbers3) //this is the array of numbers
let num3String = numbers3.join("-")
console.log("this is the join() for the numbers3 to join the array elements to string.")
console.log(num3String)
//--------------------------split() -> to split a string to an array.----------------------------------
console.log("---------------split() -> to split a string to an array.--------------------------------")
let num3String1 = num3String.split("-")
console.log(num3String1)
console.log("this is the split() for the techString to split a string to an array with the seperator '-'.")
//filter () -> to filter the array elements.
console.log('-----------filter () -> to filter the array elements.------------')
let employee = ['afffa','daffa','java','kava']
//let employeeage =


























