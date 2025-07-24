let celciusInput = document.getElementById("Celcius");
let fahrenheitInput = document.getElementById("Fahrenheit");
let kelvinInput = document.getElementById("Kelvin");

function round(value) {
  return Math.round(value * 100) / 100;
}

celciusInput.addEventListener("input", function () {
  let c = parseFloat(celciusInput.value);
  if (!isNaN(c)) {
    fahrenheitInput.value = round((c * 9/5) + 32);
    kelvinInput.value = round(c + 273.15);
  } else {
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
});

fahrenheitInput.addEventListener("input", function () {
  let f = parseFloat(fahrenheitInput.value);
  if (!isNaN(f)) {
    celciusInput.value = round((f - 32) * 5/9);
    kelvinInput.value = round(((f - 32) * 5/9) + 273.15);
  } else {
    celciusInput.value = "";
    kelvinInput.value = "";
  }
});

kelvinInput.addEventListener("input", function () {
  let k = parseFloat(kelvinInput.value);
  if (!isNaN(k)) {
    celciusInput.value = round(k - 273.15);
    fahrenheitInput.value = round(((k - 273.15) * 9/5) + 32);
  } else {
    celciusInput.value = "";
    fahrenheitInput.value = "";
  }
});
