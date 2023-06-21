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
  document.getElementById("output").innerHTML = combine;
}
function copywithin() {
  const arr = ["nokia", "mi", "vivo"];
  document.getElementById("title").innerHTML = "copywithin() method";
  document.getElementById("output").innerHTML = arr.copyWithin(2, 0);
}
function fill() {
  const arr = ["nokia", "mi", "vivo"];
  document.getElementById("title").innerHTML = "fill() method";
  document.getElementById("output").innerHTML = arr.fill("oppo", 0, 3);
}
function every() {
  const arr = [10, 20, 35, 50];
  document.getElementById("title").innerHTML = "every() method";
  document.getElementById("output").innerHTML = arr.every(fun_1);

  function fun_1(age) {
    return age >= 18;
  }
}
function filter() {
  const arr = [10, 20, 35, 50];
  document.getElementById("title").innerHTML = "fill() method";
  document.getElementById("output").innerHTML = arr.filter(fun_1);

  function fun_1(age) {
    return age >= 18;
  }
}
function find() {
  const arr = [10, 20, 35, 50];
  document.getElementById("title").innerHTML = "find() method";
  document.getElementById("output").innerHTML = arr.find(fun_1);

  function fun_1(age) {
    return age >= 18;
  }
}
function findindex() {
  const arr = [10, 20, 35, 50];
  document.getElementById("title").innerHTML = "findindex() method";
  document.getElementById("output").innerHTML = arr.findIndex(fun_1);

  function fun_1(age) {
    return age >= 18;
  }
}
