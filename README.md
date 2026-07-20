# ⛅ Weather App

A real-time weather web app built with HTML, CSS, and JavaScript using the OpenWeatherMap API.

---

## 🌐 Features

- Search weather by city name
- Live data from OpenWeatherMap API
- Shows temperature, condition, humidity, wind speed, feels like
- Shows min / max temperature
- Shows sunrise and sunset time
- Shows sea level and ground level pressure
- Time bar showing current time of day
- Dynamic background that changes based on weather condition
- Blurred background image on the weather card

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

## 🎨 Dynamic Backgrounds

The background of the weather container changes automatically based on the weather condition returned by the API:

| Condition | Background |
|---|---|
| Clear | Orange → Yellow |
| Clouds | Dark blue-grey |
| Rain | Dark blue → Bright blue |
| Drizzle | Navy → Soft blue |
| Thunderstorm | Near black → Deep purple |
| Snow | Soft blue → Icy white |
| Mist / Haze / Fog | Grey → Light grey |

---

## 🔑 API Used

- [OpenWeatherMap - Current Weather API](https://openweathermap.org/current)
- Free tier: 1000 calls/day
- Endpoint:
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

## 📌 Notes

> New API keys from OpenWeatherMap take up to 2 hours to activate after signup.

> To test if your key is active, paste this in your browser:
> ```
> https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_KEY&units=metric
> ```
> If you see JSON data, your key is working.
