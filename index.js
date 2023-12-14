const ans = () => {
  var c = document.getElementById("eo").value;

  var a = parseFloat(document.getElementById("fn").value);
  var b = parseFloat(document.getElementById("sn").value);

  if (c == "+") {
    document.getElementById("show").innerHTML = `Result : ${a + b}`;
  } else if (c == "-") {
    document.getElementById("show").innerHTML = `Result : ${a - b}`;
  } else if (c == "*") {
    document.getElementById("show").innerHTML = `Result : ${a * b}`;
  } else if (c == "/") {
    document.getElementById("show").innerHTML = `Result : ${a / b}`;
  } else {
    document.getElementById("show").innerHTML = `Please Enter Valid Operation`;
  }
};
