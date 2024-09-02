<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/convert">Конвертация</router-link></li>
      </ul>
    </nav>
    <select v-model="baseCurrency" @change="updateBaseCurrency">
      <option value="RUB">RUB</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  </header>
</template>

<script>
import { useCurrencyStore } from '@/store/store'; // Подключаем глобальное хранилище

export default {
  setup() {
    const { baseCurrency, setBaseCurrency } = useCurrencyStore(); // Доступ к глобальному состоянию

    const updateBaseCurrency = () => {
      setBaseCurrency(baseCurrency.value);
    };

    return {
      baseCurrency,
      updateBaseCurrency
    };
  }
};
</script>
