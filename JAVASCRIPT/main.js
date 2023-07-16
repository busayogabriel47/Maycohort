
// // // let module = 20 % 6

// // // console.log(module)


// // // let x = 10 + 20
// // // console.log(x)

// // // let m = 20
// // //  m+= 10
// // // console.log(m)

// // // // +=
// // // // *=
// // // // /=
// // // // %=

// // // //primitive datatype
// // // String
// // // Number
// // // Boolean
// // // undefined
// // // null


// // // const firstName = "Busayo";
// // // const lastName = "Omotuka"


// // const greetings = firstName + " " + lastName + " is a programming coach"

// // const student = "Jonathan"  

// // const register = `One of the may cohort students is ${student}`

// // console.log(register);



// // function greetings(firstName, lastName){
// //     console.log(`Good afternoon ${firstName} ${lastName}, Hope your day is going on well`)
// // }

// // greetings("Tosin", "Omolola")
// // greetings("Jonathan", "oze")


// const User = function(name, username) {
//     this.name = name;
//     this.username = username;
 
//     this.getName = function(){
//        return this.name
//     }
//  }
 
 
//  const user1 = new User("John", "Johnsmith")
//  console.log(user1.getName());


//The challenge
/*1. Get the string or number from the user. take a temporary variable that
holds the numbers.
2. Reverse the given number.
3. Campare the orignal number with reversed number, if tempoary
number are same with orignal console.log number is palindrom else number is
not palindrome  
*/

//Pseudo code solution
//1. create an empty array.
const letters = [];

//2. Create a variable that takes a palindrom words as a value
const palindrome = 'mango';


//3. create an empty variable for a reserve word
let rword = "";

//4. Put letter of word into stack with for loop
for(let i = 0; i < palindrome.length; i++){
   letters.push(palindrome[i])
}

//Pop off the stack in reverse order
for(let i = 0; i < palindrome.length; i++){
   rword += letters.pop();
}

if(rword === palindrome){
   console.log(`${palindrome} is a palindrome`)
}else{
   console.log(`${palindrome} is not a palindrome`)
}













