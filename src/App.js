// root component which houses all other components/ center of the ap

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';



// Inside the function, it seems that HTML is all that's returned. But actually, it's not HTML; it's a language 
// called JSX that can represent HTML in JavaScript. Normally you can't add HTML to JavaScript, at least without 
// making it a string. But it won't break the code in this case, because you're using webpack and React. Think of 
// functions that return JSX as functions that use document.createElement(JSX). In fact, the way React uses JSX 
// behind the scenes is very similar to document.createElement().


function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      {/* The Nav component will return a single JSX element which will be the <header></header>  */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery currentCategory={currentCategory}>       
        </Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}
export default App;
