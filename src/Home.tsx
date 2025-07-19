// pages/Home.js
import React from 'react';
import Nav from './Nav';
import Display from './Display';
import Body from './Body';
import About from './About';
import Testimonial from './Testimonial';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Display />
      <Body />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
}
