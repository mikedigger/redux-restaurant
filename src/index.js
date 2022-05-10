import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import RestaurantServiceContext from './components/RestaurantServiceContext';
import store from './store';
import ErrorBoundry from './components/ErrorBoundry';
import RestaurantService from './services/restaurantService';
import './styles/index.css'

const restaurantService = new RestaurantService();


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <ErrorBoundry>
        <RestaurantServiceContext.Provider value={restaurantService}>
          <Router>
            <App />
          </Router>
        </RestaurantServiceContext.Provider >
      </ErrorBoundry>
    </Provider>
  )