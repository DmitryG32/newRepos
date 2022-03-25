let title = "newProject";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollback = 20;
let fullPrice = 2000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " долларов " +
    "Стоимость разработки сайта " +
    fullPrice +
    " долларов "
);

console.log(screens.toLowerCase().split(", "));

console.log(
  "Процент отката посреднику за работу = " + fullPrice * (rollback / 100)
);
