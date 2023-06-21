function addition()
{
    const a=10;
    const b=20;
    const c=a+b;
    document.getElementById("title").innerHTML="addition operator(+)";
    document.getElementById("desc").innerHTML="The addition operator (+) adds numbers";
    document.getElementById("output").innerHTML="10"+"+"+"20"+"="+c;
}
function subtraction()
{
    const a=20;
    const b=10;
    const c=a-b;
    document.getElementById("title").innerHTML="subtraction operator(+)";
    document.getElementById("desc").innerHTML="The subtraction operator (-) subtracts numbers.";
    document.getElementById("output").innerHTML="20"+"-"+"10"+"="+c;
}
function multiplication()
{
    const a=20;
    const b=10;
    const c=a*b;
    document.getElementById("title").innerHTML="multiplication operator(+)";
    document.getElementById("desc").innerHTML="The multiplication operator (*) multiplies numbers.";
    document.getElementById("output").innerHTML="20"+"*"+"10"+"="+c;
}
function division()
{
    const a=20;
    const b=10;
    const c=a/b;
    document.getElementById("title").innerHTML="divison operator(+)";
    document.getElementById("desc").innerHTML="The division operator (/) divides numbers.";
    document.getElementById("output").innerHTML="20"+"/"+"10"+"="+c;
}
function moduler()
{
    const a=20;
    const b=10;
    const c=a%b;
    document.getElementById("title").innerHTML="moduler operator(+)";
    document.getElementById("desc").innerHTML="The modulus operator (%) returns the division remainder.";
    document.getElementById("output").innerHTML="20"+"%"+"10"+"="+c;
}