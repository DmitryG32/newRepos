let title = prompt("Как назвается этот проект?", "New project");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "2000");
console.log(screenPrice);
let rollback = 20;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен", "service1");
let servicePrice1 = +prompt("Сколько это будет стоить?", "1000");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен", "service2");
let servicePrice2 = +prompt("Сколько это будет стоить?", "1000");
console.log(servicePrice2);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log("Общая стоимость = ", fullPrice);
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(servicePercentPrice);

switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice < 15000 && fullPrice >= 0:
    console.log("Скидка не предусмотрена");
    break;

  default:
    break;
}
/* console.log(typeof title);
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
); */
