# ☕ Cofflavour

**Cofflavour** is a modern, responsive React-based coffee e-commerce and portfolio website. It features a clean glassmorphism aesthetic, fluid typography, and seamless routing to deliver a premium user experience across all devices.

## ✨ Features

- **Fully Responsive Design:** Carefully crafted layouts that look brilliant on desktops, tablets, and smartphones.
- **Dynamic Product Data:** Fetches coffee product listings and detailed views from a local mock API (`json-server`).
- **Modern UI Patterns:** Employs glassmorphism, smooth animations, fluid typography (`clamp()`), and a custom CSS variable-driven design system.
- **Routing & Navigation:** Built with React Router v6, featuring active link states, mobile hamburger menus, and intelligent "Scroll-To-Top" capabilities on route changes.
- **Authentication Stubs:** Beautifully designed Login and Sign Up UI pages.
- **Iconography:** Integrated effortlessly using `react-icons` and `@iconify/react`.

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Routing:** React Router DOM (v6)
- **Styling:** Vanilla CSS (Flexbox, CSS Grid, Media Queries, CSS Variables)
- **Backend (Mock API):** JSON-Server
- **Icons:** React Icons, Iconify

## 🚀 Getting Started

To run this project locally, you will need to start both the Vite development server and the mock JSON-Server.

### 1. Installation
Clone the repository, then install the required dependencies:
```bash
npm install
```

### 2. Start the Backend API
The application relies on `json-server` to fetch the coffee items. Open a terminal window and run:
```bash
npx json-server --watch coffee-data/cof-db.json --port 4000
```
This will start the mock database on `http://localhost:4000`.

### 3. Start the Frontend Application
Open a **second** terminal window and run the Vite dev server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 📂 Project Structure

- `src/component/`: Reusable React components (Navbar, Footer, ContactMethods, ScrollToTop, etc.)
- `src/pages/`: Main route views (Home, About, Products, ProductDetails, Contact, LogIn, SignUp)
- `src/styles/`: Vanilla CSS stylesheets
- `src/layout/`: Holds the `RootLayout` which maintains the permanent Header/Footer wrapper
- `coffee-data/`: Holds the `cof-db.json` file for the JSON server.

## 🤝 Contributing
Feel free to open issues or submit pull requests for any improvements or bugfixes!
