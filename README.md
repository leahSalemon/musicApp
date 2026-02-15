# 🎵 Music Search App

A fast, modern music search application built with React and TypeScript, powered by the iTunes Search API. This project showcases a clean architecture, smooth user experience, and full device compatibility.

## 🧠 Tech Stack & Architecture
### Frontend: React (Vite) & TypeScript.

* Custom useFetch Hook: A reusable, type-safe hook (using TypeScript Generics) to manage API states like loading and data fetching.

* Service Layer: Decoupled API logic in musicServices.ts for better maintainability.

* Data Conversions: Dedicated conversion logic to map raw API data into clean, frontend-ready objects.

* Performance: Optimized with React.memo and useCallback to ensure 60fps performance.

## ✨ Key Features

* Full Responsive Design: The entire UI is built to be 100% responsive, providing a seamless experience from small mobile screens to large desktop monitors.

* Smooth Animations: Integrated fluid CSS transitions and animations that make the interface feel alive and premium.

* Smart Auto-Search: High-performance search with a built-in debounce mechanism to optimize API usage.

* Polished UX: Every interaction is designed to be stable and intuitive, ensuring a high-end feel for the user.


## 🚀 How to Run

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.