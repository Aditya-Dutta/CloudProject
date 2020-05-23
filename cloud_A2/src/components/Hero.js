import React from 'react';
import ButtonsForm from './utility/ButtonsForm';

export default function Hero() {
  return (
    < section className="hero" >
      <div className="hero-body">
        <div className="container">
          <img src="books.jpg" alt="book" className="main-img" />
          <div className="book-btn">
            <ButtonsForm />
          </div>
        </div>
      </div>
    </section >
  )
}
