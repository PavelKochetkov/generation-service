import React from 'react';
import ReactDOM from 'react-dom/client';
import init from './init';
import './css/index.css';

const run = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const app = await init();
  root.render(
    <React.StrictMode>
      {app}
    </React.StrictMode>,
  );
};

run();
