import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import App from './App.jsx'
import './index.css'
import { store } from './redux/Store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider  store={store}>
    <ThemeProvider >
      <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)