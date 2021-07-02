import React, { useEffect } from 'react';
// useState is an API that reflects the lifecycle methods of a component, like mounting unmounting and updating.
// in this case we use it to re-render a value upon update
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
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
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>{/*when About Me is clicked, set contactSelected = false to turn off the contact form */}
              About me
            </a>
          </li>
          {/*the use selected Contact, add the css class 'navActive' */}
          <li className={`mx-2 ${contactSelected && 'navActive'/*note the template literal to use JS within the JSX */}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>{/*turn on the contact form when use clicks Contact */}
          </li>
            {/*  Whenever we .map over anything in JSX, the outermost element must have a 'key' attribute 
            that's set to be something unique. This helps React keep track of items in the virtual DOM. */}
          {categories.map((category) => (
              <li
                className={`mx-1 ${
                  currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
                  // navActive class value is assigned(true) only if Contact hasn't been selected and the current category HAS been selected.
                key={category.name}
              >
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);}}>
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

