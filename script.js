"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  screenSum: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    console.log("start", this);

    this.addTitle();
    this.getRange();
    buttonPlus.addEventListener("click", this.addScreenBlock);
    startBtn.addEventListener("click", this.checkSatrt, this.start);
    resetBtn.addEventListener("click", this.resetFunc, this.start);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  resetFunc: function () {
    const select = document.querySelector(".screen select");
    const input = document.querySelector(".screen input");
    const CMS = document.getElementById("cms-open");

    screens = document.querySelectorAll(".screen");

    for (let i = 1; i < screens.length; i++) {
      screens[i].parentNode.removeChild(screens[i]);
    }

    appData.screens = []; //обнулил массив
    screens = [];

    select.disabled = false;
    input.disabled = false;

    select.selectedIndex = select.selectedIndex[0];
    input.value = "";

    total.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
    totalCount.value = 0;

    startBtn.style.display = "block";
    resetBtn.style.display = "none";

    inputRange.value = 0;
    inputRangeValue.innerHTML = 0 + "%";

    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");

      if (check.checked) {
        check.checked = !check.checked;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      if (check.checked) {
        check.checked = !check.checked;
      }
    });

    if (CMS.checked) {
      CMS.checked = !CMS.checked;
    }

    screens = document.querySelectorAll(".screen");

    appData.screens = [];
    appData.screenPrice = 0;
    appData.screenSum = 0;
    appData.adaptiveue = true;
    appData.rollback = 0;
    appData.servicePricesPercent = 0;
    appData.servicePricesNumber = 0;
    appData.fullPrice = 0;
    appData.servicePercentPrice = 0;
    appData.servicesPercent = {};
    appData.servicesNumber = {};

    console.log("Апдата посде рестарта", appData);

    appData.init();
  },

  checkSatrt: function () {
    const select = document.querySelectorAll(".screen select");
    const input = document.querySelectorAll(".screen input");
    let newArr = [];
    let numCheck;

    select.forEach((item) => newArr.push(item));

    input.forEach((item) => newArr.push(item));

    console.log("массив из первой формы", newArr);

    newArr.forEach((item) => {
      if (item.value === "") {
        numCheck = item.value;
      }
    });

    if (numCheck === "") {
      alert("Не выбраны тип или количество экранов");
      console.log("Прошло в инит");
      appData.init();
    } else {
      console.log("Прошло в старт");

      const select = document.querySelector("select");
      const input = document.querySelector("input");

      select.disabled = true;
      input.disabled = true;

      startBtn.style.display = "none";
      resetBtn.style.display = "block";

      appData.start();
    }
  },

  getRange: function () {
    const logger = () => {
      inputRangeValue.innerHTML = inputRange.value + "%";
      this.rollback = inputRange.value;
      console.log("getRange ", this);
    };

    inputRange.addEventListener("input", logger);
  },

  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.showResult();
    console.log("START ", this);
  },

  showResult: function () {
    console.log(this);
    total.value = this.screenPrice;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.screenSum;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
      console.log("Ya TUT ", appData.screens[index]);
    });
  },

  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    this.screenPrice = this.screens.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);

    //4 задание
    this.screenSum = this.screens.reduce(function (sum, item) {
      return sum + item.count;
    }, 0);

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);
  },
};

appData.init();
