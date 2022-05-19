
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import ErrorBoundry from './components/common/ErrorBoundry';

import './styles/index.css'


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </Provider>
  )