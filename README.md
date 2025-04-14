# MealNavigator App

## Description
**MealNavigator App** is an **e-commerce application** designed to help users easily discover restaurants in different cities. The app allows users to explore top-rated restaurants, view detailed menus, manage their cart, and place orders. It focuses on providing a smooth, intuitive user experience with a beautiful design and easy navigation.

*Content for this project was gathered by the creator, **Esraa Mohamed Ali**, who meticulously compiled all the features and content for the app.*

## Key Features

- **Restaurant Discovery**  
  - Users can explore top-rated restaurants in specific cities like Chicago, Antwerp, and San Francisco.  
  - Restaurants are filtered based on their ratings (5 stars).  
  - If a user searches for a city not available in the API, the app will display the message "Not matching search."

- **Menu for Each Restaurant**  
  - View a detailed menu for each restaurant, including the following categories:  
    - **Appetizers** (X items)  
    - **Main Courses** (X items)  
    - **Salads** (X items)  
    - **Soups** (X items)  
    - **Desserts** (X items)  
    - **Beverages** (X items)  
  - Each menu item displays:  
    - **Price**  
    - **Rating** (User rating for each dish)  
    - **Description** (Brief information about the dish)  
  - When a user taps on a dish, they are navigated to a detailed page showing more information about the dish, including its price, rating, and description.
  - On the dish details page, the user can:
    - **Add the dish to their cart**  
    - **Select the quantity** of the dish they want to order before adding it to the cart.

- **Cart Management**  
  - Add items to the cart, customize orders, and specify quantities for each dish.  
  - The total price is automatically calculated in the cart, based on the quantity and price of each dish.  
  - Easily update quantities or remove items from the cart.  
  - See a summary of the order, including total price, before proceeding to checkout.

- **Map Integration**  
  - View the exact location of restaurants on an interactive map.  
  - Navigate directly to the restaurant's details page by tapping on a map marker.  
  - Search for restaurants based on location using the map view.

- **Favorites List**  
  - Users can save their favorite restaurants in a "Favorites" list for easy access later.  
  - Users can remove restaurants from their Favorites list and view restaurant locations on the map.

- **User Authentication**  
  - **Firebase Authentication** is used for user registration, login, and logout.  
  - Users can create an account, log in, and log out securely with email/password authentication.

- **Custom UI/UX Design**  
  - A beautiful and user-friendly interface, with a carefully chosen theme and colors.  
  - The app’s design was crafted to ensure a smooth and intuitive user experience.  
  - The layout and elements are designed with the user in mind, ensuring easy navigation and interaction throughout the app.

- **Styled Components**  
  - Styled Components are used in some parts of the project to create reusable, customizable components with clean and maintainable styles.  
  - This approach ensures consistent styling across the app and allows for a more modular and flexible UI.

- **Toast Messages**  
  - Toast messages are implemented to provide real-time feedback to the user for various actions, such as successfully adding an item to the cart or encountering an error.  
  - These messages enhance the user experience by delivering non-intrusive, informative alerts in a visually appealing manner.

- **React Navigation (Stack & Tab Navigator)**  
  - The app uses **React Navigation** to manage navigation between screens.  
  - **Stack Navigator** is used for navigating between pages in a linear flow, such as moving between restaurant details and cart pages.  
  - **Tab Navigator** is used for easy navigation between main sections of the app, such as Home, Search, and Favorites, with a bottom-tab navigation layout for a smooth and intuitive user experience.

- **Context API for State Management**  
  - The app uses the **Context API** for efficient state management across different components.  
  - This approach ensures smooth communication and synchronization of the app's state, such as user authentication, cart data, and restaurant details, without the need for prop drilling.

- **Built with Expo**  
  - The app is built using **Expo**, a framework that allows for faster development, testing, and deployment of React Native applications.  
  - Expo simplifies the setup process, streamlines app-building workflows, and provides access to a rich set of libraries and tools for mobile development.

- **Scalable and Future-Proof**  
  - The app is designed with scalability in mind, allowing for easy expansion of features and support for additional cities, restaurants, and functionalities in the future.

- **Hosting Pending**  
  - Hosting for the app is not yet implemented but will be set up in the future for production deployment.

## Demo Video

- Watch the demo of the MealNavigator App here: [MealNavigator App Demo](https://youtu.be/95SQiUkFxJY?si=d7dcJpTOvuLItqGd)

## Copyright

© 2025 **Esraa Mohamed Ali**. All rights reserved.
