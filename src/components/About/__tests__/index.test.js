import React from 'react';
import { render, cleanup } from '@testing-library/react';
// render - jest creates a simulated DOM in a Node.js environment to approximate the DOM
// cleanup - removes components from DOM to prevent memory leak.
import '@testing-library/jest-dom/extend-expect';// jest-dom gives access to custom matchers used to test DOM elements
import About from '..';

afterEach(cleanup);

describe('About component', ()=> {// first argument declares we are testing the About component
    // Baseline test
    it('renders',()=>{// first argument declares we are testing the render function, second is the callback function that will run the test
        render(<About/>);// render the About componenet using JSX
    });

    // Snapshot test
    it('matches snapshot DOM node structure', ()=> {
        const { asFragment } = render(<About />);// returns a snapshot of the About component
        expect( asFragment()).toMatchSnapshot();// expect the asFragment snapshot to match the snapshot(located in the __snapshots__/ folder)
    })
    // you can update the snapshot by pressing u when the test suite is open(npm run test)
})





