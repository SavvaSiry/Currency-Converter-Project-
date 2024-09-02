// services/conversionService.js
import { getRateForPair } from './currencyService';

export const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
    if (fromCurrency === toCurrency) {
        return amount.toFixed(2);
    }

    // Получаем курс для пары валют
    const rate = getRateForPair(fromCurrency, toCurrency, rates);

    // Выполняем конвертацию и округляем до 2 знаков после запятой
    const convertedAmount = amount * rate;
    return convertedAmount.toFixed(2);
};
