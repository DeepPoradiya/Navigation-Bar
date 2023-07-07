function at() {
  var arr = ["deep", "jay", "yash"];
  document.getElementById("title").innerHTML = "at() method";
  document.getElementById("desc").innerHTML =
    "The at() method returns an indexed element from an array";
  document.getElementById("output").innerHTML = arr.at(2);
}
function concat() {
  const arr1 = ["bmw", "audi", "toyota"];
  const arr2 = ["volvo", "suzuki", "honda"];
  const combine = arr1.concat(arr2);
  document.getElementById("title").innerHTML = "concat() method";
  document.getElementById("desc").innerHTML =
    "The concat() method concatenates (joins) two or more arrays";
  document.getElementById("output").innerHTML = combine;
}
function copywithin() {
  const arr = ["nokia", "mi", "vivo"];
  document.getElementById("title").innerHTML = "copywithin() method";
  document.getElementById("desc").innerHTML =
    "The copyWithin() method copies array elements to another position in the array";
  document.getElementById("output").innerHTML = arr.copyWithin(2, 0);
}
function fill() {
  const arr = ["nokia", "mi", "vivo"];
  document.getElementById("title").innerHTML = "fill() method";
  document.getElementById("desc").innerHTML =
    "The fill() method fills specified elements in an array with a value";
  document.getElementById("output").innerHTML = arr.fill("oppo", 0, 3);
}
function every() {
  const arr = [10, 20, 35, 50];
  document.getElementById("title").innerHTML = "every() method";
  document.getElementById("desc").innerHTML =
    "The every() method executes a function for each array element";
  document.getElementById("output").innerHTML = arr.every(fun_1);
  function fun_1(age) {
    return age >= 18;
  }
}
function filter() {
  const arr = [10, 20, 35, 50];
  document.getElementById("title").innerHTML = "fill() method";
  document.getElementById("desc").innerHTML =
    "The filter() method creates a new array filled with elements that pass a test provided by a function";
  document.getElementById("output").innerHTML = arr.filter(fun_1);
  function fun_1(age) {
    return age >= 18;
  }
}
function find() {
  const arr = [10, 20, 35, 50];
  document.getElementById("title").innerHTML = "find() method";
  document.getElementById("desc").innerHTML =
    "The find() method returns the value of the first element that passes a test";
  document.getElementById("output").innerHTML = arr.find(fun_1);
  function fun_1(age) {
    return age >= 18;
  }
}
function findindex() {
  const arr = [10, 20, 35, 50];
  document.getElementById("title").innerHTML = "findindex() method";
  document.getElementById("desc").innerHTML =
    " The findIndex() method returns the index (position) of the first element that passes a test";
  document.getElementById("output").innerHTML = arr.findIndex(fun_1);
  function fun_1(age) {
    return age >= 18;
  }
}
function includes() {
  let text = "my name is deep poradiya";
  document.getElementById("title").innerHTML = "includes() method";
  document.getElementById("desc").innerHTML =
    "The includes() method is case sensitive";
  document.getElementById("output").innerHTML = text.includes("deep");
}
function isarray() {
  let text = ["hp", "asus", "victus"];
  document.getElementById("title").innerHTML = "isarray() method";
  document.getElementById("desc").innerHTML =
    " The isArray() method returns true if an object is an array, otherwise false";
  document.getElementById("output").innerHTML = Array.isArray(text);
}
function join() {
  const arr = ["BMW", "AUDI", "TOYOTA", "SUZUKI"];
  document.getElementById("title").innerHTML = "join() method";
  document.getElementById("desc").innerHTML =
    "The join() method returns an array as a string";
  document.getElementById("output").innerHTML = arr.join(" and ");
}
function keys() {
  const bikes = ["hero", "honda", "suzuki", "kawasaki"];
  const key = bikes.keys();
  let text = "";
  for (let x of key) {
    text = text + x + "<br>";
  }
  document.getElementById("title").innerHTML = "keys() method";
  document.getElementById("desc").innerHTML =
    "The keys() method returns an Array Iterator object with the keys of an array";
  document.getElementById("output").innerHTML = text;
}
function lastIndexOf() {
  const arr = ["vivo", "oppo", "iphone", "samsung"];
  document.getElementById("title").innerHTML = "lastIndexOf() method";
  document.getElementById("desc").innerHTML =
    "The lastIndexOf() method returns the last index (position) of a specified value";
  document.getElementById("output").innerHTML = arr.lastIndexOf("oppo");
}
function length_1() {
  const arr = ["bus", "car", "bikes", "bicycle"];
  document.getElementById("title").innerHTML = "length method";
  document.getElementById("desc").innerHTML =
    "The length property sets or returns the number of elements in an array";
  document.getElementById("output").innerHTML = arr.length;
}
function push() {
  const arr = ["vivo", "oppo", "iphone", "samsung"];
  arr.push("mi", "redmi");
  document.getElementById("title").innerHTML = "push() method";
  document.getElementById("desc").innerHTML =
    "The push() method adds new items to the end of an array";
  document.getElementById("output").innerHTML = arr;
}
function pop() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.pop();
  document.getElementById("title").innerHTML = "pop() method";
  document.getElementById("desc").innerHTML =
    "The pop() method removes (pops) the last element of an array" +
    "<br>" +
    "The pop() method changes the original array" +
    "<br>" +
    " The pop() method returns the removed element";
  document.getElementById("output").innerHTML = fruits;
}
function shift() {
  const arr = ["bmw", "audi", "toyota", "suzuki"];
  arr.shift();
  document.getElementById("title").innerHTML = "shift() method";
  document.getElementById("desc").innerHTML =
    "The shift() method removes the first item of an array" +
    "<br>" +
    "The shift() method changes the original array" +
    "<br>" +
    "The shift() method returns the shifted element";
  document.getElementById("output").innerHTML = arr;
}
function unshift() {
  const arr = ["banana", "apple", "mango"];
  arr.unshift("watermelon", "kiwi");
  document.getElementById("title").innerHTML = "unshift() method";
  document.getElementById("desc").innerHTML =
    "The unshift() method adds new elements to the beginning of an array" +
    "<br>" +
    " The unshift() method overwrites the original array";
  document.getElementById("output").innerHTML = arr;
}
function reverse() {
  const arr = ["banana", "apple", "mango"];
  document.getElementById("title").innerHTML = "reverse() method";
  document.getElementById("desc").innerHTML =
    "The reverse() method reverses the order of the elements in an array" +
    "<br>" +
    "The reverse() method overwrites the original array";
  document.getElementById("output").innerHTML = arr.reverse();
}
function sort() {
  const arr = ["banana", "apple", "mango"];
  document.getElementById("title").innerHTML = "sort() method";
  document.getElementById("desc").innerHTML =
    "The sort() sorts the elements of an array." +
    "<br>" +
    "The sort() overwrites the original array" +
    "<br>" +
    "The sort() sorts the elements as strings in alphabetical and ascending order";
  document.getElementById("output").innerHTML = arr.sort();
}
function tostring() {
  const arr = ["bmw", "suzuki", "toyota", "audi"];
  document.getElementById("title").innerHTML = "tostring() method";
  document.getElementById("desc").innerHTML =
    "The Array.toString() method returns a string with all array values separated by commas";
  document.getElementById("output").innerHTML = arr.toString();
}
