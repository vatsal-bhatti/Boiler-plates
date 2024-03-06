import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootreducer.jsx';
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(rootReducer,composeWithDevTools())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
    
  </React.StrictMode>,
)
