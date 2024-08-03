# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Project Stage 1

1 - Create Vite App
npm create vite@latest PROJECTNAME -- --template react

2 - Page will have - Title - Responsive container with small cards - Each card will have a photo and a name

3 - Fetch from API - API Documentation: https://last-airbender-api.fly.dev - Use random characters endpoint, and limit it to around 20

4 - Store response data from API on state - Store: "\_id", "photoUrl", & "name"

5 - The API should be called only once when the page loads. It should not be called on a rerender.

6 - It should have a at least 2 components, 1 of them being the small card

7 - Should only use Functional Components

8 - Should use hooks: useEffect & useState

Bonus:
9 - Sometimes a character has no "photoURL", what should you do in those cases so it doesn't display a broken image?
