const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
const bmi = document.getElementById("bmi");

calculate.addEventListener("click", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  document.getElementById("info").classList.remove("hidden");

  const text = (imc) => {
    let description;

    if (imc < 18.5) {
      description = "Você está abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      description = "Você está no peso ideal";
    } else if (imc >= 25 && imc < 30) {
      description = "Você está com obesidade grau I";
    } else if (imc >= 30 && imc < 40) {
      description = "Você está com obesidade grau II";
    } else {
      description = "Você está com obesidade grau III";
    }

    return description;
  };

  const description = document.getElementById("description");

  const imcCalc = () => {
    const imcValue = (weight / (height * height)).toFixed(2);
    const value = document.getElementById("value");
    description.textContent = text(imcValue);
    value.textContent = imcValue;
  };

  imcCalc();
});

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0";
}

// const form = document.getElementById("form");
// const calculate = document.getElementById("calculate");

// calculate.addEventListener("click", function test(event) {
//   event.preventDefault();

//   const weight = document.getElementById("weight").value;
//   const height = document.getElementById("height").value;

//   const imcValue = (weight.value / (height.value * height.value)).toFixed(2);

//   const value = document.getElementById("value");
//   let description = "";

//   document.getElementById("info").classList.remove("hidden");

//   if (imc < 18.5) {
//     description = "Você está abaixo do peso";
//   } else if (imc >= 18.5 && imc < 25) {
//     description = "Você está no peso ideal";
//   } else if (imc >= 25 && imc < 30) {
//     description = "Você está com obesidade grau I";
//   } else if (imc >= 30 && imc < 40) {
//     description = "Você está com obesidade grau II";
//   } else {
//     description = "Você está com obesidade grau III";
//   }

//   value.textContent = imcValue;
//   document.getElementById("description").textContent = description;
// });
