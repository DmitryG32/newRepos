"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    do {
      appData.title = prompt(
        "Как назвается этот проект?",
        " КаЛьКулятор Верстки"
      );
    } while (appData.title.trim() === "" || appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt(
          "Какие типы экранов нужно разработать?",
          "Простые, Сложные, Интерактивные"
        );
      } while (name.trim() === "" || appData.isNumber(name));

      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?", "2000");
      } while (!appData.isNumber(price));
      price = +price;

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какой дополнительынй тип услуги нужен", "script");
      } while (name.trim() === "" || appData.isNumber(name));

      do {
        price = prompt("Сколько это будет стоить?", 1000);
      } while (!appData.isNumber(price));

      appData.services[name + [i]] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    /* for (let screen of appData.screens) {
      appData.screenPrice += +screen.price; //Складывается свойство price с ключом screen из объекта screens
    } */

    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function (price, allPrices) {
    appData.fullPrice = price + allPrices;
  },

  getServicePercentPrices: function (price, priceRollBack) {
    appData.servicePercentPrice = price - price * (priceRollBack / 100);
  },

  getRollbackMessage: function (price) {
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
  },

  getTitle: function () {
    appData.title = appData.title.trim().toLowerCase();
    appData.title = appData.title.replace(
      appData.title[0],
      appData.title[0].toUpperCase()
    );
  },

  logger: function () {
    for (let key in appData) {
      console.log("ключ: " + key + " " + "значение: " + appData[key]);
    }
    console.log(appData.services);
    console.log(appData.screens);
    console.log(appData.title, typeof appData.title);
    console.log(appData.screenPrice, typeof appData.screenPrice);
  },
};

//appData.start();

const elemTitle = document.getElementsByTagName("h1");
console.log(elemTitle[0]);

const elemBtn = document.getElementsByClassName("handler_btn");
console.log(elemBtn[0], elemBtn[1]);

const elemScreenBtn = document.querySelector(".screen-btn");
console.log(elemScreenBtn);

const elemPercent = document.querySelectorAll(".other-items.percent");
const elemNumber = document.querySelectorAll(".other-items.number");
console.log(elemPercent);
console.log(elemNumber);

const inputRollback = document.querySelector(".rollback input[type]");
console.log(inputRollback);

const spanRange = document.querySelector(".rollback .range-value");
console.log(spanRange);

const totalInput = document.getElementsByClassName("total-input");
for (let i = 0; i < totalInput.length; i++) {
  console.log(totalInput[i]);
}

let elemScreen = document.querySelectorAll(".screen");
console.log(elemScreen);
