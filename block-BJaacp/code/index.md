1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`//false
- What is the value of obj? // these are 2 different arays and stored in different memory locations and therefore its not the same
- `obj == newObj`//false// these are 2 different objects and stored in different memory locations and therefore its not the same
- `obj === newObj`//false// these are 2 different objects and stored in different memory locations and therefore its not the same
- `user === newObj`//false// these are 2 different objects and stored in different memory locations and therefore its not the same
- `user == newObj`//false// these are 2 different objects and stored in different memory locations and therefore its not the same
- `user == obj`//true //these are 2 different objects and accesing the same memory locations and therefore its the same 
- `arr == arr2`// true //these are 2 different arrays and accesing the same memory locations and therefore its the same 
- `arr === arr2`//true //these are 2 different arrays and accesing the same memory locations and therefore its the same 

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->![memRep]./hello.jpeg

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);//{ name: 'Alex', age: 25 }
console.log(person2);//{ name: 'John', age: 50 }
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];//101
var user = {
  name: 'Sansa',
};//102
user.brothers//102 = brothers;//101
brothers.push('Robb');//101
console.log(user.brothers === brothers); //1. true ,both  the elemts share a same memory location  therfore they are true
console.log(user.brothers.length === brothers.length); //2.true ,both  the elemts share a same memory location & have the same length.
```
