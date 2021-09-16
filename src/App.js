import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Navbar count={count}/>
    <Header />
    <Section count={count} setCount={setCount}/>
    <Footer />
    </>
  );
}

export default App;
