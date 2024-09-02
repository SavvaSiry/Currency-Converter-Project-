import { ref, reactive } from 'vue';

// Глобальные реактивные состояния
const baseCurrency = ref('RUB');
const rates = reactive({});
const loading = ref(false);
const error = ref(null);

// Функции для управления состоянием
const setBaseCurrency = (newCurrency) => {
    baseCurrency.value = newCurrency;
};

const updateRates = (newRates) => {
    Object.assign(rates, newRates);
};

const setLoading = (value) => {
    loading.value = value;
};

const setError = (err) => {
    error.value = err;
};

// Функция для получения курсов валют с API
const fetchRates = async () => {
    setLoading(true);
    setError(null);

    try {
        const response = await fetch('https://status.neuralgeneration.com/api/currency');
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }
        const data = await response.json();
        updateRates(data); // Обновляем курсы в реактивном объекте rates
    } catch (err) {
        console.error('Ошибка получения курсов:', err);
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

// Экспортируем функции и состояния для использования в компонентах
export const useCurrencyStore = () => {
    return {
        baseCurrency,
        rates,
        loading,
        error,
        setBaseCurrency,
        updateRates,
        fetchRates,  // Добавляем fetchRates в экспорт
        setLoading,
        setError,
    };
};
