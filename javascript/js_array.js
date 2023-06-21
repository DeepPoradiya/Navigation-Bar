function array_fun() {
  const array = ["deep", "jay", "yash"];
  document.getElementById("title").innerHTML = "ARRAY";
  document.getElementById("output").innerHTML = array;
}
function array2_fun() {
  const cars = [];
  cars[0] = "HP";
  cars[1] = "ASUS";
  cars[2] = "LENEVO";
  document.getElementById("title").innerHTML = "ARRAY INDEX";
  document.getElementById("output").innerHTML = cars;
}
function array3_fun() {
  const arr = new Array("volvo", "bmw", "audi");
  document.getElementById("title").innerHTML = "ARRAY CREATE WITH new KEYWORD";
  document.getElementById("output").innerHTML = arr;
}
function array4_fun() {
  const cars = ["volvo", "bmw", "audi"];
  cars[1] = "TOYOTA";
  document.getElementById("title").innerHTML = "Accessing Array Elements";
  document.getElementById("output").innerHTML = cars;
}
function array5_fun() {
  const arr = ["mouse", "keyboard", "cpu"];
  document.getElementById("title").innerHTML =
    "Converting an Array to a String";
  document.getElementById("output").innerHTML = arr.toString();
}
function array6_fun() {
  const obj = { firstname: "deep", lastname: "poradiya", age: 56 };
  document.getElementById("title").innerHTML = "Array Object";
  document.getElementById("output").innerHTML = obj.firstname;
}
function array7_fun() {
    const fruits=["banana","apple","guava"];
    let size = fruits.length;
    document.getElementById("title").innerHTML = "Array Length";
    document.getElementById("output").innerHTML = size;
}
function array8_fun() {
    const fruits=["banana","apple","guava"];
    fruits[1]="mango"
    document.getElementById("title").innerHTML = "Changing Array Element";
    document.getElementById("output").innerHTML = fruits;
}
function array9_fun() {
    const fruits=["banana","apple","guava"];
    document.getElementById("title").innerHTML = " Accessing the Last Array Element";
    document.getElementById("output").innerHTML = fruits[fruits.length-1];
}
function array10_fun()
{
  document.getElementById("btn").style.display="inline-block";
  let cars=["toyota","honda","bmw"];
  document.getElementById("output").innerHTML = cars;
  document.getElementById("title").innerHTML = "Push Element";
}
function array10_1_fun()
{
  const cars=["toyota","honda","bmw"];
  cars.push("audi");
  document.getElementById("output").innerHTML = cars;
}
function array11_fun()
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("title").innerHTML = "typeof Operator";
  document.getElementById("output").innerHTML = typeof fruits;
}
function array12_fun()
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("title").innerHTML = " isArray() Method";
  document.getElementById("output").innerHTML = Array.isArray(fruits);
}


