import React, { useContext } from 'react';
import Intro1 from './components/intro/Intro1';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './Context';

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color:darkMode ? "white" : "#222"}}>
      <Toggle/>
      <Intro1 mode={darkMode}/>
      <About mode={darkMode}/>
      <ProductList mode={darkMode} />
      <Contact />
    </div>
  );
};

export default App;
