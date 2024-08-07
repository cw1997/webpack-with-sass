import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from "./App";

const dom = document.getElementById('app')
if (dom) {
  const root = ReactDOM.createRoot(dom);
  root.render(<App />);
}
