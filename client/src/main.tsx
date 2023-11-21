import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App.tsx';

// react router
import { BrowserRouter as Router } from 'react-router-dom';

//redux Store
import { Provider as ReduxProvider } from 'react-redux';

// tanstack  react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import HomeLoader from './components/HomeLoader.tsx';
import { store, storePersistor } from './reduxStore/store.ts';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate persistor={storePersistor} loading={<HomeLoader />}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
