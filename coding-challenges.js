// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."
var collections = ["purple", "blue", "green", "yellow", "pink"]
popItOut = (arr) => {
    newArr =[]
    arr.shift()
// for loop to go through the array and reassign the position 
    for(let i =0; arr.length > 0; i++){
        mix = Math.floor(Math.random() * arr.length)
        newArr.push(arr[mix])
        arr.splice(mix, 1)
    }
    arr = newArr
    if(arr.length > 0){
    return arr
    } else{
    return "Array is empty!!! WOHOOO!"
    }
}
console.log(collections = popItOut(collections));
console.log(collections = popItOut(collections));
console.log(collections = popItOut(collections));
console.log(collections = popItOut(collections));
console.log(collections = popItOut(collections));
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
// create a function called cubeItArrow that takes in an array and puts each value to the 3rd power and puts them together .
cubeItArrow = (lovers) => {
var together = 0
 var happy = lovers.map(el => el **3)
 for(let i=0; i < happy.length; i++){  
    together += happy[i] 
 }
 return together
}
console.log(cubeItArrow(cubeAndSum1));
console.log(cubeItArrow(cubeAndSum2));





// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]
// create a function called smallsBiggie that will take in an array as an argument
// sort the array from least to greatest
// take the first and last index
smallsBiggie = (arr) => {
let newArr = arr.sort((a, b) => a - b)
let min = newArr[0]
let max = newArr[newArr.length-1]
return [min, max]
}
console.log(smallsBiggie(nums1));
console.log(smallsBiggie(nums2));



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.
var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"
// create a function called crazyText that takes in a string as an argument
// for every odd index, use touppercase method
crazyText = (word) => {
var splitIt= "" 
for(let i = 0; i < word.length; i+=1){
    splitIt += i % 2 !== 0 ? word.charAt(i).toUpperCase() : word.charAt(i)
}
   return splitIt
}
console.log(crazyText(testString1));
console.log(crazyText(testString2));



// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
// create a function called noSibs join both arrays into one and only return back the first 
noSibs = (ray1, ray2) => {
let argSum = [...ray1, ...ray2]
const newArray = argSum.filter((a,b) => argSum.indexOf(a) === b)
return newArray
}
console.log(noSibs(arr1, arr2));
