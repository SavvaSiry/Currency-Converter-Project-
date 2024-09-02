# Currency Converter Project - Test Task

This project is a currency converter built using Vue 3 with a focus on minimalism and reliance on Vue’s built-in features rather than external libraries. The project consists of two primary pages: **Home** and **Convert**, and includes a dropdown for changing the base currency globally across the application.

## Features
- **Vue 3 Composition API**: Utilizes Vue 3’s Composition API to manage state, reactivity, and lifecycle hooks in a more modern and flexible manner.
- **Vue Router**: A simple router setup to navigate between the **Home** and **Convert** pages.
- **Reactive Global State Management**: State management is handled internally within Vue components without relying on external libraries like Vuex or Pinia, ensuring simplicity and avoiding extra dependencies.
- **Real-time Currency Conversion**: Dynamic conversion of currencies with automatic updates when the user inputs a value in either of the input fields.
- **Global Currency Selection**: Allows the user to select the base currency via a dropdown in the header, which then reflects throughout the app for all conversions and exchange rate displays.
- **Minimal Dependencies**: The project is designed to showcase a clean, efficient implementation that takes full advantage of Vue’s ecosystem, reducing the need for unnecessary libraries.

## Technologies Used

- **Vue 3**: The latest version of Vue.js with its powerful reactivity system and Composition API.
- **Vue Router**: For managing page navigation.

## Project Structure

```
src/
│
├── components/
│   ├── AppHeader.vue           // Global header component with currency dropdown
│   
├── pages/
│   ├── HomePage.vue         // Home page displaying exchange rates
│   └── ConvertPage.vue      // Currency converter with dynamic inputs
│
├── layouts/
│   └── LayoutDefault.vue    // Default layout
│
├── store/
│   └── store.js             // Global store using Vue's reactive and ref features
│
├── services/
│   ├── apiService.js        // Fetches exchange rates from external API
│   └── conversionService.js // Handles currency conversion logic
│
├── App.vue                  // Main app component
├── main.js                  // Main entry point, sets up router and store
└── router.js                // Vue Router configuration
```

## How to Run the Project

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run serve
   ```

4. **Open the app**:  
   Visit `http://localhost:8080` in your browser to view the application.

## How It Works

### Global Currency Selection
In the **Header.vue** component, a dropdown allows users to select the base currency for the entire app. The selected currency is stored in a global reactive state, which is accessed by both the **HomePage.vue** and **ConvertPage.vue** components.

### Exchange Rates
- On the **Home Page**, the app fetches and displays exchange rates for the base currency relative to other available currencies.
- The exchange rates are obtained from an external API, and the data is stored in a reactive global state using Vue’s `ref` and `reactive` APIs.

### Conversion Logic
- On the **Convert Page**, two dropdowns allow the user to select different currencies, and two input fields allow for dynamic currency conversion. The conversion is bidirectional—changing either input field will update the other based on the selected currencies.

### Minimal External Libraries
The project intentionally limits the use of external libraries to keep the implementation as simple and lean as possible. By utilizing Vue 3's built-in functionality for state management, reactivity, and routing, the project avoids adding unnecessary complexity with third-party libraries. This leads to:
- **Faster development cycles** with fewer dependencies to manage.
- **Simplified maintenance** as there's less risk of external dependencies causing compatibility issues in the future.
- **Improved performance** due to reduced bundle sizes.

## Considerations and Benefits
- **Small Bundle Size**: Because no external state management libraries (like Vuex or Pinia) are used, and CSS frameworks are omitted, the project remains lightweight.
- **Flexibility**: Vue 3's Composition API allows for easy extension and modification of the state management and reactivity system if the project were to grow.
- **Readability**: By utilizing Vue’s built-in features, the codebase remains clean, easier to understand, and maintainable for future developers.

## Improvements and Future Work
- **Error Handling**: More robust error handling could be implemented, especially in areas where network requests might fail.
- **Testing**: Unit tests could be added to ensure the reliability of the core functionality, such as currency conversion and API integration.
- **Responsive Design**: While basic responsive styling is implemented, more detailed UI/UX enhancements could improve the user experience on smaller devices.

## Conclusion

This project demonstrates how to build a simple, yet efficient, currency converter using Vue 3 without relying heavily on external libraries. By keeping the dependency footprint small, the project highlights the power and flexibility of Vue 3’s ecosystem, allowing for maintainable, performant, and scalable applications.

