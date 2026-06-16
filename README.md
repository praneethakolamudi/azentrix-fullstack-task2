# Azentrix Fullstack Task 2 - Weather + News Dashboard

## 🚀 Live Demo
Run locally using the steps below

## 📸 Screenshots
Add screenshots here after running the project

## 🛠️ Tech Stack
- React JS (Vite)
- Axios
- NewsData.io API
- OpenWeatherMap API
- CSS Transitions

## ✨ Features
- Real-time weather by city search
- News with category filtering
- Dark/Light mode toggle
- Skeleton loaders
- Error handling
- localStorage theme preference

## ⚙️ Setup Instructions

1. Clone the Repository
git clone https://github.com/praneethakolamudi/azentrix-fullstack-task2.git

2. Go to Project Folder
cd azentrix-fullstack-task2

3. Install Dependencies
npm install

4. Create .env File
VITE_WEATHER_KEY=your_openweathermap_key
VITE_GNEWS_KEY=your_newsdata_key

5. Run the Project
npm run dev

6. Open in Browser
http://localhost:5173

## 📁 Project Structure
src/
components/
  SearchBar.jsx
  WeatherCard.jsx
  NewsCard.jsx
  CategoryFilter.jsx
  SkeletonLoader.jsx
  ThemeToggle.jsx
hooks/
  useWeather.js
  useNews.js
App.jsx
index.css

## 💡 Approach
- React hooks for state management
- Custom hooks for API calls
- Axios for HTTP requests
- localStorage for theme persistence
- Skeleton loaders for better UX
- Error handling for all API failures

## 🔑 API Keys Required
- OpenWeatherMap: openweathermap.org
- NewsData: newsdata.io

## 👩‍💻 Developed By
Praneeta Kolamudi