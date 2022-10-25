"use strict";
// #1
const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];

console.log(Array.from(new Set(arr)));

// #2

const obj1 = {id: 1, name: 'userName'};
const obj2 = {id: 1, password: 'qwerty'};

console.log(Object.assign(obj1, obj2));

// #3

const add = (x, y) => x + y;

console.log(add(1, 2));

// #4

const sleep = (time) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("result");
    }, time);
  
  });
}

sleep(5000).then(() => {
  console.log('Выполнилось через 5 секунд');
});