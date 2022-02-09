const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");

tempInputs.forEach(function (input) {
  input.addEventListener("input", function (e) {
    let tempValue = parseInt(e.target.value);
    let tempName = e.target.name;
    if (!tempValue) {
      celsiusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;
      return;
    }
    // console.log(tempValue);
    if (tempName === "celsius") {
      let fahrenheitValue = tempValue * 1.8 + 32;
      let kelvinValue = tempValue + 273.15;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (tempName === "fahrenheit") {
      let celsiusValue = (tempValue - 32) / 1.8;
      let kelvinValue = ((tempValue - 32) * 5) / 9 + 273.15;
      celsiusInput.value = celsiusValue.toFixed(2);
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (tempName === "kelvin") {
      let celsiusValue = tempValue - 273.15;
      let fahrenheitValue = ((tempValue - 273.15) * 9) / 5 + 32;
      celsiusInput.value = celsiusValue.toFixed(2);
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
  });
});
