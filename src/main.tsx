import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
// Single source of truth: the portfolio component stays at the project root and
// is imported from there. Edit that one file — there is no copy to keep in sync.
import App from '../idriss_zaghez_spatial_legal_tech_portfolio';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container #root was not found in index.html');
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
