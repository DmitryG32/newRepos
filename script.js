const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(
      appData.screenPrice,
      appData.allServicePrices
    );
    appData.servicePercentPrice = appData.getServicePercentPrices(
      appData.fullPrice,
      appData.rollback
    );
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    appData.title = prompt(
      "Как назвается этот проект?",
      " КаЛьКулятор Верстки"
    );
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );

    do {
      appData.screenPrice = prompt(
        "Сколько будет стоить данная работа?",
        "2000"
      );
    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;
    //console.log(typeof screenPrice, screenPrice, "стоит данная работа");

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getAllServicePrices: function () {
    let sum = 0;
    let result = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt(
          "Какой дополнительный тип услуги нужен",
          "сервис1"
        );
      } else if (i === 1) {
        appData.service2 = prompt(
          "Какой дополнительный тип услуги нужен",
          "сервис2"
        );
      }

      do {
        sum = prompt("Сколько это будет стоить?", 1000);
      } while (!appData.isNumber(sum));

      sum = +sum;
      result = result + sum;
      /* console.log(typeof sum, sum);
    console.log(result, "сумма доп услуг числом"); */
    }

    return result;
  },

  getFullPrice: function (price, allPrices) {
    return price + allPrices;
  },

  getServicePercentPrices: function (price, priceRollBack) {
    return price - price * (priceRollBack / 100);
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
  },
};

appData.start();
