# ⚛️ React.js Learning Catalog

[![React](https://img.shields.io/badge/React-v18/v19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Tooling-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-State-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-BaaS-FD366E?logo=appwrite&logoColor=white)](https://appwrite.io/)

Welcome to my personal **React.js Learning Catalog**! This repository is a structured, hands-on roadmap documenting my journey through modern React.js development (inspired by the famous *Chai aur Code* series by Hitesh Choudhary). It spans from foundational rendering concepts to production-grade state management architectures and cloud-integrated applications.

---

## 🗺️ Learning Roadmap & Catalog

Below is a detailed breakdown of each sub-project, the core React paradigms learned, and links to explore their code:

| # | Project Directory | Core React Concepts Learned | Core Technologies / Hooks |
| :--- | :--- | :--- | :--- |
| 01 | **[01basicreact](file:///c:/Users/jaish/Desktop/react-cac/01basicreact)** | Traditional React boilerplate scaffolding using Create React App. | `npx create-react-app` |
| 02 | **[01vitereact](file:///c:/Users/jaish/Desktop/react-cac/01vitereact)** | Modern, fast build tooling setup with Vite; understanding fast refresh. | `npm create vite@latest` |
| 03 | **[customReact](file:///c:/Users/jaish/Desktop/react-cac/customReact)** | Rebuilt a mini React rendering engine using raw vanilla JavaScript to understand virtual DOM trees and node instantiation. | Virtual DOM, `document.createElement` |
| 04 | **[02counter](file:///c:/Users/jaish/Desktop/react-cac/02counter)** | Hook basics and state variables. Visualizing UI reactivity and update batching. | `useState` |
| 05 | **[03tailwindProps](file:///c:/Users/jaish/Desktop/react-cac/03tailwindProps)** | Component reusability, custom functional properties, and quick utility class styling. | `props`, Tailwind CSS |
| 06 | **[04bgChanger](file:///c:/Users/jaish/Desktop/react-cac/04bgChanger)** | Dynamic styling, state updates on user triggers, and inline color mutation. | `useState`, inline styles |
| 07 | **[05passwordGenerator](file:///c:/Users/jaish/Desktop/react-cac/05passwordGenerator)** | High performance memoization, effect execution synchronization, and reference access. | `useCallback`, `useEffect`, `useRef` |
| 08 | **[06currencyConverter](file:///c:/Users/jaish/Desktop/react-cac/06currencyConverter)** | Fetching live currency rates, implementing input modularity, and crafting customizable React hooks. | Custom Hooks, REST API fetching |
| 09 | **[07reactRouter](file:///c:/Users/jaish/Desktop/react-cac/07reactRouter)** | Multi-page Single Page Applications (SPAs), route configurations, nested layout templates, loaders, and URL params. | React Router DOM v6+, loaders |
| 10 | **[08miniContext](file:///c:/Users/jaish/Desktop/react-cac/08miniContext)** | Global state tracking without "prop drilling". Context setup, state binding, and standard consumers. | React Context API, `useContext` |
| 11 | **[09themeSwitcher](file:///c:/Users/jaish/Desktop/react-cac/09themeSwitcher)** | Polished Light/Dark theme switching toggles linked directly to Tailwind dark classes. | Context Providers, classList toggles |
| 12 | **[10todoContextLocal](file:///c:/Users/jaish/Desktop/react-cac/10todoContextLocal)** | Complete Todo manager app utilizing multi-context states paired with LocalStorage. | Context API, LocalStorage persistence |
| 13 | **[11reduxToolkitTodo](file:///c:/Users/jaish/Desktop/react-cac/11reduxToolkitTodo)** | Industrial-scale global state control: slice-based reducers, store structure, action dispatchers. | Redux Toolkit (RTK), `useSelector`, `useDispatch` |
| 14 | **[12MegaBlog](file:///c:/Users/jaish/Desktop/react-cac/12MegaBlog)** | Full-stack production-grade blog ecosystem SPA. Features TinyMCE RTE editor, Appwrite backend services, and Redux Toolkit. | Appwrite, RTE TinyMCE, React Hook Form |

---

## 🛠️ Key Skills Mastered

- **Advanced Hook Mechanics:** Memoization using `useCallback` for subcomponent render optimizations, dependency isolation in `useEffect`, and element tracking via `useRef`.
- **Custom React Hooks:** Designing highly reusable modules (e.g., dynamic rate checkers) separating API concerns from presentation.
- **Architectural Routing:** Creating nested pages, prefetching loaders to prevent render delays, and managing responsive navigations.
- **Context API vs. Redux Toolkit:** Assessing state management options, implementing modular Context-based settings, and building sliced RTK store logic for predictable data flows.
- **BaaS Integrations:** Interfacing with enterprise authentication pipelines, cloud asset buckets, and custom JSON databases using Appwrite Cloud SDK.

---

## 🚀 Launching Any Subproject Locally

To run any of the learning modules on your machine, follow these steps:

### 1. Clone the Catalog
```bash
git clone https://github.com/Shresth-11/react-cac.git
cd react-cac
```

### 2. Enter a Subproject Directory
For instance, to run the Todo application:
```bash
cd 10todoContextLocal
```

### 3. Install & Start
```bash
npm install
npm run dev
```
Open your browser to the URL displayed in the terminal to view and experiment with the project!

---

## 🤝 Contributing & Support

This repository houses my learning roadmap, but suggestions and inquiries are always welcome! Feel free to fork the repository or submit pull requests.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

*Written with 💻 and ☕ by [Shresth-11](https://github.com/Shresth-11)* 🚀