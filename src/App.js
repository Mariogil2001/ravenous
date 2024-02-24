import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

function App() {
  return (
    <section className='container'>
      <SearchBar />
      <BusinessList />
    </section>
  );
}

export default App;