const currencyArray = [
    {
        id: 1,
        title: 'USD'
    },
    {
        id: 2,
        title: 'RUB'
    },
    {
        id: 3,
        title: 'CAD'
    }
]

class chooseCurrencyTitle {
    constructor(id, currency) {
        this.id = id;
        this.currency = currency;
    }
    getTitle() {
      return this.currency.filter(elem => elem.id === this.id)[0].title;
    }
}

const title = new chooseCurrencyTitle(2, currencyArray);
console.log(title.getTitle());