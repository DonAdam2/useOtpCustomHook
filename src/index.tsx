import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
//import meta image
import '@/public/assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//root component
import App from './App';
//styles
import './scss/global.scss';

const container = document.getElementById('root'),
  root = createRoot(container as Element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
