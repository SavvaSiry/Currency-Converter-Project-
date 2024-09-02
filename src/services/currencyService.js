// services/currencyService.js

import axios from 'axios';

const API_URL = 'https://status.neuralgeneration.com/api/currency';

export const getCurrencyRates = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching currency rates:", error);
        throw error;
    }
};

// Вспомогательная функция для получения курса между двумя валютами
export const getRateForPair = (fromCurrency, toCurrency, rates) => {
    const pair = `${fromCurrency.toLowerCase()}-${toCurrency.toLowerCase()}`;
    const reversePair = `${toCurrency.toLowerCase()}-${fromCurrency.toLowerCase()}`;

    if (rates[pair]) {
        return rates[pair];
    } else if (rates[reversePair]) {
        return 1 / rates[reversePair];
    } else {
        throw new Error(`Курс для пары ${fromCurrency}-${toCurrency} не найден.`);
    }
};
