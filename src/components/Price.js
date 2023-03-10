import React from 'react';
import axios from 'axios';
import { TbCoinEuro, TbCoinPound, TbCoin, TbCoinYen, TbCoinYuan } from "react-icons/tb";

const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
class Price extends React.Component {
    state = {
        usd: '',
        eur: '',
        pln: '',
        jpy: ''
};

componentDidMount() {
    axios.get(baseUrl)
        .then(response => {
            const data = response.data;
            const usd = data.find(item => item.cc === 'USD');
            const eur = data.find(item => item.cc === 'EUR');
            const pln = data.find(item => item.cc === 'PLN');
            const jpy = data.find(item => item.cc === 'JPY');
            this.setState({
                usd: usd.rate.toFixed(2),
                eur: eur.rate.toFixed(2),
                pln: pln.rate.toFixed(2),
                jpy: jpy.rate.toFixed(2)
            });
        })
        .catch(error => {
            alert(error);
        });
    }

render() {
    return (
        <div className="currency-wrapper">
            <div className="euro curr">
                <TbCoinEuro className="curr-img"/>
                <span className="currency-span">/</span>
                <span className="currency-span">{this.state.eur} UAH</span>
            </div>
            <div className="usd curr">
                <TbCoin className="curr-img" />
                <span className="currency-span">/</span>
                <span className="currency-span">{this.state.usd} UAH</span>
            </div>
            <div className="zlot curr">
                <TbCoinPound className="curr-img" />
                <span className="currency-span">/</span>
                <span className="currency-span">{this.state.pln} UAH</span>
            </div>
            <div className="yen curr">
                <TbCoinYen className="curr-img" />
                <span className="currency-span">/</span>
                <span className="currency-span">{this.state.jpy} UAH</span>
            </div>
        </div>
    );
    }
}

export default Price;