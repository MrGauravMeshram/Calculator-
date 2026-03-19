let input = document.querySelector("#nums");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerHTML;

    if (value === "=") {
      string = eval(string);
    } else {
      string += value;
    }

    if(value==="AC"){
        string =""
    }

    input.value = string;
  });
});
