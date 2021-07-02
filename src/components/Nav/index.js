import React, { useEffect } from 'react';
// useState is an API that reflects the lifecycle methods of a component, like mounting unmounting and updating.
// in this case we use it to re-render a value upon update
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;
  
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);// re-render the document.title each time an update/change to the currentCategory variable is made

  

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
            {/*  Whenever we .map over anything in JSX, the outermost element must have a 'key' attribute 
            that's set to be something unique. This helps React keep track of items in the virtual DOM. */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
                // if currentCategory.name == category,name, then and only then navActive will be returned 
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}{/*da category namez*/}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

