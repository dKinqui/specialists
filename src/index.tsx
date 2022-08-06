import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Reset } from "styled-reset";

import { store } from 'core/store'

import { Specialists } from 'core/modules'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Reset />
      <Provider store={store}>
          <Specialists />
      </Provider>
  </React.StrictMode>
);

