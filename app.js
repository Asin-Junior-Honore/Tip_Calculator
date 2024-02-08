let billInput = document.getElementById("input-one");
let customtip = document.getElementById("custom");
let peopleinput = document.getElementById("ppl");
let buttons = document.querySelectorAll(".btns");
let tipperperson = document.getElementById("tipperperson");
let tiptotal = document.getElementById("tiptoal");
let resetButton = document.getElementById("reset");
let errormessage = document.getElementById("error");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let tipvalue = e.currentTarget.dataset.id;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    if (billInput.value === "") return;
    if (peopleinput.value === "") {
      // peopleinput.value = 1
      errormessage.style.visibility = "visible";
      peopleinput.style.border = "2px solid red";
    } else {
      peopleinput.style.border = "";
      errormessage.style.visibility = "";
    }

    calculateTip(
      parseFloat(billInput.value),
      parseFloat(tipvalue),
      parseFloat(peopleinput.value)
    );
  });
});

customtip.addEventListener("input", (e) => {
  if (billInput.value === "") {
    resetEverything();
    return;
  }
  if (peopleinput.value === "") {
    errormessage.style.visibility = "visible";
    peopleinput.style.border = "2px solid red";

    //peopleinput.value = 1
  } else {
    peopleinput.style.border = "";
    errormessage.style.visibility = "";
  }
  calculateTip(
    parseFloat(billInput.value),
    parseFloat(e.target.value),
    parseInt(peopleinput.value)
  );
});

function calculateTip(billInput, customtip, peopleinput) {
  let tipAmount = (billInput * (customtip / 100)) / peopleinput;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let Totalamount = (tipAmount * peopleinput + billInput) / peopleinput;
  Totalamount = Totalamount.toFixed(2);

  tipperperson.innerHTML = `$${tip}`;
  tiptotal.innerHTML = `$${Totalamount}`;
}
resetButton.addEventListener("click", resetEverything);

function resetEverything() {
  tipperperson.innerHTML = `$0.00`;
  tiptotal.innerHTML = `$0.00`;
  billInput.value = "";
  peopleinput.value = "";
  customtip.value = "";
}
