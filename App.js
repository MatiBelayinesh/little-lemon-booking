// src/App.js
import React from 'react';
import BookingForm from './BookingForm';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Little Lemon Restaurant</h1>
      </header>
      <main>
        <BookingForm />
      </main>
    </div>
  );
};

export default App;
