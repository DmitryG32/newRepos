let title = prompt("Как назвается этот проект?", " КаЛьКулятор Верстки");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "2000");
let rollback = 20;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен", "service1");
let servicePrice1 = +prompt("Сколько это будет стоить?", "1000");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен", "service2");
let servicePrice2 = +prompt("Сколько это будет стоить?", "1000");
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  switch (true) {
    case price >= 30000:
      return "Даем скидку в 10%";
      break;
    case price >= 15000 && price < 30000:
      return "Даем скидку в 5%";
      break;
    case price < 15000 && price >= 0:
      return "Скидка не предусмотрена";
      break;

    default:
      return "что-то пошло не так";
      break;
  }
};

const getAllServicePrices = function (price_1, price_2) {
  return price_1 + price_2;
};

function getFullPrice(screen_price, all_service_prices) {
  return screen_price + all_service_prices;
}

const getTitle = function () {
  title = title.trim().toLowerCase();
  title = title.replace(title[0], title[0].toUpperCase());
  console.log(title);
};

const getServicePercentPrices = function (full_price, roll_back) {
  return full_price - full_price * (roll_back / 100);
};

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
getTitle();

console.log(getRollbackMessage(fullPrice));
console.log("Cумму всех дополнительных услуг = ", allServicePrices);
console.log(
  "Cтоимость верстки и стоимости дополнительных услуг (screenPrice + allServicePrices) = ",
  fullPrice
);
console.log(title);
console.log("Итоговая стоимость минус сумма отката", servicePercentPrice);

console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " долларов " +
    "Стоимость разработки сайта " +
    fullPrice +
    " долларов "
);
