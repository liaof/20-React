import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav />);
    });
  
    // snapshot test
    it('matches snapshot', () => {
      const { asFragment } = render(<Nav />);
      // assert value comparison
      expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', ()=> {
    it('inserts emoji into the h2', ()=> {
        // Arrange
        const { getByLabelText } = render(<Nav />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');// check if the element with a label text = 'camera' has 📸 as content  
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');// finds element with property of data-testid = 'link' and checks if it has'Oh Snap!' as content
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })

