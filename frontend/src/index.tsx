import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';   

console.log('index.tsx loaded');
const rootElement = document.getElementById('root');
console.log('root element:', rootElement);

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log('App rendered');
} else {
    console.error('Root element not found!');
}