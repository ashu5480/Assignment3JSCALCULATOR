function calculate() {
  let input1 = parseInt(document.querySelector("#input1").value);
  let givenOperator = document.querySelector("#input2").value;
  let input2 = parseInt(document.querySelector("#input3").value);
  if (givenOperator == "+") {
    document.getElementById("result").value = input1 + input2;
  } else if (givenOperator == "-") {
    document.getElementById("result").value = input1 - input2;
  } else if (givenOperator == "*") {
    document.getElementById("result").value = input1 * input2;
  } else if (givenOperator == "/") {
    document.getElementById("result").value = input1 / input2;
  } else if (givenOperator == "%") {
    document.getElementById("result").value = input1 % input2;
  } else {
    alert("Symbol is not exist");
  }
}

function clearAll() {
  let value1 = (document.getElementById("input1").value = "");
  let value2 = (document.getElementById("input2").value = "");
  let value3 = (document.getElementById("input3").value = "");
  let value4 = (document.getElementById("result").value = "");
}

