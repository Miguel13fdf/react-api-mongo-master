import React from 'react';
import 'primereact/resources/themes/lara-dark-amber/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ProductContextProvider from './contexts/ProductContext';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
        <ProductContextProvider>
            <ProductList/> 
        </ProductContextProvider>
    </div>
  );
}

export default App;
