<template>
  <div>
    <h1>Конвертация валют</h1>
    <form>
      <div>
        <!-- Первый Dropdown и Input для выбора и ввода -->
        <select v-model="fromCurrency">
          <option
              v-for="currency in availableCurrencies"
              :key="currency"
              :value="currency"
              :disabled="currency === toCurrency"
          >
            {{ currency }}
          </option>
        </select>
        <input
            type="number"
            v-model.number="amountFrom"
            @input="handleFromInput"
        />
      </div>
      <div>
        <!-- Второй Dropdown и Input для выбора и ввода -->
        <select v-model="toCurrency">
          <option
              v-for="currency in availableCurrencies"
              :key="currency"
              :value="currency"
              :disabled="currency === fromCurrency"
          >
            {{ currency }}
          </option>
        </select>
        <input
            type="number"
            v-model.number="amountTo"
            @input="handleToInput"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useCurrencyStore } from '@/store/store';
import { convertCurrency } from '@/services/conversionService';

export default {
  setup() {
    const { rates, fetchRates } = useCurrencyStore();

    // Инициализация состояния
    const amountFrom = ref(0); // Сумма для конвертации из первой валюты
    const amountTo = ref(0);   // Сумма для конвертации во вторую валюту
    const fromCurrency = ref('RUB'); // Первая валюта
    const toCurrency = ref('USD');   // Вторая валюта

    const availableCurrencies = ['RUB', 'USD', 'EUR']; // Пример доступных валют

    // Обрабатываем ввод в верхнем поле (конвертация из fromCurrency в toCurrency)
    const handleFromInput = () => {
      if (fromCurrency.value && toCurrency.value && amountFrom.value >= 0) {
        try {
          amountTo.value = convertCurrency(
              amountFrom.value,
              fromCurrency.value,
              toCurrency.value,
              rates
          ); // Округляем до 2 знаков
        } catch (error) {
          console.error('Ошибка конвертации:', error);
        }
      }
    };

    // Обрабатываем ввод в нижнем поле (конвертация из toCurrency в fromCurrency)
    const handleToInput = () => {
      if (toCurrency.value && fromCurrency.value && amountTo.value >= 0) {
        try {
          amountFrom.value = convertCurrency(
              amountTo.value,
              toCurrency.value,
              fromCurrency.value,
              rates
          ); // Округляем до 2 знаков
        } catch (error) {
          console.error('Ошибка обратной конвертации:', error);
        }
      }
    };

    // Следим за изменением валют и обновляем конвертацию при их изменении
    watch([fromCurrency, toCurrency], () => {
      handleFromInput(); // Пересчитываем при смене валют
    });

    // Загружаем курсы валют при монтировании компонента
    fetchRates();

    return {
      amountFrom,
      amountTo,
      fromCurrency,
      toCurrency,
      availableCurrencies,
      handleFromInput,
      handleToInput,
    };
  },
};
</script>
