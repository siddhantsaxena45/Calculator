console.log('javascript');
let input = document.querySelector("input");
let digits = document.querySelectorAll(".digit");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");

Array.from(digits).forEach((el) => {
    el.addEventListener("click", () => {
        input.value += el.innerText;
    });
});

Array.from(operators).forEach((el) => {
    el.addEventListener("click", () => {
        input.value += el.innerText;
    });
});

equal.addEventListener("click", () => {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = "Error";
    }
});

clear.addEventListener("click", () => {
    input.value = "";
});
