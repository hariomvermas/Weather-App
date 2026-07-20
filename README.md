# ⛅ Weather App

A real-time weather web app built with HTML, CSS, and JavaScript using the OpenWeatherMap API.

---

## 🌐 Live Features

- Search weather by city name
- Shows temperature, condition, humidity, wind speed, feels like
- Shows min/max temperature, sunrise, sunset, sea level and ground level pressure
- Time bar showing current time of day
- Live data from OpenWeatherMap API

---

## 🗂️ Project Structure

```
Weather Web/
├── index.html       → page structure
├── style.css        → all styling
├── script.js        → API fetch and DOM updates
└── README.md        → this file
```

---

## 🚀 How to Run

1. Clone or download this project
2. Open `script.js` and replace the API key on line 1:
   ```js
   const API_KEY = 'your_api_key_here';
   ```
3. Get a free API key from [openweathermap.org](https://openweathermap.org/api)
4. Open `index.html` in your browser
5. Type any city name and hit Search

---

## 🔑 API Used

- [OpenWeatherMap - Current Weather API](https://openweathermap.org/current)
- Free tier: 1000 calls/day
- Endpoint used:
  ```
  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric
  ```

---

## 🛠️ Built With

- HTML
- CSS
- JavaScript (Vanilla)
- OpenWeatherMap API

---

## 📌 Note

> New API keys from OpenWeatherMap take up to 2 hours to activate after signup.
