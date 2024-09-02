<template>
  <div>
    <h1>Курсы валют относительно {{ baseCurrency }}</h1>
    <ul>
      <li v-for="currency in targetCurrencies" :key="currency">
        1 {{ baseCurrency }} = {{ getRate(currency) }} {{ currency }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useCurrencyStore } from '@/store/store'; // Подключаем глобальное хранилище
import { onMounted, watch, computed } from 'vue';
import { getRateForPair } from '@/services/currencyService';

export default {
  setup() {
    const { baseCurrency, rates, fetchRates } = useCurrencyStore(); // Доступ к глобальному состоянию

    // Определяем доступные валюты для отображения (только USD, EUR, RUB)
    const availableCurrencies = ['USD', 'EUR', 'RUB'];

    // Целевые валюты для отображения, исключая базовую валюту
    const targetCurrencies = computed(() => {
      return availableCurrencies.filter(currency => currency !== baseCurrency.value);
    });

    // Функция для получения курса между базовой валютой и целевой валютой
    const getRate = (currency) => {
      try {
        return getRateForPair(baseCurrency.value, currency, rates).toFixed(2);
      } catch (error) {
        return 'Н/Д';
      }
    };

    // Обновляем курсы при изменении baseCurrency или при монтировании компонента
    const updateRates = async () => {
      await fetchRates();
      console.log('Updated rates for base currency:', baseCurrency.value);
    };

    // Монтируем компонент и следим за изменением baseCurrency
    onMounted(() => {
      updateRates();
    });

    watch(
        baseCurrency,
        () => {
          updateRates();
        },
        { immediate: true }
    );

    return {
      baseCurrency,
      targetCurrencies,
      getRate,
    };
  },
};
</script>
