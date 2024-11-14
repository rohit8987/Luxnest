import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import App from './App'
import './index.css'
import store from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider >
      <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
