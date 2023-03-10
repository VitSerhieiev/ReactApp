import React from "react";
import axios from "axios";

const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyCodes: ['UAH', 'USD', 'EUR', 'PLN' , 'JPY'],
            rates: {},
            amountFrom: '',
            amountTo: '',
            currencyFrom: 'UAH',
            currencyTo: 'USD'
        };
        
}
componentDidMount() {
    axios.get(baseUrl)
        .then(response => {
            const data = response.data;
            const rates = {};
            data.forEach((item) => {
                if (this.state.currencyCodes.includes(item.cc)) {
                    rates[item.cc] = item.rate;
                }
                });
            this.setState({
                rates
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

handleAmountFromChange = (e) => {
    const amountFrom = e.target.value;
    this.setState({ amountFrom }, () => {
        this.convertAmount();
        this.convertsAmount();
      });
};

handleAmountToChange = (e) => {
    const amountTo = e.target.value;
    const { amountFrom } = this.state;
    const { currencyTo, currencyFrom} = this.state;
    const convertedFromUahAmount = amountTo * this.state.rates[this.state.currencyTo];
    const convertedToUahAmount = amountTo / this.state.rates[this.state.currencyFrom];
    const convertedAmount = amountTo * (this.state.rates[this.state.currencyTo] / this.state.rates[this.state.currencyFrom]);
    if (currencyFrom === 'UAH') {
        this.setState({ amountTo, amountFrom: convertedFromUahAmount.toFixed(1) });
    } else if (currencyTo === 'UAH') {
        this.setState({ amountTo, amountFrom: convertedToUahAmount.toFixed(1) });
    } else {
        this.setState({ amountTo, amountFrom: convertedAmount.toFixed(1) });
    }
};

handleCurrencyFromChange = (e) => {
    const currencyFrom = e.target.value;
    this.setState({ currencyFrom }, this.convertAmount);
    this.setState({ currencyFrom }, this.convertsAmount);
};

handleCurrencyToChange = (e) => {
    const currencyTo = e.target.value;
    this.setState({ currencyTo }, this.convertAmount);
    this.setState({ currencyTo }, this.convertsAmount);
};

convertsAmount(){
    const { amountFrom, amountTo, currencyFrom, currencyTo, rates } = this.state;
    let convertedsAmount;
    if ( currencyTo === 'UAH') {
        convertedsAmount = amountFrom * rates[currencyFrom];
        this.setState({ amountTo: convertedsAmount.toFixed(1) });
    } else if ( currencyFrom === 'UAH') {
        convertedsAmount = amountFrom / rates[currencyTo];
        this.setState({ amountTo: convertedsAmount.toFixed(1) });
    }
}

convertAmount() {
    const { amountFrom, amountTo, currencyFrom, currencyTo, rates } = this.state;
    let convertedAmount;

    if (amountFrom) {
        convertedAmount = amountFrom * (rates[currencyFrom] / rates[currencyTo]);
        this.setState({ amountTo: convertedAmount.toFixed(1) });
    } else if (amountTo) {
        convertedAmount = amountTo * (rates[currencyTo] / rates[currencyFrom]);
        this.setState({ amountFrom: convertedAmount.toFixed(1) });
    }
}
render() {
    const { currencyCodes, amountFrom, amountTo, currencyFrom, currencyTo } = this.state;
    return (
        <div className="form-wrapper">
            <div className="give-input-wrapp">
                <label htmlFor="give" className="info-label">Віддаю</label>
                <input type="number" id="give" className="give-input" value={amountFrom} onChange={this.handleAmountFromChange}></input>
                <select className="curr-select" value={currencyFrom} onChange={this.handleCurrencyFromChange}>
                    {currencyCodes.map((currencyCode) => (
                    <option key={currencyCode} value={currencyCode}>{currencyCode}</option>))}
                </select>
            </div>
            <div className="take-input-wrapp">
                <label htmlFor="take" className="info-label">Отримаю</label>
                <input type="number" id="take" className="take-input" value={amountTo} onChange={this.handleAmountToChange} ></input>
                <select className="curr-select" value={currencyTo} onChange={this.handleCurrencyToChange}>
                    {currencyCodes.map((currencyCode) => (
                    <option key={currencyCode} value={currencyCode}>{currencyCode}</option>))}
                </select>
            </div>
        </div>
        )
    }
}
    
export default Form;