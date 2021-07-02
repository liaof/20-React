import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

const portrait = { name: 'portraits', description: 'Portraits of people in my life'};

afterEach(cleanup)

describe('Gallery is rendering', () => {

    it('renders', () => {
        render(<Gallery currentCategory = {portrait} />)
    });

    //even though the gallery code doesnt hold the images, the snapshot will know about it's contents like images
    it('matches snapshot', ()=>{
        const { asFragment } = render(<Gallery currentCategory = {portrait}/>)
        expect(asFragment()).toMatchSnapshot()
    })

    // make sure the title of the <h1> is 'Portraits'
    it('renders', ()=> {
        const { getByTestId } = render(<Gallery currentCategory ={portrait}/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    })

    
})

