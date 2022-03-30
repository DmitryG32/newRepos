let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 20;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как назвается этот проект?", " КаЛьКулятор Верстки");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );

  /* screenPrice = prompt("Сколько будет стоить данная работа?", "2000"); */

  /* while (!isNumber(screenPrice)) {
    screenPrice = prompt("Сколько будет стоить данная работа?", "2000");
  } */

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?", "2000");
  } while (!isNumber(screenPrice));
  screenPrice = +screenPrice;
  //console.log(typeof screenPrice, screenPrice, "стоит данная работа");

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;
  let result = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен", "сервис1");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен", "сервис2");
    }

    do {
      sum = prompt("Сколько это будет стоить?", 1000);
    } while (!isNumber(sum));

    sum = +sum;
    result = result + sum;
    /* console.log(typeof sum, sum);
    console.log(result, "сумма доп услуг числом"); */
  }
  return result;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice(screen_price, all_service_prices) {
  return screen_price + all_service_prices;
}

const getServicePercentPrices = function (full_price, roll_back) {
  return full_price - full_price * (roll_back / 100);
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

const getTitle = function () {
  title = title.trim().toLowerCase();
  title = title.replace(title[0], title[0].toUpperCase());
  //console.log(title);
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

getTitle();
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(
  "Cумму всех дополнительных услуг = ",
  allServicePrices,
  typeof allServicePrices
);
console.log(
  "Cтоимость верстки и стоимости дополнительных услуг (screenPrice + allServicePrices) = ",
  fullPrice
);
console.log("Итоговая стоимость минус сумма отката", servicePercentPrice);

console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " долларов " +
    "Стоимость разработки сайта " +
    fullPrice +
    " долларов "
);
