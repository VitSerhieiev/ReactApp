import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/MainContent';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Main />
      <Footer />
    </React.Suspense>
  </React.StrictMode>
);

